var http = require('http')
var url = require('url')
var portNumber = process.argv[2]

var parseTime = '/api/parsetime'
var unixTime = '/api/unixtime'

var server = http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type': 'application/json' })
  var queryString = url.parse(req.url, true)
  var queryTime = queryString.query.iso
  var pathname = queryString.pathname

  var time = new Date(queryTime)

  var parseTimeJson = JSON.stringify({hour:time.getHours(), minute:time.getMinutes(), second:time.getSeconds()})
  var unixTimeJson = JSON.stringify({unixtime: time.getTime()})

  if (pathname == parseTime) {
    res.end(parseTimeJson)
    //console.log(parseTimeJson)
  }

  if (pathname == unixTime) {
    res.end(unixTimeJson)
    //console.log(unixTimeJson)
  }

})
server.listen(portNumber)
// passed


// official answers
// var http = require('http')
// var url = require('url')
//
// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()  
//   }
// }
//
// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }
//
// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result
//
//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)
//
//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
//
