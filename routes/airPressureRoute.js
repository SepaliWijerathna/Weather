var express = require('express');
var router = express.Router();
var airPressure = require('../Models/airPressureModel')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  var data_;
  await airPressure.getAllData().then((data)=>{
    data_ = data;
  });
  res.send(data_);

});

module.exports = router;
