var express = require('express')
var app = express() 
var router = require('./controller')

app.set('view engine', 'ejs')

// 路由中间件
app.use(express.static('./public'))
app.use(express.static('./uploads'))

app.get('/', router.showIndex)
app.get('/:albumName', router.showAlbum)

app.use(function(req, res) {
  res.render('err')
})
 
app.listen(3000)
