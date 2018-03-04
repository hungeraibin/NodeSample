// 连接数据库 使用统一资源定位符
var mongoose = require('mongoose')
var uri = 'mongodb://username:password@hostname:port/databasename'
uri = 'mongodb://localhost/part9'

mongoose.connect(uri)

var BookSchema = mongoose.Schema({ // 指定数据结构和类型
  name: String,
  author: String,
  publishTime: Date 
}) 

mongoose.model('Book', BookSchema) // 指定名字和Schema 