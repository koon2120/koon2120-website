const express = require('express')
const path = require("path")
const app = express()
const port = 80

app.use('/static', express.static(path.join(__dirname, 'static')))
app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/index.html'))
})

app.listen(port, () => {
    console.log(`Koon2120 Website is running as port: ${port}`)
})