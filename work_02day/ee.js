var ejs = require('ejs')
var fs = require('fs')
var http = require('http')

var server = http.createServer(function (req, res) {
  fs.readFile('./view/index.ejs', function (err, data) {

    var template = data.toString()
    var dictionary = {
      a: 6,
      news: [1, 2, 3]
    }
    var html = ejs.render(template, dictionary)

    res.writeHeader(200, {
      'Content-Type': 'text/html;charset=UTF8'
    })
    res.end(html)
  })

})

server.listen(3000, '127.0.0.1')