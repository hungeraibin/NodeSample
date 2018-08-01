var ejs = require('ejs')

var string = '啦啦啦<%=a%>'

var data = {
  a: 6,
}

var html = ejs.render(string, data)

console.log(html)