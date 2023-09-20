const express = require('express')
const path = require('path')
const app = express()
const port = 80

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs')

app.use('/static', express.static(path.join(__dirname, 'static')))
app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('components/main',{
    "icon":"https://api.koon2120.online/koon2120-website/asset/logo_favicon.ico",
    "title":"Koon2120 Official Website",
    "description":"welcome to koon2120 official website!!",
    "keywords":"koon2120,koon,koon oppe,koon kutsai",
    "url":req.protocol + "://" + req.hostname + "/",
    "site_name":"Koon2120",
    "og_image":"https://api.koon2120.online/koon2120-website/asset/cover-share.png",
    "style_link":"/static/styles/index.css",
    "page":"../pages/index"
  })
})

app.get('/about', (req, res) => {
  res.render('components/main',{
    "icon":"https://api.koon2120.online/koon2120-website/asset/logo_favicon.ico",
    "title":"About - Koon2120 Official Website",
    "description":"welcome to koon2120 official website!!",
    "keywords":"koon2120,koon,koon oppe,koon kutsai",
    "url":req.protocol + "://" + req.hostname + "/",
    "site_name":"Koon2120",
    "og_image":"https://api.koon2120.online/koon2120-website/asset/cover-share.png",
    "style_link":"/static/styles/global.css",
    "page":"../pages/global"
  })
})

app.get('/news', (req, res) => {
  res.redirect("https://blog.koon2120.online/tag/news")
})

app.get('/blog', (req, res) => {
  res.redirect("https://blog.koon2120.online")
})

app.get('/projects', (req, res) => {
  res.render('components/main',{
    "icon":"https://api.koon2120.online/koon2120-website/asset/logo_favicon.ico",
    "title":"Projects - Koon2120 Official Website",
    "description":"welcome to koon2120 official website!!",
    "keywords":"koon2120,koon,koon oppe,koon kutsai",
    "url":req.protocol + "://" + req.hostname + "/",
    "site_name":"Koon2120",
    "og_image":"https://api.koon2120.online/koon2120-website/asset/cover-share.png",
    "style_link":"/static/styles/global.css",
    "page":"../pages/global"
  })
})

app.get('/follow_us', (req, res) => {
  res.render('components/main',{
    "icon":"https://api.koon2120.online/koon2120-website/asset/logo_favicon.ico",
    "title":"Follow Us - Koon2120 Official Website",
    "description":"welcome to koon2120 official website!!",
    "keywords":"koon2120,koon,koon oppe,koon kutsai",
    "url":req.protocol + "://" + req.hostname + "/",
    "site_name":"Koon2120",
    "og_image":"https://api.koon2120.online/koon2120-website/asset/cover-share.png",
    "style_link":"/static/styles/global.css",
    "page":"../pages/global"
  })
})

app.get('/contact_us', (req, res) => {
  res.render('components/main',{
    "icon":"https://api.koon2120.online/koon2120-website/asset/logo_favicon.ico",
    "title":"Contact Us - Koon2120 Official Website",
    "description":"welcome to koon2120 official website!!",
    "keywords":"koon2120,koon,koon oppe,koon kutsai",
    "url":req.protocol + "://" + req.hostname + "/",
    "site_name":"Koon2120",
    "og_image":"https://api.koon2120.online/koon2120-website/asset/cover-share.png",
    "style_link":"/static/styles/global.css",
    "page":"../pages/global"
  })
})

app.get('/privacy_policy', (req, res) => {
  res.render('components/main',{
    "icon":"https://api.koon2120.online/koon2120-website/asset/logo_favicon.ico",
    "title":"Privacy Policy - Koon2120 Official Website",
    "description":"welcome to koon2120 official website!!",
    "keywords":"koon2120,koon,koon oppe,koon kutsai",
    "url":req.protocol + "://" + req.hostname + "/",
    "site_name":"Koon2120",
    "og_image":"https://api.koon2120.online/koon2120-website/asset/cover-share.png",
    "style_link":"/static/styles/global.css",
    "page":"../pages/global"
  })
})

app.get('/term_of_service', (req, res) => {
  res.render('components/main',{
    "icon":"https://api.koon2120.online/koon2120-website/asset/logo_favicon.ico",
    "title":"Term Of Service - Koon2120 Official Website",
    "description":"welcome to koon2120 official website!!",
    "keywords":"koon2120,koon,koon oppe,koon kutsai",
    "url":req.protocol + "://" + req.hostname + "/",
    "site_name":"Koon2120",
    "og_image":"https://api.koon2120.online/koon2120-website/asset/cover-share.png",
    "style_link":"/static/styles/global.css",
    "page":"../pages/global"
  })
})

app.get('/cookie_policy', (req, res) => {
  res.render('components/main',{
    "icon":"https://api.koon2120.online/koon2120-website/asset/logo_favicon.ico",
    "title":"Cookie Policy - Koon2120 Official Website",
    "description":"welcome to koon2120 official website!!",
    "keywords":"koon2120,koon,koon oppe,koon kutsai",
    "url":req.protocol + "://" + req.hostname + "/",
    "site_name":"Koon2120",
    "og_image":"https://api.koon2120.online/koon2120-website/asset/cover-share.png",
    "style_link":"/static/styles/global.css",
    "page":"../pages/global"
  })
})

app.get('/*', (req, res) => {
  res.render('pages/not_found',{
    "icon":"https://api.koon2120.online/koon2120-website/asset/logo_favicon.ico",
    "title":"Not Found - Koon2120 Official Website",
    "description":"welcome to koon2120 official website!!",
    "keywords":"koon2120,koon,koon oppe,koon kutsai",
    "url":req.protocol + "://" + req.hostname + "/",
    "site_name":"Koon2120",
    "og_image":"https://api.koon2120.online/koon2120-website/asset/cover-share.png",
    "style_link":"/static/styles/not_found.css"
  })
})

app.listen(port, () => {
  console.log(`Koon2120 Website is running as port ${port}`)
})