var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

app.get('/books', function(req, res){
  var filePath = process.argv[3];
  fs.readFile(filePath, function(err, buf){
    if (e) {
      return res.sendStatus(500)
    }
    else {
      var resString = buf.toString();
      var result = JSON.parse(resString);
      res.send(result);
    }
  });
});


var port = process.argv[2] || 3000 ;
app.listen(port, function(){
  console.log('Server is listening on port ' + port );
});


// Official Solution
// var express = require('express')
// var app = express()
// var fs = require('fs')
//
// app.get('/books', function(req, res){
//   var filename = process.argv[3]
//   fs.readFile(filename, function(e, data) {
//     if (e) return res.sendStatus(500)
//     try {
//       books = JSON.parse(data)
//     } catch (e) {
//       res.sendStatus(500)
//     }
//     res.json(books)
//   })
// })
//
// app.listen(process.argv[2])
