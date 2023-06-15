const express = require('express');
const app = express();
const path = require('path');

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/static/index.html'));
});
app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/static/about.html'));
});
app.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname+'/static/contact.html'));
});
app.get('/news',function(req,res){
  res.sendFile(path.join(__dirname+'/static/news.html'));
});
app.get('/socialmedia',function(req,res){
  res.sendFile(path.join(__dirname+'/static/socialmedia.html'));
});
app.get('/video',function(req,res){
  res.sendFile(path.join(__dirname+'/public/content/video_bg.mp4'));
});

app.listen(4000);
console.log('Running at Port 4000');