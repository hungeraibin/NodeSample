// 创建文件夹

const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'demo1'))

// fs.mkdir(path.join(__dirname, 'demo2/demo3'), (err) => {
//   console.log(err)
// })

var mkdirs = require('./mkdirs')

// mkdirs('demo2/demo3')
mkdirs(path.join(__dirname, 'demo2/demo3'), err => {
  console.log(err)
})
