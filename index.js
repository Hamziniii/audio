const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public/'))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || 80, () => console.log('Listening on port ' + process.env.PORT || 80))