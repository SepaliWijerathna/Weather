var express = require('express');
var router = express.Router();
var humidity = require('../Models/humidityModel')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  var data_;
  await humidity.getAllData().then((data)=>{
    data_ = data;
  });
  res.send(data_);

});

module.exports = router;
