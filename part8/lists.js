var client = require('./client')

// 右插入
client.rpush('testLists', 'a')
client.rpush('testLists', 'b')
client.rpush('testLists', 'c')
client.rpush('testLists', '1')

// 左插入
client.lpush('testLists', '2')

// 左推出
client.lpop('testLists', function(err, v) {
  console.log('client.lpop, err, v:', err, v)
})

// 右推出
client.rpop('testLists', function(err, v) {
  console.log('client.rpop, err, v:', err, v)
})

// 读取列表
client.lrange('testLists', 0, -1, function(err, lists) {
  console.log('client.lrange, err, lists:', err, lists)
})
