var express = require('express');
var router = express.Router();
var lightLevel = require('../Models/lightLevelModel')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  var data_;
  await lightLevel.getAllData().then((data)=>{
    data_ = data;
  });
  res.send(data_);

});

module.exports = router;
