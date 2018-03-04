var client = require('./client')

// 集合插入
client.sadd('testSet', 1)
client.sadd('testSet', 'a')
client.sadd('testSet', 'bb')

// 读取集合
client.smembers('testSet', function(err, v) {
  console.log('client.smembers err, v:', err, v)
})