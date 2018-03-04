var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/part10')

var ResellerSchema = new mongoose.Schema({
  address: String
})

// 后置处理中间件 - 保存之后
ResellerSchema.post('save', function(next) {
  console.log('this is ResellerSchema post save middleware')
  next()
})

// 预处理中间件 - 保存之前 并行操作 传给done
ResellerSchema.pre('save', true, function(next, done) {
  console.log('this is ResellerSchema pre save middleware')
  done()
  next()
})

var Reseller = mongoose.model('Reseller', ResellerSchema)

var reseller = new Reseller({
  address: '101st, People Read'
})

reseller.save()