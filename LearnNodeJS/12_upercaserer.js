var http = require('http')
var portNumber = process.argv[2]

var map = require('through2-map')


var server = http.createServer(function(req, res){
  var reqMethod = req.method
  if (reqMethod == 'POST')
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)

})
server.listen(portNumber)
// Passed


// official answers
// var http = require('http')
// var map = require('through2-map')
//  
// var server = http.createServer(function (req, res) {
//  if (req.method != 'POST')
//    return res.end('send me a POST\n')
//
//  req.pipe(map(function (chunk) {
//    return chunk.toString().toUpperCase()
//  })).pipe(res)
// })
//
// server.listen(Number(process.argv[2]))
