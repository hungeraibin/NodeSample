// var http = require('http')

// var a = 100 

// var server = http.createServer(function(req, res) {
//   a++; 
//   res.end(a.toString())
// })

// server.listen(3000)

var express = require('express')

var app = express() 

app.get('/:username/:id', function(req, res, next) {
  res.send('用户名')
  next()
})

app.get('/admin/login', function(req, res) {
  res.end('登陆成功')
})
