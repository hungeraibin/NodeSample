var http = require('http')

var requestHandler = function(req, res) {
  res.end('hello')
}

// 创建服务器 返回http.Server实例
var web = http.createServer(requestHandler)

// 监听端口 还能完成网络上的操作
web.listen(18000)

console.log('http running on http://localhost:18000')

