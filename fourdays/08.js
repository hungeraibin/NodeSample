// node-progress

var ProgressBar = require('progress')

var bar = new ProgressBar('progess:[:bar]', { total: 50, width: 10, complete: '/'})
var timer = setInterval(function() {
  bar.tick()
  if (bar.complete) {
    console.log('\ncomplete\n')
    clearInterval(timer)
  }
}, 100)