var mongoose = require('mongoose')

require('./model.js')

var Book = mongoose.model('Book')

Book.findOne({author: "Jim"}, function(err, doc) {
  if (err) {
    console.log('err: ', err)
  }
  doc.author = 'Jame'
  doc.save() // 保存
  console.log('findOne result: ', doc) // 单个对象
})