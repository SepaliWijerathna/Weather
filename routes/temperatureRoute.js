var express = require('express');
var router = express.Router();
var temp = require('../Models/temperatureModel')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  var data_;
  await temp.getAllData().then((data)=>{
    data_ = data;
  });
  res.send(data_);
});

module.exports = router;
