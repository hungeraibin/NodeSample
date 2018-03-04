var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/part10')

var UserSchema = new mongoose.Schema({
  nickname: {
    type: String,
    default: 'new user' // 固定值
  },
  regTime: {
    type: Date,
    default: Date.now // 即时生成
  }
})

var User = mongoose.model('User', UserSchema)

var user = new User()

console.log('user', user)