function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    var firstK = x1;
    var secondK = x2;
    var result = "";
    for(var i = 0; i<10000; i++){
        if(firstK === secondK){
            result = 'YES';
            break;
        }else{
            result = 'NO';
        }
        firstK+=v1;
        secondK+=v2;
    }
    return result;
}

var x1 = 0;//Initial position
var v1 = 3;//Length of each jump
var x2 = 4;
var v2 = 2;

console.log(kangaroo(x1, v1, x2, v2));


//This challenge can be simplified with maths...