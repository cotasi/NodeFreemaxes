var express = require('express');
var mysqls = require('mysql');
const router = express.Router();
const dbinfo = require('../data/dbcontact.json');

router.use(express.json());
var conn = mysqls.createPool(dbinfo);

router.post('/',(req,res)=>{
    var tablenm = req.body.bo_table;
    conn.getConnection((error,connection)=>{
        if(error) throw console.log('이 에러가 보이면 db 정보 틀림'+err);
        connection.query(`select * from ${tablenm}`,(err,result)=>{
            if(err) throw "여기 에러는 sql문 오류"+ err + result;
            res.send(result);  })
            connection.release();
    })
    /* res.send(`${tablenm}`); */
})

module.exports = router; 