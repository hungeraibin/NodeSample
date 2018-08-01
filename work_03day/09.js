var express = require('express')
var app = express() 

app.set('view engine', 'ejs')

// app.set('views', 'myDir')

app.get('/', function(req, res) {
  res.render('haha', {
    'news': [1, 2]
  })
})

app.listen(3000)