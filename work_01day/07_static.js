var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')

http.createServer(function(req, res) {
  var pathname = url.parse(req.url).pathname
  if (pathname == '/') {
    pathname = 'index.html'
  }
  var extname = path.extname(pathname)
  fs.readFile('./static/' + pathname, function(err, data) {
    if (err) {
      // 404返回
      fs.readFile('./static/404.html', function(err, data) {
        res.writeHead(404, { 'Content-Type': 'text/html;charset=UTF8' })
        res.end(data)
      })
      return 
    }
    var mime = getMine(extname)
    res.writeHead(200, { 'Content-Type': mime })
    res.end(data)
  })
}).listen(3000)

function getMine(extname) {
  switch(extname) {
    case '.html': 
      return 'text/html'
      break
    case '.jpg': 
      return 'image/jpg'
      break
    case '.css': 
      return 'text/css'
      break
    default: 
      break
  }
}