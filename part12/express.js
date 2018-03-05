var express = require('express')
var morgan = require('morgan')

// express实例
var app = express()

// use方法传入中间件
app.use(express.static('./public'))
app.use(morgan()) // 使用打印中间件 

// 1. 路由 path方法
app.get('/', function(req, res, next) {
  res.end('hello\n')
  next()
})

// 2. 路由 Router方法
// http://exmaple.com/post/add
// http://exmaple.com/post/list 
var Router = express.Router()
Router.get('/add', function(req, res) {
  res.end('Router /add\n')
})
Router.get('/list', function(req, res) {
  res.end('Router /list\n')
})
// 路由加入到配置里 指定基础路径
app.use('/post', Router)

// 3. 路由 route方法
// 针对一个路由 编写他不同方法下面的不同处理
app.route('/article')
  .get(function(req, res) {
    res.end('route /article get\n')
  })
  .post(function(req, res) {
    res.end('route /article post\n')
  })

// 路由参数 名字+处理函数
app.param('newsId', function(req, res, next, newsId) {
  // 实际项目中在此 从缓存中或者从数据库中读取数据的操作
  req.newsId = newsId
  next()
})

app.get('/news/:newsId', function(req, res) {
  res.end('newsId: ' + req.newsId + '\n')
})

// 设定监听端口
app.listen(18001, function afterListen() {
  console.log('express running on http://localhost:18001')
})