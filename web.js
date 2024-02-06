const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8002;
const api = require('./api/api');
const mysql = require('mysql');
const dbdata = require('./data/dbcontact.json');

app.use('/api',api);

app.use(express.json());

app.use(express.static(path.join(__dirname, 'front/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'front/build/index.html'));
});

const sqlconnection = mysql.createPool(dbdata);

app.get("/:dbtable",(req,res)=>{ // 목록 전체
  const {dbtable} = req.params;

  sqlconnection.getConnection((err,connection)=>{
    if(err) throw console.log(`DB Connection error : ${err}`);

    connection.query(`SELECT FROM ${dbtable}`, (error,result)=>{
      if(error) throw console.log(`Query execution error: ${error}`);

      res.send(result);
      connection.release();
    })
  })
})

app.get("/:dbtable/:id",(req,res)=>{ // 글 읽기
  const {dbtable, id} = req.params;

  sqlconnection.getConnection((err,connection)=>{
    if(err) throw console.log(`DB Connection Error: ${err}`);

    connection.query(`SELECT FROM ${dbtable} WHERE wr_id=${id}`,(error,result)=>{
      if(error) throw console.log(`Query execution error: ${error}`);

      res.send(result);
      connection.release();
    })
  })
})

app.post("/:dbtable/mode/write",(req,res)=>{
  const { dbtable } = req.params;
  const { boardsubject,boardtext } = req.body; // 해당 게시판의 필드명

  sqlconnection.getConnection((err,connection)=>{
    if(err) throw console.log(`DB Connection error: ${err}`);

    connection.query(`INSERT INTO ${dbtable} (boardsubject,boardtext) values (?,?)`,[boardsubject,boardtext],(error,result)=>{ // input name 이름
      if(error) throw console.log(`Query Execution error: ${error}`);

      res.send(result);
      connection.release();
    })
  })
  })

app.use((req,res)=>{
  res.status(404).sendFile(path.join(__dirname,'./www/nopage.html'));
})

app.listen(PORT, () => {
  console.log(`${PORT} 노드서버구동정상`);
});
