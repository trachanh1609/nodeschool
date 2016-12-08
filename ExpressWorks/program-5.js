var express = require('express');
var app = express();
var path = require('path');

app.use(require('stylus').middleware(process.argv[3]||path.join(__dirname,'public')));
app.use(express.static(process.argv[3]||path.join(__dirname,'public')));
app.get('/',function(req, res){
  render('index');
});

var port = process.argv[2] || 3000 ;
app.listen(port, function(){
  console.log('Server is listening on port ' + port );
});


// Official solution
// var express = require('express')
// var app = express()
//
// app.use(require('stylus').middleware(process.argv[3]));
// app.use(express.static(process.argv[3]));
//
//
// app.listen(process.argv[2])
