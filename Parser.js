var fs = require('fs')



//open file as filename.csv
getData()
function getData(){
  console.log('Open the File')
  fs.readFile('./mediumTest.csv', function(err, data){
    if (err) console.log(err)
    // callback(data)
    const sData = data.toString()
    toArray(sData)
  })
}

//convert file to array
function toArray(str){
  console.log('Reading data')
  const rows = str.split('\r\n')
  const fieldsNames = rows[0].split(',')
  const items = rows.slice(1)
  parseArray(fieldsNames, items)
}

//parse array as formated string
function parseArray(fieldsName, items){
  console.log('Parsing data')
  let count = 1
  let lastRow
  let pString = ""
  //loop through array to parse it
  //the fact that the DB is nicely ordered is very important
  //count can be reseted after every row if it's different from the last 
  for (j = 0; j < items.length; j++){
    let  tempArray = items[j].split(',')
    if (tempArray == lastRow){
      count++;
      continue;
    }else{
      if(j != 0 )
        pString += "quantity: " + count + "\n\n"
      for(i = 0; i < fieldsName.length; i++){
        if (tempArray[i] == null)
          throw new Exception("Required field not found!");
        else 
          pString += fieldsName[i] +": "+ tempArray[i]+"\n"
      }
      count = 1;
      lastRow = items[j];
    }
  }
  pString += "quantity: " + count + "\n\n"

  saveData(pString)
}

//write file to parsed.txt
function saveData(str){
  console.log('Saving data')
  fs.writeFile('Parsed_File.txt', str, function (err) {
    if (err) throw err;
    console.log('Done!');
  });
}
