var express = require('express')

var app = express() 

app.route('/events')
.all(function(req, res) {
  // res.send(req.ip)
  res.send('all')
})
.get(function(req, res) {
  res.send('get')
})
.post(function(req, res) {
  res.send('post')
})

app.listen(3000)
