var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo';
var targetSize = process.argv[2];

mongo.connect(url,function(err, db){
  var prices = db.collection('prices');

  prices.aggregate([{$match: {'size': targetSize}},{$group: { _id:'anything', average:{$avg: '$price'} }}]).toArray(function(err, results){
    if(err) throw err
    var averagePrice = results[0].average ;
    console.log(Number(averagePrice).toFixed(2));

  });


  db.close();
});
