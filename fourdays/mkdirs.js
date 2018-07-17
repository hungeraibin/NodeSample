// 创建层级目录

const fs = require('fs')
const path = require('path')

function mkdirs(pathname, callback) {
  var root = path.dirname(module.parent.filename)

  // 1. 判断传入的是否是一个绝对路径
  pathname = path.isAbsolute(pathname) ? pathname : path.join(root, pathname)

  // 获取要创建的部分
  // pathname = pathname.replace(__dirname, '')
  var relativepath = path.relative(root, pathname)
  var folders = relativepath.split(path.sep)

  try {
    var pre = ''
    folders.forEach(folder => {
      try {
        fs.statSync(path.join(root, pre, folder))  
      } catch (error) {
        fs.mkdirSync(path.join(root, pre, folder))
      }
      pre = path.join(pre, folder)
    })
    callback && callback(null)
  } catch (error) {
    callback && callback(error)
  }
}

module.exports = mkdirs