var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, res) {
  if (req.url == '/favicon.ico') {
    return
  }
  var dir = []
  res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF8' })

  // 异步 
  fs.readdir('./test', function(err, files) {
    for (var i = 0; i < files.length; i++) {
      var thefilename = files[i]
      fs.stat('./test' + thefilename, function(err, stats) {
        if (stats.isDirectory()) {
          dir.push(thefilename)
        }
        console.log(dir)
      })
    }
  })

  // 同步
  fs.readdir('./test', function(err, files) {
    (function iterator(i) {
      // 遍历结束
      if (i == files.length) {
        console.log(dir)
        return
      }
      fs.stat('./test' + files[i], function(err, stats) {
        if (stats.isDirectory()) {
          dir.push(files[i])
        }
        iterator(i + 1)
      })
    })(0)
  })
})

server.listen(3000)