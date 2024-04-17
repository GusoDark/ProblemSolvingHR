//intento n FUNCIONA BIEN

function migratoryBirds(arr){
  var hash = new Map;

  var  id = 0;
  var menorClave = 0;
  var mayorValor = 0
  
  for (var element in arr){
      //console.log(arr[element])
      if(hash.has(arr[element])){
          var cantidad = hash.get(arr[element])
          hash.set(arr[element], ++cantidad)
      }else{
          hash.set(arr[element], 1)
      }
  }

  
  //Validacion de menor tipo de ave que se repita más veces
  
  for (var [key, value] of hash){
      if(value > mayorValor || (value === mayorValor && key < menorClave)){
        menorClave = key;
        mayorValor = value;
      }
  }

  return menorClave


  //Impresion de tabla, verificar que se llena
  for (var [key, value] of hash) {
    console.log(key + " = " + value);
  }
  
}


var arr = [1,3,1,4,5]
var arr2 = [1,4,4,5,3]

console.log(migratoryBirds(arr2))