var fs = require('fs')
var readline = require('readline')

let fileName = 'miniTest.tsv'
let fullPathParsedFile = './Parsed_Files/Parsed_File.txt'
let parsedFile = fullPathParsedFile.split('/')[2]
let spacer
//if user don't pass any args
//we tell them to use help
if (process.argv.length == 2)
  console.log(
    'For help run the parser with argument -help\nexample: node Parser -h'
  )
//if user passed arguments
//
if (process.argv.length > 2){
//we check if it's help
//so we can show some info...
  let hp = process.argv[2].toLowerCase()
  if (hp=='help'|hp=='-help'|hp=='--help'|hp=='h'|hp=='-h'|hp=='--h'){
      console.log('\nWelcome to the help file\n'+
      'To use the app you need to call it with 1 or 2 arguments\n'+
      '1\'st for the name of the file you want to parse "csv" or "tsv" formats only\n'+
      'Example: node Parser miniTest.csv\n'+
      '2\'nd is optional, for the name of the Output file\n'+
      ' "txt" type of file only please\n'+
      'Example: node Parser bigTest.tsv Parsed_File.txt\n\n'+
      'Thanks'
      )
  }else{
    const tempName = process.argv[2]
    const tnType = tempName.split('.')[1]
    //make sure it's the right format and length of the file
    if ((tempName.length > 4) && (tnType == 'csv' || tnType == 'tsv')) {
      fileName = tempName
    }
    else {
      console.log('Check the file name')
      return
    }
    //second parameter is for Output file name
    //if it is given by user then we do some cheks
    //before we can use it
    if (process.argv[3]){
      const tempParsedFile = process.argv[3]
      const tpType = tempParsedFile.split('.')[1]
      if ((tempParsedFile.length > 4) && (tpType == 'txt')){
        fullPathParsedFile = `./Parsed_Files/${tempParsedFile}`
        parsedFile = tempParsedFile
      } else 
        console.log(
          "File name you gave for ParsedFile is not valid"+
          "so we are using: \"Parsed_File.txt\"")
    }else
      console.log('As we didn\'t received a name for parsed file\n'+
      'It\'s name will be: Parsed_File.txt')

    
    //set the spacer so we can parse 
    //CSV's and TSV's automaticly
    let fileType = fileName.split('.')[1].toLowerCase()
    spacer = fileType=='tsv'?'"	"':'","'

    //Finaly we parse the file 
    parseData()
  }
}

function parseData(){
  let lineCount = 0
  let fieldName = []
  let tempArray = []
  let lastLine
  let tempStr = ''
  let quantityCount = 1

  //Clean the file if it exists
  //if not create it
  fs.writeFile(fullPathParsedFile, '', err=>{
    if (err)
      console.error(err)
  })

  //createWriteStream for ParsedFile with the flag "a"
  //so we can append line by line as we parse them
  const writeFile = fs.createWriteStream(fullPathParsedFile,
    {flags: "a", encoding: "UTF-8"})

  //create readLine interface to read file line by line
  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    output:  process.stdout,
    terminal: false
  })
  //read lines
  rl.on('line', (line) => {
    //get the fields names 
    if (lineCount == 0){
     fieldName = line.toString()
     fieldName = fieldName.slice(1, fieldName.length-1).split(spacer)
    }else{
      //
      //parse the rest of the file
      //
      tempStr = ''
      tempArray = line.toString()
      tempArray = tempArray.slice(1, tempArray.length-1).split(spacer)
      //
      //if the last line is the same as current one 
      //we increase the count number instead of append it
      if (line == lastLine) quantityCount ++
      else{
        if(lineCount > 1)
          tempStr += `quantity: ${quantityCount}\n\n`
        for (i = 0; i < fieldName.length; i++){
          if (tempArray[i] == '')
            console.error('requested field not fount on line:', lineCount)
          else 
            tempStr += `${fieldName[i]}: ${tempArray[i]}\n`
        }
        quantityCount = 1
        lastLine = line
      }
    }
    writeFile.write(tempStr)
    lineCount++
  })
  //
  //on close we write the last bits 
  //
  rl.on('close',()=>{
    tempStr = "quantity: " + quantityCount
    writeFile.write(tempStr)
    console.log('Done, check the file: ', parsedFile)
  })
}
