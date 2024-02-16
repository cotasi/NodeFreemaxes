const express = require("express");
const naviapp = express.Router();

naviapp.use(express.json())
naviapp.use(express.urlencoded({ extended: true }))


const conntectRouter = require("../mysql/connect")

naviapp.get("/:tablenm", (req, res, next) => {
  const tablenm = req.params.tablenm;
  req.body.crud = "select";
  req.body.tablenm = tablenm;
  naviapp.use("/", conntectRouter)
  next('route')
})
naviapp.post('/:tablenm', (req, res, next) => {
  const tablenm = req.params.tablenm;
  const formData = req.body.body; // 제일 중요함

  // console.log('Received formData:', formData);
  // res.status(200).json({ formData, tablenm });

  if (tablenm == "myform") {
    req.body.crud = "insert";
    req.body.tablenm = tablenm; 
  }
  
  naviapp.use("/", conntectRouter)
  next('route')

})

module.exports = naviapp;