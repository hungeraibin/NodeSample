// 打印当前目录的所有文件

const fs = require('fs')
const path = require('path')

require('./proto')

// 获取当前有没有传入目标路径
var target = path.join(__dirname, process.argv[2] || './')

fs.readdir(target, (err, files) => {
  files.forEach(file =>{
    // console.log(path.join(__dirname, file))
    fs.stat(path.join(target, file), (err, stats) => {
      console.log(`${stats.mtime.format('yyyy/MM/dd HH:mm')}\t${stats.size}\t${file}`)
    })
  })
})