var http = require('http')

var server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/html;charset=UTF-8' })
  res.end('hello world')
})

server.listen(8088, '127.0.0.1')

