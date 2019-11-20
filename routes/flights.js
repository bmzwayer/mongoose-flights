var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Flights Lab' });
});

router.get('/new', flightsCtrl.new);

router.post('/', flightsCtrl.create);

module.exports = router;
