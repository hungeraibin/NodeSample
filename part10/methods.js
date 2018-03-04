var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/part10')

var BookSchema = new mongoose.Schema({
  name: String,
  isbn: Number
})

// 声明静态方法
BookSchema.statics.findByISBN = function(isbn, cb) {
  this.findOne({isbn: isbn}, function(err, doc) {
    cb(err, doc)
  })
}

// 声明实例方法
BookSchema.methods.print = function() {
  console.log('Book Information:')
  console.log('\tTitle:', this.name)
  console.log('\tISBN:', this.isbn)
}

var Book = mongoose.model('Book', BookSchema)

var book = new Book({
  name: 'MEAN Web Development',
  isbn: 9787100
})

book.save(function(err) {
  if (err) {
    return console.log('save book failed', err)
  }

  // 从模型中调用静态方法 查询异步 花时间
  Book.findByISBN(9787100, function(err, doc) {
    console.log('findByISBN, err, doc', err, doc)
  })

  // 从实例中调用实例方法
  book.print()
})