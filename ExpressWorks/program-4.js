var express = require('express');
var app = express();
var path = require('path');
var bodyparser = require('body-parser');



app.use(bodyparser.urlencoded({extended: false}))


app.post('/form', function(req, res){
  console.log(req.body);
  var result = req.body.str.split('').reverse().join('');
  res.end(result);
});


var port = process.argv[2] || 3000 ;
app.listen(port, function(){
  console.log('Server is listening on port ' + port );
});
