const mysql = require('mysql');

// MySQL 연결 설정
const connecter = mysql.createConnection({
  host: '127.0.0.1',
  user: 'haruka135',
  password: 'gkfpa135@',
  database: 'haruka',
});

// MySQL 연결
connecter.connect();

// MySQL 쿼리 수행
const threequery = 'select bus_table1.*,bus_table2.*,bus_table3.* from bus_table1 left join bus_table2 on bus_table1.busregnum = bus_table2.busregnum left join bus_table3 on bus_table2.busnum = bus_table3.busnum';
connecter.query(threequery, (error, results) => {
  if (error) {
    throw error;
  }

  // 데이터를 3단계의 JSON으로 가공
  const data31 = results.reduce((accnew, items) => {
    const { busregnum, busregname, busnum, busname, busstopnum, busn, bustime, busstopall } = items;

    if (!accnew[busregnum]) {
      accnew[busregnum] = {
        busregnum,
        busregname,
        buseach: [],
      };
    }

    if (!accnew[busregnum].buseach.find((bus) => bus.busnum === busnum)) {
      accnew[busregnum].buseach.push({
        busregnum,
        busnum,
        busname,
        busstopnum,
        busn,
        bustime,
        busstopall
      });
    }


    return accnew;
  }, {});

  // 최종 결과
  const finalResultnew = Object.values(data31);

  // JSON 파일로 저장
  const fs = require('fs');
  fs.writeFileSync('./front/src/Data/regionbus.json', JSON.stringify(finalResultnew, null, 3));

  // MySQL 연결 종료
  connecter.end();
});