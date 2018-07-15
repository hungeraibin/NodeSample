// 移动文件 和 重命名

const fs = require('fs')
const path = require('path')

var currentPath = path.join(__dirname, '../lyrics/temp.txt')
var targetPath = path.join(__dirname, '../lyrics/temp1.txt')

fs.rename(currentPath, targetPath)