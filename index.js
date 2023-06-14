const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
 
app.use('/static', express.static('public'))

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/static/index.html'));
});
router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/static/about.html'));
});
router.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname+'/static/contact.html'));
});
router.get('/news',function(req,res){
  res.sendFile(path.join(__dirname+'/static/news.html'));
});
router.get('/socialmedia',function(req,res){
  res.sendFile(path.join(__dirname+'/static/socialmedia.html'));
});

app.use('/', router);
app.listen(4000);
console.log('Running at Port 4000');