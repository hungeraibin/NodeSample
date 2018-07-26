var http = require('http')
var url = require('url')
// var queryString = require('queryString')

http.createServer(function(req, res) {
  // var pathname = url.parse(req.url).pathname
  // console.log('pathname', pathname)

  // 第二个参数是否为true 
  var queryObj = url.parse(req.url, true).query
  var name = queryObj.name
  var age = queryObj.age
  console.log(name, age)
  res.end(name + age)
}).listen(3000)   