const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

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

router.get('/css/commingsoon',function(req,res){
  res.sendFile(path.join(__dirname+'/public/styles/comingsoon.css'));
});
router.get('/css/index',function(req,res){
  res.sendFile(path.join(__dirname+'/public/styles/index.css'));
});
router.get('/scrpit',function(req,res){
  res.sendFile(path.join(__dirname+'/public/script.js'));
});
router.get('/logo_favicon',function(req,res){
  res.sendFile(path.join(__dirname+'/public/content/logo_favicon.png'));
});
router.get('/logo',function(req,res){
  res.sendFile(path.join(__dirname+'/public/content/logo.png'));
});
router.get('/video_bg',function(req,res){
  res.sendFile(path.join(__dirname+'/public/content/video_bg.mp4'));
});

app.use('/', router);
app.listen(4000);
console.log('Running at Port 4000');