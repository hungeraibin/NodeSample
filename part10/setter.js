var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/part10')

var User = mongoose.model('User', {
  nickname: {
    type: String,
    trim: true // 去除前后空格
  },
  blog: {
    type: String,
    set: function(url) {
      if (!url) {
        return
      }
      if (0 !== url.indexOf('http://') && 0 !== url.indexOf('https://')) {
        url = 'http://' + url
      }
      return url
    }
  }
})

var user = new User({
  nickname: ' Aibin  ',
  blog: 'aibin.com'
})
// 建立实例时添加
console.log('user', user)