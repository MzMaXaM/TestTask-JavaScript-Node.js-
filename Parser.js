var fs = require('fs')
function showData(info){
  console.log(info)
  // console.log(info.length)
}
//open file as filename.csv
getData()

function getData(){
  fs.readFile('./example.csv', function(err, data){
    if (err) console.log(err)
    // callback(data)
    const sData = data.toString()
    toArray(sData)
  })
}
//convert file to array
function toArray(str){
  const rows = str.split('\r\n')
  const fieldsNames = rows[0].split(',')
  const items = rows.slice(1)
  parseArray(fieldsNames, items)
}
//parse array as formated string
function parseArray(fieldsName, items){
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
      // pString += "=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=\n"
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
  // pString += "=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=\n"

  showData(pString)
}
//write file to parsed.txt
