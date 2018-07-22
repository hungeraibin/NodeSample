// 建立一个Socket服务端

const net = require('net')

// 建立一个Socket服务器
var server = net.createServer(function socketConnect(socket) {
  // 当有客户端与我们连接的时候触发
  // console.log(`${socket.remoteAddress}:${socket.remotePort} 进来了`)
  // socket.write(`hello${socket.remoteAddress}:${socket.remotePort} 你来啦`)
  // // 监听socket有数据过来
  socket.on('data', chunk => {
    console.log(chunk.toString())
    socket.write('server > 你说啥？')
  })
})



var port = 2080
server.listen(port, (err) => {
  // 成功监听 2080 端口过后执行 如果监听失败（端口被别人用了）会有ERROR
  if (err) {
    console.log('端口被占用')
    return false
  }
  console.log(`服务器正常监听【${port}】端口`)
})