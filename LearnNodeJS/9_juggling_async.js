var http = require('http')
var bl = require('bl')
var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]

var print_1_done = false
var print_2_done = false
//var print_3_done = false
var data_1 = ''
var data_2 = ''
var data_3 = ''

http.get(url1, function(response){
  response.pipe(bl(function(err, data){
    data_1 = data.toString();
    print_out();
  }));
});

http.get(url2, function(response){
  response.pipe(bl(function(err, data){
    data_2 = data.toString();
    print_out();
  }));
});

http.get(url3, function(response){
  response.pipe(bl(function(err, data){
    data_3 = data.toString();
    print_out();
  }));
});


function print_out(){
  if ( print_1_done == false && data_1.length != 0 ) {
    console.log(data_1)
    print_1_done = true
  }
  if ( print_1_done == true && data_2.length != 0 ) {
    console.log(data_2)
    print_2_done = true
  }
  if ( print_2_done == true && data_3.length != 0 ) {
    console.log(data_3)
  }

}
