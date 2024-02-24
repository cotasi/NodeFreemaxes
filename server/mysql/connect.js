const express = require('express');
const busrouter = express.Router();
const mysql = require('mysql');
const dbcon = require('../data/dbconfig.json');

busrouter.use(express.json());
var connect = mysql.createPool(dbcon);

busrouter.use('/',(req,res)=>{
    connect.getConnection((err,connection)=>{
        if(err) throw console.log(err);
        connection.query('Select * from region_1 inner join region_2 on region_1.region_num = region_2.region_num',(error,success)=>{
            if(error) console.log(error)
            res.send(success);
        })
    })
})

module.exports = busrouter;