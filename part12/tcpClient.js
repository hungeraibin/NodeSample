var net = require('net')

const HOST = '127.0.0.1'
const PORT = 18001

// 创建TCP客户端
var tcpClient = net.Socket()

// 连接
tcpClient.connect(PORT, HOST, function() {
  console.log('connect success.')
  // 给服务器发送数据
  tcpClient.write('this is tcp client by Node.js')
})

tcpClient.on('data', function(data) {
  console.log('received: ', data.toString())
})