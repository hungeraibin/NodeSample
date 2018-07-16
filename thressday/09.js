// 递归目录树

// 先写一层的情况
// 抽象递归参数
// 找到突破点（避免死循环）
// 自己调自己，某种情况不调用

// 打印当前目录的所有文件

const fs = require('fs')
const path = require('path')  

// 获取当前有没有传入目标路径
var target = path.join(__dirname, process.argv[2] || './')
var depth = 0
function load(target, depth) {
  var prefixs = new Array(depth + 1).join('|  ')

  var dirinfos = fs.readdirSync(target)
  var dirs = []
  var files = []
  
  dirinfos.forEach(info => {
    var stats = fs.statSync(path.join(target, info))
    if (stats.isFile()) {
      files.push(info)
    } else {
      dirs.push(info)
    }
  }) 
  
  dirs.forEach(dir => {
    console.log(`${prefixs}|——${dir}`)
    load(path.join(target, dir), depth + 1)  
  })
  
  var count = files.length - 1
  
  files.forEach(file => {
    console.log(`${prefixs}${count-- ? '|——' : '|__'}${file}`)
  })
}

load(target, depth)

// 无极分类