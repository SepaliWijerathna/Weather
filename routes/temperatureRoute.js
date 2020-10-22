var express = require('express');
var router = express.Router();
var data = require('../Models/temperatureModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(data);
});

module.exports = router;
