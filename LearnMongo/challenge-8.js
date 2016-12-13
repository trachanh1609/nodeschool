var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo';
var ageLimit = parseInt(process.argv[2]);

mongo.connect(url,function(err, db){
  var parrots = db.collection('parrots');

  parrots.count({age:{$gt:ageLimit}}, function(err, count){
    if (err) throw err
    console.log(count);
  })
  db.close();
});
