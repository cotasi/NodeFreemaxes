// express 및 필요한 모듈들을 가져옵니다.
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// MySQL 연결 설정
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'haruka135',
  password: 'gkfpa135@',
  database: 'haruka',
});

// MySQL 연결
db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Express에 필요한 미들웨어 설정
app.use(bodyParser.json());

// 로그인 API 엔드포인트
app.post('/api/login', (req, res) => {
  const { id, password } = req.body;

  // MySQL에서 사용자 정보를 조회하는 쿼리
  const sql = 'SELECT * FROM useinfo WHERE userid = ? AND userpw = ?';

  // 쿼리 실행
  db.query(sql, [id, password], (err, results) => {
    if (err) {
      console.error('MySQL query error:', err);
      res.status(500).json({ error: '서버 오류' });
      return;
    }

    // 결과가 있으면 로그인 성공, 없으면 실패
    if (results.length > 0) {
      res.json({ success: true, user: results[0] });
    } else {
      res.status(401).json({ error: '로그인 실패' });
    }
  });
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});