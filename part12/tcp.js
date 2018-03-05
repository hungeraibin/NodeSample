var net = require('net')

const PORT = 18001
const HOST = '127.0.0.1'

// 有客户端连进来时触发 参数net.Socket实例
var clientHandler = function(socket) {
  console.log('someone connected')

  // data事件 参数：客户端发送过来 服务器收到的数据
  socket.on('data', function dataHandler(data) {
    console.log(socket.remoteAddress, socket.remotePort, 'send', data.toString())
    // 服务器向客户端发数据
    socket.write('server received\n')
  })

  // close事件 客户端断开的时候
  socket.on('close', function() {
    console.log(socket.remoteAddress, socket.remotePort, 'disconnected')
  })
}

// 创建TCP服务器 监听器加入到connection事件里 
var app = net.createServer(clientHandler)

// 监听端口
app.listen(PORT, HOST)
console.log('tcp server running on tcp://', HOST, ':', PORT)