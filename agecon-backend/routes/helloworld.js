var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('Olá mundo cruel!');
});

router.get('/padrao/', function(req, res, next) {
  res.send('Olá mundo!');
});

module.exports = router;
