var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/' + process.argv[2];

var collectionName = process.argv[3];
var id = process.argv[4];

mongo.connect(url,function(err, db){
  if(err) throw err
  var docs = db.collection(collectionName);

  docs.remove({_id: id}, function(err, data){
    if(err) throw err
    data = JSON.stringify(data) ;
    console.log(data);
  });

  db.close();
});

// console.log not showing
