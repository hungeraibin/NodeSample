var http = require('http')

// 创建一个服务器
var server = http.createServer(function(req,  res) {
  console.log('服务器接收到了请求' + req.url)
  res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF8' })
  res.write('<h2>__</h2>')
  res.end('<h1>HTTP</h1>')
})

server.listen('3000', '127.0.0.1')