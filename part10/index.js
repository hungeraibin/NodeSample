var mongoose = require('mongoose')

var BookSchema = new mongoose.Schema({
  isbn: {
    type: Number,
    unique: true // 唯一索引
  },
  name: {
    type: String,
    index: true // 辅助索引
  }
})

var Book = mongoose.model('Book', BookSchema)

var book = new Book({
  isbn: 1,
  name: 'A Awesome Book'
})

console.log('book:', book)