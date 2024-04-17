//Insertion Sort Part2 - Hackerrank

var n = 6;
var arr = [1,4,3,5,6,2]

function insertionSort2(n, arr){
  let valorActual;
  let vecinoIzquierda;
  var line = "";
  for(let i = 1; i<arr.length; i++){
    valorActual = arr[i];
    let j = i-1;
    //console.log("Actual: " + valorActual);
    //console.log("Vecino Left: " + arr[j]);
    while(arr[j] > valorActual && j >= 0){
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = valorActual;
    for(var element of arr){
      line += `${element} `;
    }
    console.log(line);
    line = "";
  }
}
insertionSort2(n, arr)
