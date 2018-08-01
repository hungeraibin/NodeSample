var express = require('express')

var app = express() 

app.get('/', function(req, res) {
  res.send('hello')
})

app.get(/^\/student\/([\d]{10})$/, function(req, res) {
  console.log(req)
  res.send('学生信息，学号' + req.params[0])
})

app.get('/teacher/:gh', function(req, res) {
  console.log(req.params)
  res.send('老师信息，工号' + req.params.gh)
})

app.listen(3000)

