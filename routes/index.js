var express = require('express');
var router = express.Router();

router.get('/api/v1', function(req, res, next) {
  res.send({ server: 'Express with SQL'})
});

router.get('/health', function(req, res, next) {
  res.send({ status: 'Ok'})
});

module.exports = router;
