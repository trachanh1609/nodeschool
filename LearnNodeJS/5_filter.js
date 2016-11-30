var file_name = process.argv[2]
var extension = process.argv[3]
extension = "." + extension
var fs = require('fs')
var path = require('path')

fs.readdir(file_name, function callback(err, list){
  var filtered = [] ;
  for( i=0 ; i<list.length ; i++){
    if (path.extname(list[i]) == extension)
//      filtered.push(list[i])
        console.log(list[i])
  }

//  console.log(filtered);
})
