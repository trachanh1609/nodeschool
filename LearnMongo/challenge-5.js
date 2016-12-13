var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo';

var first = process.argv[2];
var last = process.argv[3];

var newEntry = {
  firstName : first,
  lastName : last
};

mongo.connect(url,function(err, db){
  if(err) throw err
  var docs = db.collection('docs');

  docs.insertOne(newEntry, function(err, data){
    if(err) throw err
    data = JSON.stringify(data) ;
    console.log(data);
  });

  // docs.find().toArray((function(err, data){
  //   console.log(data);
  // }));

  db.close();
});
