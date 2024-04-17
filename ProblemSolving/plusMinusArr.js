//MIN PLUS ARR
var arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
  // Write your code here
  var n = arr.length
  
  var p = 0
  var neg = 0
  var zs = 0
  
  for (var i in arr){
      if(arr[i] > 0){
        p++
      }
      if(arr[i] < 0){
        neg++
      }
      if(arr[i] == 0){
        zs++
      }
      //console.log(arr[i])
      //Number(numero.toFixed(2));
  }
      p = p/n
      p = Number.parseFloat(p).toFixed(6);
      neg = neg/n
      neg = Number.parseFloat(neg).toFixed(6);
      zs = zs/n
      zs = Number.parseFloat(zs).toFixed(6);
      console.log(p)
      console.log(neg)
      console.log(zs)
      
}

plusMinus(arr)
