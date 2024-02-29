const express = require("express");
const mysql = require("mysql");
const mydbinfo = require("../data/dbconfig.json");

const mysqlapi = express.Router();

mysqlapi.use(express.json())
mysqlapi.use(express.urlencoded({ extended: true }))

const myconnection = mysql.createPool(mydbinfo)

// /api/gnb gnb 게시판 전체보기
mysqlapi.get('/:tablenm', (req, res) => {
    const tablenm = req.params.tablenm
    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("DB접속정보확인 " + err)
        connect.query(`select * from ${tablenm}`, (error, result) => {
            if (error) throw console.log("글 목록 쿼리문 오류")
            res.send(result)
        })
    })
})
// /api/gnb/1 1번글 보기
mysqlapi.get('/:tablenm/:id', (req, res) => {
    const tablenm = req.params.tablenm
    const pk = req.params.id;
    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("DB접속정보확인 " + err)
        connect.query(`select * from ${tablenm} where id = ${pk}`, (error, result) => {
            if (error) throw console.log("글보기 쿼리문 오류")
            res.send(result)
        })
    })
})
// pk글 삭제
mysqlapi.post('/:tablenm/:id/d', (req, res) => {
    const tablenm = req.params.tablenm
    const pk = req.params.id;
    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("DB접속정보확인 " + err)
        connect.query(`DELETE FROM ${tablenm} WHERE id = ${pk}`, (error, result) => {
            if (error) throw console.log("쿼리문 오류")
            res.send(result)
        })
    })
})
// 글 삽입
mysqlapi.post('/:tablenm', (req, res) => {
    const tablenm = req.params.tablenm;

    //모든 폼태그의 필드와 값을 정리
    const columns = Object.keys(req.body.body).join(', ');
    const values = Object.values(req.body.body).map(value => `'${value}'`).join(', ');
  
    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("Post DB접속정보확인 " + err)
        connect.query(`INSERT INTO ${tablenm}(${columns})
        VALUES (${values})`, (error, result) => {
            if (error) throw console.log("글수정 혹은 글삽입 쿼리문 오류")
            res.send(result)
        })
    })
})
// 글 수정
mysqlapi.post('/:tablenm/:id/m', (req, res) => {
    const tablenm = req.params.tablenm;
    const pk = req.params.id;

    const bodyData = req.body.body;

    //모든 폼태그의 필드와 값을 정리
    const setClause = Object.keys(bodyData).map(key => `${key} = '${bodyData[key]}'`).join(', ');
  
  
    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("Post DB접속정보확인 " + err)
        connect.query(`UPDATE ${tablenm} SET ${setClause} WHERE id = ${pk}`, (error, result) => {
            if (error) throw console.log("글수정 혹은 글삽입 쿼리문 오류")
            res.send(result)
        })
    })
})


module.exports = mysqlapi;