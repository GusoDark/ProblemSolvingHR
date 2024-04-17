//BigSorting
function bigSorting(unsorted){
  
    var sorted = []
    for (elemento in unsorted){
      sorted[elemento] = unsorted[elemento]
    }

    for(var i = 0; i<sorted.length-1; i++){
      for(var j=0; j < (sorted.length-1-i); j++){  
        if(sorted[j] > sorted[j+1]){  
          var aux=sorted[j];                 
          sorted[j]=sorted[j+1];           
          sorted[j+1]=aux;
         }    
      }
    }

    for (var elemento in unsorted){
      console.log(unsorted[elemento])
    }

    for (var elemento in sorted){
      console.log(sorted[elemento])
    }

    return sorted
}

var unsorted = [6,8,3,5,4,9,0,2,1,7]

console.log(bigSorting(unsorted))











function bigSorting(unsorted) {
  var sorted = [];

  for (var elemento in unsorted){
    sorted[elemento] = unsorted[elemento];
  }

  for (var i = 0; i < sorted.length - 1; i++) {
    for (var j = 0; j < (sorted.length - 1 - i); j++) {
      if (sorted[j].length > sorted[j + 1].length || 
          (sorted[j].length === sorted[j + 1].length && sorted[j] > sorted[j + 1])) {
        var aux = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = aux;
      }
    }
  }

  return sorted;
}

var unsorted = ["31415926535897932384626433832795", "1", "3", "10", "3", "5"];
var resultado = bigSorting(unsorted);
console.log(resultado);



