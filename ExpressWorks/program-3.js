var express = require('express');
var app = express();
var path = require('path');

app.set('views', process.argv[3]);
app.set('view engine', 'jade');

app.get('/home', function(req,res){
  res.render('index', {date: new Date().toDateString()});
});

var port = process.argv[2] || 3000 ;
app.listen(port, function(){
  console.log('Server is listening on port ' + port );
});
