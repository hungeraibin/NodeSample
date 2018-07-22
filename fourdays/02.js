// 通过自定义模块创建多层目录

var mkdirs = require('./mkdirs')
var path = require('path')

mkdirs('./f1/f2/f3/f4/f5', err => {
  console.log(err)  
})

