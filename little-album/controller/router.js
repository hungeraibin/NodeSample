var file = require('../models/file.js')

exports.showIndex =   function(req, res, next) {
  file.getAllAlbums(function(err, allAlbums) {
    if (err) {
      next()
      return
    }
    res.render('index', {
      'albums': allAlbums
    })
  })
} 

exports.showAlbum = function(req, res, next) {
  var albumName = req.params.albumName 
  file.getAllImagesByAlbumName(albumName, function(err, imagesArray) {
    if (err) {
      next()
      return
    }
    res.render('album', {
      'albumname': albumName,
      'images': imagesArray
    })
  })
}