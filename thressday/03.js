// 动态显示歌词

const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');

fs.readFile(path.join(__dirname, '../lyrics/血染的风采.lrc'), (err, data) => {
  var lines = iconv.decode(data, 'gbk').split('\n');
  var regex = /\[(\d{2})\:(\d{2})\.(\d{2})\]\s(.+)/;
  var begin = new Date().getTime();
  lines.forEach((line) => {
    var matches = regex.exec(line);
    if (matches) {
      var m = parseFloat(matches[1]);
      var s = parseFloat(matches[2]);
      var f = parseFloat(matches[3]);
      var lyric = matches[4];
      // 由于下达输出任务的时刻不同
      var offset = new Date().getTime() - begin;
      setTimeout(() => {
        console.log(lyric);
      }, m*600*1000+s*1000+f-offset);

    } else {
      // 不是一行歌词
      console.log(line)
    }
  })
});