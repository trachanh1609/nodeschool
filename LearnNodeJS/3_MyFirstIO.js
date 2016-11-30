var file_name = process.argv[2]
var fs = require('fs')

var buf = fs.readFileSync(file_name);
var data = buf.toString();
var lines = data.split('\n');
var count = lines.length - 1;
console.log(count)
