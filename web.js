const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 8001;
const iconv = require('iconv-lite'); // iconv 추가
const csvtojson = require('csvtojson'); // csvtojson 추가
const axios = require('axios');
const mysql = require('mysql');
const csvs = require('fast-csv');


app.use(express.json());



app.use(express.static(path.join(__dirname, 'front/build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'front/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`${PORT} 노드서버구동정상`);
});


/* 데이터 읽어오기 */

function convertcsvtojson(csvFilePath,encoding) {
  return new Promise((resolve,reject) => {
    const jsonData = [];
    const fileContents = fs.readFileSync(csvFilePath);
    const decodedContents = iconv.decode(fileContents, encoding).replace(/^\uFEFF/,'');
  

    
    csvs.parseString(decodedContents, { headers: true })
    .on('data',(row)=>{jsonData.push(row);})
    .on('end',()=>{resolve(jsonData)})
    .on('error',(error)=>{reject(error);})

  })
}

const filemapping = [
  {csvfile: './front/src/Data/Trips.csv', outputfile: './front/src/Data/Trips.json'},
]

const promises = filemapping.map(({csvfile,outputfile})=>{
  return convertcsvtojson(csvfile,'UTF-8').then((jsonData)=>{
    fs.writeFileSync(outputfile, JSON.stringify(jsonData,null,2));
  });
});

Promise.all(promises)
.then(()=>{
  const outputfile = ''
  console.log('All csv files have been processed');
})
.catch((error)=>{
  console.error('error during processing csv files:',error);
}) 