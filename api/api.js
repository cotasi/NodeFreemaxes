var express = require('express');
var router = express.Router();
const contact = require('./contact');

router.use(express.json());

router.use(express.urlencoded({ extended: true}))

// post로 전송
router.post('/',(req,res,next)=>{

    const tables = req.query.bo_table;
    
    req.body.bo_table = tables;

    router.use('/',contact);

    next('route');
})

module.exports = router;