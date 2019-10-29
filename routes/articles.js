var express = require('express');
var router = express.Router();
var Articles = require('../models/articles');

// router.get('/', function(req, res, next) {
//   res.render('articles/index', { title: 'Article Management' });
// });

router.get('/', function(req, res, next) {
  Articles.find({},function(err, articles){
    console.log(articles);
    if(err)
    {
      return handleError(err);
    }
      return res.render('articles/index', { title: 'Articles' , articles:articles});
  });
});

// router.get('/:slug', function(req, res, next) {
//   res.render('articles/view', { title: 'Article Slug' });
// });


router.get('/view/:slug', function(req, res, next) {
  Articles.findOne({slug:req.params.slug},function(err, articles){
    if(err)
    {
      return handleError(err);
    }
    else{
      return res.render('articles/view', { title: 'Selected Article' , article:articles});
    }
  });
});

  
  router.get('/app', function(req, res, next) {
    res.render('articles/app', { title: 'Article Management' });
  });
  
module.exports = router;