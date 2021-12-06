var fs = require('fs')
var readline = require('readline')

let fileName = 'miniTest.tsv'
let parsedFileName = 'Parsed_File.txt'

let fileType = fileName.split('.')[1].toLowerCase()
let spacer = fileType=='tsv'?'"	"':'","'

getData()
function getData(){
  let lineCount = 0
  let fieldName = []
  let tempArray = []
  let lastLine
  let tempStr = ''
  let quantityCount = 1
  if (parsedFileName)
    fs.unlinkSync(parsedFileName)
  const writeFile = fs.createWriteStream(parsedFileName,
    {flags: "a", encoding: "UTF-8"})
  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    output:  process.stdout,
    terminal: false
  })
  rl.on('line', (line) => {
    if (lineCount == 0){
     fieldName = line.toString()
     fieldName = fieldName.slice(1, fieldName.length-1).split(spacer)
    }else{
      tempStr = ''
      tempArray = line.toString()
      tempArray = tempArray.slice(1, tempArray.length-1).split(spacer)

      if (line == lastLine) quantityCount ++
      else{
        if(lineCount > 1)
          tempStr += "quantity: " + quantityCount + "\n\n"
        for (i = 0; i < fieldName.length; i++){
          if (tempArray[i] == null)
            throw new Exception("Required field not found!");
          else 
            tempStr += fieldName[i] +": "+ tempArray[i]+"\n"
        }
        quantityCount = 1
        lastLine = line
      }
    }
    writeFile.write(tempStr)
    lineCount++
  })
  rl.on('close',()=>{
    tempStr = "quantity: " + quantityCount
    writeFile.write(tempStr)
  })
}
