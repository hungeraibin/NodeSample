var mongoose = require('mongoose')

require('./model')

var Book = mongoose.model('Book')

Book.findOne({author: "Jim"}, function(err, doc) {
  if (err) {
    console.log('findOne err:', err)
    return
  }

  if (doc) {
    doc.remove()
  }
})