var express = require('express');
var router = express.Router();
var temp = require('../Models/temperatureModel')
var convert = require('xml-js');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  var data_;
  await temp.getAllData().then((data)=>{
    data_ = data;
  });
  res.send(data_);

});

router.post('/', function(req, res, next) {
  var data = req.rawBody;
 
  var data_j = convert.xml2json(data, {compact: true, spaces: 4});

  temp.saveData(data_j);
  res.send("data saving");
});

module.exports = router;
