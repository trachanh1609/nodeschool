var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/';

var databaseName = process.argv[2];
url += databaseName ;

console.log('url = ' + url );


mongo.connect(url,function(err, db){
  if(err) throw err
  var docs = db.collection('users');

  docs.update({'username': 'tinatime'},{ $set: {'age': 40}}, function(err, data){
    if(err) throw err
    data = JSON.stringify(data) ;
    console.log(data);
  });

  db.close();
});

// console.log not showing
