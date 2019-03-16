var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cafeteria Tecmilenio' , mensaje: 'Bienvenido a Cafeteria Tecmilenio'});
});

router.get('/menu.html', function(req, res, next) {
  res.render('menu');
});

router.get('/combos.html', function(req, res, next) {
  res.render('combos');
});

router.get('/snacks.html', function(req, res, next) {
  res.render('snacks');
});

module.exports = router;


