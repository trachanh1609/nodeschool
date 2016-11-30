var fs = require('fs')
var path = require('path')

module.exports = function (folder, extension, callback){
  extension = "." + extension
  fs.readdir(folder, function (err, list){
    if (err) {
      callback(err)
    }
    else {
      var data = []
      for (i=0 ; i<list.length ; i++){
        if (path.extname(list[i]) == extension){
          data.push(list[i]);
        }
      }
      callback(null, data)
    }
  });
}
