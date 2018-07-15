// 动态显示歌词

const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');
const readline = require('readline');

var filename = path.join(__dirname, './../lyrics/血染的风采.lrc')
var streamReader = fs.createReadStream(filename);
var data = ''

streamReader.on('data', (chunk) => {
  // chunk只是一个文档的一个片段、不完整
  data += chunk.toString();
});
streamReader.on('end', () =>{
  // 通知已经结束了此时data是完整的
  console.log(data);
});

var regex = /\[(\d{2})\:(\d{2})\.(\d{2})\]\s(.+)/;
function task(line, begin) {
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
}