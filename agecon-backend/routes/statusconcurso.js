var express = require('express');
var router = express.Router();
const StatusController = require('../controllers/statusController');


/*router.get('/', function(req, res, next) {
  res.send(StatusController.getAllStatus);
});*/

router.get('/', StatusController.getAllStatus);

module.exports = router;
