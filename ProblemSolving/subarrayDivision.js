function birthday(s, d, m) {
  // Write your code here
  var cantidadPares = 0
  var resultadoSuma = 0
  
  for(var i = 0; i<=s.length-m; i++){
    resultadoSuma=0
      for(var j = i; j<i+m; j++){
          resultadoSuma += s[j]
          console.log(`s${i} = ${s[j]} = ${resultadoSuma}`)
      }
      console.log(`resultadoSuma = ${resultadoSuma}`)
      
      if(resultadoSuma == d){
        cantidadPares++;
      }
  }
  return cantidadPares;
}

var s = [1,2,1,3,2]
var d = 3
var m = 2

var s1 = [4]
var d1 = 4
var m1 = 1

//console.log(birthday(s,d,m))

console.log(birthday(s1,d1,m1))