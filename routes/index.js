var express = require('express');
var router = express.Router();
const func = require('../public/javascripts/function');

/* GET home page. */
router.get('/', function(req, res) {
  console.log(func.tabPlannings);
  var content = func.refactorArray(func.tabPlannings);
  content = JSON.stringify(content)
  res.render('index', { title: 'Express', content: content });
});

module.exports = router;