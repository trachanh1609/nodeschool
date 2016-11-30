var sum = 0
var i = 2
while(process.argv[i]) {
  sum += Number(process.argv[i]) ;
  i ++ ;
}
console.log(sum)
