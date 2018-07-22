// pipe

const fs = require('fs')
const path = require('path')

var reader = fs.createReadStream('../lyrics/cat.jpg')
var writer = fs.createWriteStream('./cat1.jpg')
var writer2 = fs.createWriteStream('./cat2.jpg')

writer.on('pipe', src => {
  console.log(src == reader) // true
})

reader.pipe(writer) // 读取流

reader.pipe(writer2) 

