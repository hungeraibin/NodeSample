// 建立一个Socket客户端

const net = require('net')

const socket = net.connect({ port: 2080 }, () => {
  console.log('connected to server!')
  // socket.write('wrold\r\n')
  process.stdout.write('\nclient >')
  process.stdin.on('data', chunk => {
    // 控制台输入回车
    socket.write(chunk.toString().trim())
  })

  socket.on('data', data => {
    console.log('\n' + data.toString())
  })
})



// socket.on('end', () => {
//   console.log('disconnected from server')
// })