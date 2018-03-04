var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/part10')

var User = mongoose.model('User', {
  blog: {
    type: String,
    get: function(url) { // getter修饰符
      if (!url) return

      if (0 !== url.indexOf('http://') && 0 !== url.indexOf('https://')) {
        url = 'http://' + url
      }

      return url
    }
  }
})

var user = new User({
  blog: 'aibin.com'
})

// 保存到数据库时添加
user.save(function(err) {
  if (err) {
    return console.log('save err:', err)
  }
  console.log('blog url: ', user.blog)
})