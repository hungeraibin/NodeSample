const fs = require('fs')
const path = require('path')
console.time('read')
fs.readFile('../lyrics/cat.jpg', (err, data) => {
  if (err) {
    throw err 
  }
  console.timeEnd('read')  
  console.time('write')
  // 读取完文件拿到
  fs.writeFile('../lyrics/cat2.jpg', data, (err, data) => {
    if (err) {
      throw err 
    }
    console.timeEnd('write')
    console.log('拷贝成功')
  })
})

// 大文件拷贝 内存受不了
// 没有进度的概念