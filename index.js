const express = require('express')
const path = require('path')
const app = express()
const port = 80

//!!!!! change anyway !!!!!
const key_file = 98742
//!!!!!!!!!!!!!!!!!!!!!!!!!

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs')

app.use('/static', express.static(path.join(__dirname, 'static')))
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.json())

const tags = ["general", "news","announcement"]
const contents = [
    { "id": "38306", "title": "แจ้งการเปลื่ยนแปลงเว็บไซต์ใหม่ หน้าตาใหม่!", "date": "26/3/2567", "tag": "announcement", "thumnail": "https://i.ibb.co/swQgGXt/koon2120-announcement-260325670141.png" },
    { "id": "57967", "title": "(ข่าวสาร) มาอวยพรวันเกิดกันดีกว่า", "date": "3/12/2566", "tag": "news", "thumnail": "https://i.ibb.co/nRLcRfj/57967.jpg" },
    { "id": "68372", "title": "(ข่าวสาร) koon2120.online เว็บไซต์เวอร์ชั่นใหม่!", "date": "21/9/2566", "tag": "news", "thumnail": "https://i.ibb.co/BcZ14Cp/68372.jpg" },
    { "id": "14915", "title": "(ประกาศ) ประกาศปรับเปลื่ยนอีเมลติดต่ออีกครั้ง!", "date": "21/8/2566", "tag": "announcement", "thumnail": "https://i.ibb.co/d4VGXZ0/koon2120-announcement.jpg" },
    { "id": "37701", "title": "(ประกาศ) ประกาศเปลื่ยนอีเมลติดต่อ", "date": "24/7/2566", "tag": "announcement", "thumnail": "https://i.ibb.co/d4VGXZ0/koon2120-announcement.jpg" },
    { "id": "24211", "title": "สวัสดีกับบล็อกแรก!", "date": "20/7/2566", "tag": "general", "thumnail": "https://i.ibb.co/LktG6fv/koon2120-cover.png" }
]

app.get('/', (req, res) => {
  res.render(`pages/main-${key_file}`, {
    "icon": "/static/images/logo.png",
    "title": "Koon2120 Official Website",
    "description": "welcome to koon2120 official website!!",
    "keywords": "koon2120,koon,koon oppe,koon kutsai",
    "url": req.protocol + "://" + req.hostname + "/",
    "thumnail": "https://i.ibb.co/LktG6fv/koon2120-cover.png",
    "style": `/static/styles/index-${key_file}.css`
  })
})

app.get('/blog', (req, res) => {
  res.render(`pages/list-blog-${key_file}`, {
      "title": "Koon2120 Blog",
      "icon": "/static/images/logo.png",
      "description": "welcome to koon2120 official website!!",
      "keywords": "koon2120,koon,koon oppe,koon kutsai",
      "thumnail": "https://i.ibb.co/GttpPy5/og-cover.png",
      "style": `/static/styles/blog-list-${key_file}.css`,
      "tag_page": false,
      "url": req.protocol + "://" + req.hostname + req.originalUrl,
      "content_list": contents,
      "tag_list": tags,
  });
})

app.get("/blog/tag", (req, res) => {
  res.redirect("/blog")
})

app.get("/blog/tag/:tag", (req, res) => {
  let find_status = false
  for (let i = 0; i < tags.length; i++) {
      if (tags[i] == req.params["tag"]) {
          find_status = true
      }
  }
  if (find_status) {
      let show_content_list = []
      for (let i = 0; i < contents.length; i++) {
          if (contents[i]["tag"] == req.params["tag"]) {
              show_content_list.push(contents[i])
          }
      }
      res.render(`pages/list-blog-${key_file}`, {
          "title": `${req.params["tag"]}`,
          "icon": "/static/images/logo.png",
          "description": "welcome to koon2120 official website!!",
          "keywords": "koon2120,koon,koon oppe,koon kutsai",
          "thumnail": "https://i.ibb.co/GttpPy5/og-cover.png",
          "style": `/static/styles/blog-list-${key_file}.css`,
          "tag_page": req.params["tag"].toUpperCase(),
          "url": req.protocol + "://" + req.hostname + req.originalUrl,
          "content_list": show_content_list,
          "tag_list": tags,
      });
      show_content_list = []
  } else {
      res.redirect("/")
  }
  find_status = false
})

app.get('/blog/content/', (req, res) => {
  res.redirect("/blog")
})

app.get('/blog/content/:content_id', (req, res) => {
  let find_status = false
  let content = []
  for (let i = 0; i < contents.length; i++) {
      if (contents[i]["id"] == req.params["content_id"]) {
          find_status = true
          content.push(contents[i])
      }
  }
  if (find_status) {
      res.render(`pages/blog-${key_file}`, {
          "title": content[0]["title"],
          "icon": "/static/images/logo.png",
          "description": "welcome to koon2120 official website!!",
          "keywords": "koon2120,koon,koon oppe,koon kutsai",
          "thumnail": content[0]["thumnail"],
          "tag_url": req.protocol + "://" + req.hostname + "/tag/" + content[0]["tag"],
          "date":content[0]["date"],
          "tag":content[0]["tag"],
          "content_id":content[0]["id"],
          "style": `/static/styles/blog-${key_file}.css`,
          "url": req.protocol + "://" + req.hostname + req.originalUrl,
      });
  } else {
      res.redirect("/")
  }
  find_status = false
})

app.get('/*', (req, res) => {
  res.render(`pages/not-found-${key_file}`, {
    "title": "Not Found - Koon2120",
    "icon": "/static/images/logo.png",
    "description": "welcome to koon2120 official website!!",
    "keywords": "koon2120,koon,koon oppe,koon kutsai",
    "thumnail": "https://i.ibb.co/LktG6fv/koon2120-cover.png",
    "style": `/static/styles/not-found-${key_file}.css`,
    "url": req.protocol + "://" + req.hostname + req.originalUrl,
  })
})

app.listen(port, () => {
  console.log(`Koon2120 Website is running as port ${port}`)
})