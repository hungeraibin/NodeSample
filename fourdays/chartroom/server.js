const net = require('net')

var clients = []

var server = net.createServer((socket) => {

  clients.push(socket)
  console.log(`Welcome ${socket.remoteAddress} to 2080 chartroom`)

  function boardcast(signal) {
    // console.log(signal)
    // 肯定有用户名和消息
    var username = signal.from
    var message = signal.message
    var send = { 
      procotol: signal.procotol,
      from: username,
      message: message
    }
    // 广播消息 
    clients.forEach(client => {
      client.write(JSON.stringify(send))
    })
  }

  socket.on('data', chunk => {
    // 有任何客户端发消息都会触发
    try {
      var signal = JSON.parse(chunk.toString().trim())      
    } catch (error) {
      socket.write('弄啥嘞！')
    }
    var procotol = signal.procotol
    switch(procotol) {
      case 'boardcast':
        boardcast(signal)
        break
      case 'p2p':
        p2p(signal)
        break
      case 'shake': 
        shake(signal)
        break
      default: 
        socket.write('弄啥嘞！')
        break
    }
  })
})

var port = 2080
server.listen(port, err => {
  if (err) {
    console.log('端口被占用')
    return false
  }
  console.log(`服务器正常监听【${port}】端口`)
})