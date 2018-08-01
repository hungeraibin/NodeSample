var express = require('express')

var app = express() 

app.use('jingtai', express.static('./public'))

// app.use(function(err, req, res) {
//   if (err) {
//     res.send()
//   }
// })

app.listen(3000)