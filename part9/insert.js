var mongoose = require('mongoose')
require('./model.js')

var Book = mongoose.model('Book') // 不传Schema 则返回model

var book = new Book({
  name: "MEAN Web Development",
  author: "Green",
  publishTime: new Date()
})

book.author = 'Jim'

// 保存方法
book.save(function(err) {
  console.log('save status:', err ? 'failed' : 'success')
})

