// 文件写入
const fs = require('fs')
const path = require('path')

// JSON.stringfy 序列化
// JSON.parse 反序列化

// 默认覆盖文件
fs.writeFile(path.join(__dirname, '../lyrics/temp.txt'), JSON.stringify({
  id: 10
}), (err) => {
  if (err) {
    // 读文件是不存在报错
    // 意外错误
    // 文件权限问题
    // 文件夹找不到（不会自动创建文件夹）
    console.log('error')
  } else {
    console.log('success')
  }
})

// fs.appendFile()

// fs.writeFileSync()

var streamWriter = fs.createWriteStream(path.join(__dirname, '../lyrics/temp.txt'))
setInterval(() =>{
  streamWriter.write('hello', () => {
    console.log('+1')
  })
}, 1000)