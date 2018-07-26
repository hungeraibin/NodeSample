var http = require('http')
var fs = require('fs')

var server = http.createServer((req, res) => {
  if (req.url == '/fang') {
    fs.readFile('./temp.html', (err, data) => {
      res.writeHead(200, { 'Content-type': 'text/html;charset=UTF-8' })
      res.end(data)
    })
  } else if (req.url == '/yuan') {
    fs.readFile('./temp2.html', (err, data) => {
      res.writeHead(200, { 'Content-type': 'text/html;charset=UTF-8' })
      res.end(data)
    })
  } else if (req.url == '/cat1') {
    fs.readFile('./cat1.jpg', (err, data) => {
      res.writeHead(200, { 'Content-type': 'image/jpg' })
      res.end(data)
    })
  } else if (req.url == '/b.css') {
    fs.readFile('./a.css', (err, data) => {
      res.writeHead(200, { 'Content-type': 'text/css' })
      res.end(data)
    })
  } else {
    res.writeHead(404, { 'Content-type': 'text/html;charset=UTF-8' })
    res.end('没有这个页面')
  }

})

server.listen(8088, '127.0.0.1')

