var router = require('express').Router();

router.get('/',function(req,res,next){
  res.render('dashboard');
});

module.exports = router;
