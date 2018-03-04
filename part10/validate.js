var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/part10')

var OrderSchma = new mongoose.Schema({
  count: {
    type: Number,
    required: true, // 预定义验证器
    max: 1000,
    min: 10
  },
  status: {
    type: String,
    enum: ['created', 'success', 'failed'] // 枚举验证器
  },
  desc: {
    type: String,
    match: /book/g, // 正则验证
    validate: function(desc) { // 自定义验证器
      return desc.length >= 10
    }
  }
})

var Order = mongoose.model('Order', OrderSchma)

var order = new Order()

order.count = 100
order.status = 'success'
order.desc = 'this is awesome book'

order.save(function(err) {
  if(err) {
    return console.log('save failed', err)
  }

  console.log('save success')
})