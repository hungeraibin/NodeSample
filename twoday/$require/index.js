// 自己写一个require函数

function $require(id) {
  // 1. 先找到文件 如果文件不存在  
  // 2. 读取文件内容 内容是JS代码
  const fs = require('fs')
  const path = require('path')

  // 要加载的JS文件路径（完整路径）
  const filename = path.join(__dirname, id)
  const dirname = path.dirname(filename) 

  let code = fs.readFileSync(filename, 'utf8') // 不会进事件队列
  // 3. 执行代码，所要执行的代码 需要营造一个私有空间
  // 定义一个数据容器，用容器去装模块导出成员
  let module = {
    id: filename,
    exports: {}
  }
  let exports = module.exports // 快捷方式指向同一对象
  code = `(function($require, module, exports, __dirname, __filename) {
    ${code}
  })($require, module, exports, dirname, filename)`

  eval(code)
  // 4. 返回值
  return module.exports
}

// let m4 = $require('./module/module4.js')

// m4.say("hello")

let m1 = $require('./module1.js')
m1.a.say()
m1.b.say()

// require核心作用: 读文件 将文件中的代码执行 导出的成员存储的Module模块 然后返回