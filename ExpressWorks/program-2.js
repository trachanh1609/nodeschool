var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(process.argv[3]||path.join(__dirname,'public')));
app.get('/', function(req,res){
  res.render('index.html');
});

var port = process.argv[2] || 3000;
app.listen( port , function(){
  console.log('App is listening on port ' + port);
});
