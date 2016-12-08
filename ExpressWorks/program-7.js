var express = require('express');
var app = express();
var path = require('path');

app.get('/search', function(req, res){
  console.log('query.results = ' + req.query.results);

  var result = JSON.stringify(req.query);
  console.log(result);
  res.send(result);
});

var port = process.argv[2] || 3000 ;
app.listen(port, function(){
  console.log('Server is listening on port ' + port );
});


// Official solution
//
// var express = require('express')
// var app = express()
//
// app.get('/search', function(req, res){
//   var query = req.query
//   res.send(query)
// })
//
// app.listen(process.argv[2])
