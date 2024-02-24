const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8002;
const depth = require('./server/mysql/depth.js')

app.use(express.json());
app.use(express.static(path.join(__dirname, 'front/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'front/build/index.html'));
});

app.use('server/mysql',depth);

app.use((req,res)=>{
  res.status(404).sendFile(path.join(__dirname,'./www/nopage.html'));
})

app.listen(PORT, () => {
  console.log(`${PORT} 노드서버구동정상`);
});
