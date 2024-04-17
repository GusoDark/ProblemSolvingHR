//Insertion Sort Part1 - Hackerrank

var arr = [1,2,4,5,3]
var arr2 = [2,4,6,8,3]
var arr3 = [2,3,4,5,6,7,8,9,10,1]
var n = arr.length
var n3 = arr3.length

//console.log(n)

function inserionSort1(n, arr){
  var toInsert = arr[n-1];
  var line = "";
  console.log(toInsert);
  for(var i = n-1; i>=0; i--){
    //console.log(arr[i])
    if(arr[i-1] < toInsert || i === 0){
      arr[i] = toInsert;
      for(var element of arr){
        line += `${element} `;
      }
      console.log(line);
      break;
    } else {
      arr[i] = arr[i-1];
      for(var element of arr){
        line += `${element} `;
      }
      console.log(line);
      line = "";
    }
  }
}
inserionSort1(n3, arr3)