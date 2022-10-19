var express = require('express');
var router = express.Router();
const package = require('../package.json')
const time = Date.now();
const now = new Date(time);

router.get('/api/v1', function(req, res, next) {
  res.send({ name: package.name, date: now.toString() })
});

router.get('/health', function(req, res, next) {
  res.send({ status: 'Ok', name: package.name, version: package.version})
});

router.get('/users/:name/:id', (req, res, next) => {
  req.params == undefined && console.log('no hay');
  res.send({ name: req.params.name, id: req.params.id})
});

router.get("/list", (req,res,next) => {
  let numbers = [1,2,3,4,5,6];

  
  res.send({ number: req.query.sort && numbers.sort() })
});

module.exports = router;
