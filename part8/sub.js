var client = require('./client')

// 订阅
client.subscribe('testPublish')

// 监听消息事件
client.on('message', function(channel, msg) {
  console.log('client.on message, channel:', channel, ' message:', msg)
}) 