var mongoose = require('mongoose')

var PersonSchma = new mongoose.Schema({
  firstName: String,
  lastName: String
})
// 虚拟属性 不会存入数据库
PersonSchma.virtual('fullName').get(function() {
  return this.firstName + ' ' + this.lastName
})

// 设置 转化成JSON时添加虚拟属性
PersonSchma.set('toJSON', {getters: true, virtual: true})

var Person = mongoose.model('Person', PersonSchma)

var person = new Person({
  firstName: 'Wang',
  lastName: 'Aibin'
})

console.log('fullName:', person.fullName)

// 转化为JSON不放入虚拟属性
console.log('JSON:', JSON.stringify(person))

