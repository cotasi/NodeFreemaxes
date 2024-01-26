const mysqls = require('mysql');

const connection = mysqls.createConnection({
    host:'127.0.0.1',
    user:'haruka135',
    password:'gkfpa135@',
    database: 'haruka',
});

connection.connect();

const sqlquery1 = 'SELECT * FROM mainslider';

connection.query(sqlquery1,(error,results)=>{
    if(error) { throw error; }
    const jsonresult = JSON.stringify(results,null,2);
    console.log(jsonresult);

    const fs = require('fs');
    fs.writeFileSync('./front/src/Data/slider.json',jsonresult,'utf-8');
})

const sqlquery2 = 'SELECT * FROM news_table';

connection.query(sqlquery2,(error,results)=>{
    if(error) { throw error; }
    const jsonresult = JSON.stringify(results,null,2);
    console.log(jsonresult);

    const fs = require('fs');
    fs.writeFileSync('./front/src/Data/news.json',jsonresult,'utf-8');

    
});

const sqlquery3 = 'SELECT * FROM func_table';

connection.query(sqlquery3,(error,results)=>{
    if(error) { throw error; }
    const jsonresult2 = JSON.stringify(results,null,2);
    console.log(jsonresult2);

    const fs = require('fs');
    fs.writeFileSync('./front/src/Data/func.json',jsonresult2,'utf-8');
})

connection.end();
console.log('연결종료완료');
