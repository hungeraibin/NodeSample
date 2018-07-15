const fs = require('fs')
const path = require('path')

// 读取文件时没有指定编码默认读取的是一个Buffer(缓存)

// readFile的方式确实是使用Buffer，但是也是一次性读取
fs.readFile(path.join(__dirname, '../lyrics/血染的风采.lrc'), (err, data) => {
  console.log(data.toString())
})

// 读取图片 转化为base64位
fs.readFile(path.join(__dirname, '../lyrics/cat.jpg'), (err, data) => {
  console.log(data.toString('base64'))
})

let buffer = new Buffer('hello world', 'utf8')

// 文件编码问题
