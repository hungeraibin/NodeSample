var http = require('http')
var querystring = require('querystring') 
var formidable = require('formidable')
var util = require('util')

var server = http.createServer(function(req, res) {
  if (req.url == '/dopost' && req.method.toLowerCase() == 'post') {
    // var allData = ''
    // req.addListener('data', function(chunk) {
    //   allData += chunk
    //   console.log(chunk)
    // })
    // req.addListener('end', function() {
    //   var dataString = allData.toString()
    //   var dataObj = querystring.parse(dataString, null, null)
    //   console.log(dataObj)

    //   res.end('success')
    // })
    var form = new formidable.IncomingForm()
    form.uploadDir = './uploads'
    form.parse(req, function(err, fields, files) {
      var ttt = sd.format(new Date() , 'YYYYMMDDHHmm')
      var ran = parseInt(Math.random() * 89999 + 10000)
      var extname = path.extname(files.tupian.name)
      var oldpath = __dirname + '/' + files.tupian.path
      var newpath = __dirname + '/uploads/' + ttt + ran + extname 
      fs.rename(oldpath, newpath, function(err) {
        if (err) console.log('改名出错')
      })
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    })
  }
})  

server.listen(3000, '127.0.0.1')