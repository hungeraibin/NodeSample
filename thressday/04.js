// 动态显示歌词 流的方式读取

const fs = require('fs');
const path = require('path');

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
