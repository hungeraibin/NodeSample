// PATH模块的使用

const path = require('path')

const temp = path.join(__dirname, '../lyrics/血染的风采.lrc')
// 获取文件名
console.log(path.basename(temp))

// 获取文件名without扩展名
console.log(path.basename(temp, 'rc'))

// 获取不同操作系统中的默认的路径分隔符 Windows是; Linux是:
console.log(path.delimiter)

// 获取环境变量 
// console.log(process.env.PATH.split(path.delimiter))

// 获取目录名称
console.log(path.dirname(temp))

// 获取路径中的扩展名 包含.
console.log(path.extname(temp))

// 将一个路径字符串转换为一个对象（包含文件目录，文件名，扩展名）
var obj = path.parse(temp)
console.log(obj)

// 将对象转化为字符串
var obj = path.parse(temp)
console.log(path.format(obj))

// 判断是否是绝对路径
console.log(path.isAbsolute(temp))

// 拼合路径组成
path.join(__dirname, '..', '1.txt')

// 常规化一个路径
var a = path.normalize('C:/dev\\abc/cba////1.txt')
console.log(a)

// 获取to 相对于 from 的相对路径
// path.relative(from, to)

// 与join不同
console.log(path.resolve(__dirname, '..', 'c:/dev', './thressday'))

// 获取当前操作系统中默认用的路径成员分隔符 windows: \ linux: /
console.log(path.sep)

// 根据操作系统决定
path

// 允许在任何操作系统上使用Windows的方式操作路径
path.win32

// 允许在任何操作系统上使用lLinux的方式操作路径
path.posix


var p = {
  win32: null
}
p.win32 = p
console.log(p == p.win32)
