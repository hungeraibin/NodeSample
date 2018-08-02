var fs = require('fs')

exports.getAllAlbums = function(callback) {
  fs.readdir('./uploads', function(err, files) {
    if (err) {
      callback('没有找到uploads文件夹', null)
      return
    }
    var allAlbums = []
    !function interator(i) {
      if (i == files.length) {
        callback(null, allAlbums)
        return 
      }
      fs.stat('./uploads/' + files[i], function(err, stats) {
        if (err) {
          callback('没有找到文件夹' + files[i], null)
          return
        }
        if (stats.isDirectory()) {
          allAlbums.push(files[i])
        }
        interator(i+1)
      })
    }(0)
  })
}

exports.getAllImagesByAlbumName = function(albumName, callback) {
  fs.readdir('./uploads/' + albumName, function(err, files) {
    if (err) {
      callback('没有找到uploads文件夹', null)
      return
    }
    var allImages = []
    !function interator(i) {
      if (i == files.length) {
        callback(null, allImages)
        return 
      }
      fs.stat('./uploads/' + albumName + '/' + files[i], function(err, stats) {
        if (err) {
          callback('没有找到文件夹' + files[i], null)
          return
        }
        if (stats.isFile()) {
          allImages.push(files[i])
        }
        interator(i+1)
      })
    }(0)
  })
}
