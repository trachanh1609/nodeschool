var http = require('http')
var portNumber = process.argv[2]
var path = process.argv[3]
var fs = require('fs')

var readStream = fs.createReadStream(path)
var fileData
readStream.on('data', (chunk) => {
  fileData = chunk
});

var server = http.createServer(function (req, res) {
  //response.writeHead(200, { 'Content-Type': 'text/plain',
    //                        'Trailer': 'Content-MD5' });
  res.write(fileData, 'utf-8');
  //response.addTrailers({'Content-MD5': "7895bf4b8828b55ceaf47747b4bca667"});
  res.end();

})
server.listen(portNumber)
// Passed




// official answer
// var http = require('http')
// var fs = require('fs')
//
// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })
//
//   fs.createReadStream(process.argv[3]).pipe(res)
// })
//
// server.listen(Number(process.argv[2]))
