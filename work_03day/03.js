var express = require('express')

var app = express() 

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render('haha', {
    'news': ['新闻1', 'gaga', 'lala']
  })
})
  
app.listen(3000)