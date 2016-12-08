var express = require('express');
var app = express();
var path = require('path');

app.put('/message/:id',function(rew, rees){
  var result= require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + rew.params.id)
      .digest('hex');

  rees.end(result);
});


var port = process.argv[2] || 3000 ;
app.listen(port, function(){
  console.log('Server is listening on port ' + port );
});



// Official solution
// var express = require('express')
// var app = express()
//
// app.put('/message/:id', function(req, res){
//   var id = req.params.id
//   var str = require('crypto')
//     .createHash('sha1')
//     .update(new Date().toDateString() + id)
//     .digest('hex')
//   res.send(str)
// })
//
// app.listen(process.argv[2])
