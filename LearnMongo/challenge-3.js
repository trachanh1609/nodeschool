var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo';
var ageLimit = parseInt(process.argv[2]);

mongo.connect(url,function(err, db){
  var parrots = db.collection('parrots');

  parrots.find({age:{$gt:ageLimit}}).toArray(function(err, docs){
    console.log(docs);
  })
  db.close();
});


// Official Solution
//
// var mongo = require('mongodb').MongoClient
// var age = process.argv[2]
//
// var url = 'mongodb://localhost:27017/learnyoumongo'
//
// mongo.connect(url, function(err, db) {
//   if (err) throw err
//   var parrots = db.collection('parrots')
//   parrots.find({
//     age: {
//       $gt: +age
//     }
//   }).toArray(function(err, docs) {
//     if (err) throw err
//     console.log(docs)
//     db.close()
//   })
// })
