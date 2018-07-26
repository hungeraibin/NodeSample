var http = require('http')

var server = http.createServer(function(req, res) {
  var userurl = req.url
  res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF8' })
  if (userurl.substr(0, 9) == '/student/') {
    var studentid = userurl.substr(9)
    if (/\d{10}/.test(studentid)) {
      res.end('您要查询学生信息，id为' + studentid)
    } else {
      res.end('学生学号位数不对')
    }
  } else if (userurl.substr(0, 9) == '/teacher/') {
    var teacherid = userurl.substr(9)
    if (/\d{10}/.test(studentid)) {
      res.end('您要查询老师信息，id为' + teacherid)
    } else {
      res.end('老师工号位数不对')
    }
  } else {
    res.end('请检查URL')
  }
})

server.listen(3000, '127.0.0.1')