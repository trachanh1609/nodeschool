var net = require('net')
var portNumber = process.argv[2]
var server = net.createServer(function(socket){
  var data = ''
  var date = new Date()
  data += date.getFullYear()
  data += '-0'
  data += date.getMonth() + 1
  data += '-'
  data += date.getDate()
  data += ' '
  data += date.getHours()
  data += ':'
  data += date.getMinutes()
  data += '\n'

  socket.end(data)
})
server.listen(portNumber)


// var net = require('net')
//
//      function zeroFill(i) {
//        return (i < 10 ? '0' : '') + i
//      }
//
//      function now () {
//        var d = new Date()
//        return d.getFullYear() + '-'
//          + zeroFill(d.getMonth() + 1) + '-'
//          + zeroFill(d.getDate()) + ' '
//          + zeroFill(d.getHours()) + ':'
//          + zeroFill(d.getMinutes())
//      }
//
//      var server = net.createServer(function (socket) {
//        socket.end(now() + '\n')
//      })
//
//      server.listen(Number(process.argv[2]))
