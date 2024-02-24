const fs = require('fs');
const mysql = require('mysql');
const sqlcon = require('../data/dbconfig.json');
    
// 데이터베이스 연결 설정
const connection = mysql.createConnection(sqlcon);

// SQL 쿼리 실행
const busquery = 'Select * from region_1 inner join region_2 on region_1.region_num = region_2.region_num';
connection.query(busquery, (err, results, fields) => {
    if (err) {
        console.error('Error executing SQL query:', err);
        return;
    }

        // 결과를 JSON 형식으로 변환
        const busresult = JSON.stringify(results,null,2);

        // JSON 파일로 저장
        fs.writeFile('../../front/src/Data/busregion.json', busresult, 'utf8', (err) => {
            if (err) {
                console.error('Error writing JSON file:', err);
                return;
            }
            console.log('JSON 파일이 성공적으로 생성되었습니다.');
        });

        // 데이터베이스 연결 종료
        connection.end();
    });