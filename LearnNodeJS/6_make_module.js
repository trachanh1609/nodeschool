var myModule = require('./6_module.js')
var fs = require('fs')
var path = require('path')

var folder_name = process.argv[2]
var extension = process.argv[3]

myModule(folder_name,extension,callback)



function callback(err, data){
  if (err) {
    console.log(err)
  }
  else {
    for(i=0 ; i<data.length ; i++){
      console.log(data[i]);
    }

  }

}
