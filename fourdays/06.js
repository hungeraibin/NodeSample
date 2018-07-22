const fs = require('fs')
const path = require('path')

// 创建文件的读取流 并没有读出真实的数据 (缓存区 磁盘与内存之间的联系)
var reader = fs.createReadStream('../lyrics/cat.jpg')
// 创建一个写入流
var writer = fs.createWriteStream('./cat.jpg')

fs.stat('../lyrics/cat.jpg', (err, stats) => {
  if (stats) {
    var readTotal = 0
    reader.on('data', chunk => {
      // chunk 是一个 buffer (字节数组)
      writer.write(chunk, err => {
        console.log('写了一点 进度:' + ((readTotal += chunk.length) / stats.size * 100) + '% ')
      })
    })

    reader.on('end', () => {
      // 没有了 
    })
  }
})  

