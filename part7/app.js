var express = require("express");
var bodyParser = require("body-parser"); // 解析post的body数据

var app = express();

// josn类型body
app.use(bodyParser.json());
// query string类型body
app.use(bodyParser.urlencoded({
  extended: false
}));

// 静态文件目录   
app.use(express.static(__dirname + '/public'))

// 路由与业务逻辑
app.use('/user', require('./routes/users.js'))

app.listen(80);

