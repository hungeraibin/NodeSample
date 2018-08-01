var express = require('express')
var fs = require('fs') 

var app = express() 

// app.use(express.static('./public'))
app.use(publicServer)

function publicServer(req, res, next) {
  var filePath = req.originalUrl
  fs.readFile('./public/' + filePath, function(err, data) {
    if (err) {
      next()
      return
    }
    res.send(data)
  })
}

app.listen(3000)