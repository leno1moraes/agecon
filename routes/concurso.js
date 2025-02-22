var express = require('express');
var router = express.Router();
const ConcursoController = require('../controllers/concursoController');

router.post('/', ConcursoController.createConcurso);
router.get('/', ConcursoController.getAllConcurso);
router.get('/allstatus/:id', ConcursoController.getAllConcursoStatus);

module.exports = router;
