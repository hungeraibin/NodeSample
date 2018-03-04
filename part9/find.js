var mongoose = require('mongoose')
require("./model")

var Book = mongoose.model('Book')

// Model的静态方法 find
Book.find({}, function(err, docs) {
  if (err) {
    console.log('err:', err)
    return
  }

  console.log('result', docs) // 数组里的多个对象 
}) 