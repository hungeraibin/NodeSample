var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/part10')

var User = mongoose.model('User', {
  username: String
})

var News = mongoose.model('News', {
  title: String,
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User' // 两个集合关联起来
  }
})

var user = new User({
  username: 'aibin'
})

var news = new News({
  title: 'Congratulation!',
  author: user
})

user.save(function(err) {
  if (err) {
    return console.log('save user failed:', err)
  }

  news.save(function(err) {
    if (err) {
      return console.log('save user failed:', err)
    }
 
    // 填充字段
    News.findOne().populate('author').exec(function(err, doc) {
      console.log('after populate: ', err, doc)
    })
  })
})