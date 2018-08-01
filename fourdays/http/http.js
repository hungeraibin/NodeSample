const http = require('http')

// 利用node做一个客户端，请求m.baidu.com 
http.get('http://m.baidu.com', (response) => {
  var rawContent = ''
  response.on('data', chunk => {
    rawContent += chunk.toString()
  })
  response.on('end', () => {
    console.log(response.headers['content-length'])
    console.log(rawContent.length)
  })
})  