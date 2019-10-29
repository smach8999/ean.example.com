var express = require('express');
var router = express.Router();
var articles = require('../../models/articles');

router.get('/', function(req, res, next) {
    articles.find({},function(err, articles){
      if(err){
       return res.json({'success':false, 'error': err});
      }
      return res.json({'success':true, 'articles': articles});
    }); 
  });
  

// router.get('/:articleId', function(req,res){});

router.get('/:userId', function(req,res){
    var articlesId = req.params.articleId;
    Users.findOne({'_id':articleId}, function(err, articles){
      if(err){
        return res.json({'success':false, 'error': err});
      }
      return res.json({'success':true, 'articles': articles});
    });
  
  });


// router.post('/', function(req, res) {});

router.post('/', function(req, res) {
    articles.create(new articles({
      title: req.body.title,
      description: req.body.description,
      body: req.body.body,
      published: req.body.published
    }), function(err, user){
      if(err){
        return res.json({success: false, user: req.body, error: err});
      } 
      return res.json({success: true, user: user});
      
    });
  });

// router.put('/', function(req, res){});

router.put('/', function(req, res){
articles.findOne({'_id': req.body._id}, function(err, articles){
  
    if(err) {
      return res.json({success: false, error: err});
    } 
    if(articles) {
     let data = req.body;
     if(data.title){
       articles.title = data.title;
     };

     if(data.description){
        articles.description = data.description;
      };

      if(data.keywords){
        articles.keywords = data.keywords;
      };

      if(data.body){
        articles.body = data.body;
      };

     articles.save(function(err){
       if(err){
         return res.json({success: false, error: err});
       }else{
         return res.json({success: true, user:user});
       }
     });
 
    }
 
   });
   
 });

// router.delete('/:articleId', function(req,res){});

router.delete('/:articleId', function(req,res){

    var articleId = req.params.articleId;
  
    articles.remove({'_id':articleId}, function(err,removed){
  
      if(err){
        return res.json({success: false, error: err});
      }
  
      return res.json({success: true, status: removed});
  
    });
  
  });
    

module.exports = router;

