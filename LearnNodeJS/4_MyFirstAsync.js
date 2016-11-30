var file_name = process.argv[2]
var fs = require('fs')

function show_log(){
  console.log(count)
}

function count_line(callback){
  fs.readFile(file_name, function doneReading(err, buf){
    count = buf.toString().split('\n').length -1 ;
    callback();
  });
}

count_line(show_log);
