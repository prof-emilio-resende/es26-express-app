var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('index get...');
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
  console.log('hello endpoint!');
  res.render('index', { title: 'Hello!!!' });
});

module.exports = router;
