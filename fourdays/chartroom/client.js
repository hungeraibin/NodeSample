// 客户端

const net = require('net')
const readline = require('readline')

const rl = readline.createInterface(process.stdin, process.stdout)

rl.question('What is your name? ', (name) => {
  name = name.trim()

  if (!name) {
    throw new Error('没名字还出来混！')
  }

  // 创建与服务端连接
  var server = net.connect({ port: 2080, host: '127.0.0.1' }, () => {
    console.log(`Welcome ${name} to 2080 chartroom`)  
    // 监听服务端发过来的数据
    server.on('data', chunk => {
      try {
        var signal = JSON.parse(chunk.toString().trim())      
      } catch (error) {
        server.write('弄啥嘞！')
      }
      var procotol = signal.procotol
      switch(procotol) {
        case 'boardcast':
          console.log('boardcast')
          console.log(signal.from + '>')
          console.log(signal.message)
          break
        default: 
          server.write('弄啥嘞！')
          break
      }
    })
  })

  rl.setPrompt(name + '> ')
  rl.prompt()

  rl.on('line', line => {
    var send = {
      procotol: 'boardcast', 
      from: name, 
      message: line.toString().trim() 
    }
    server.write(JSON.stringify(send))
    rl.prompt()
  }).on('close', () => {

  })
})