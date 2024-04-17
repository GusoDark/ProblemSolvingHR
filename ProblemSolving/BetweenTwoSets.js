function getTotalX(a, b) {
    // Write your code here
    var limite = Math.min(...b);
    var factores = 0;

    for(let f = Math.max(...a); f<=limite;f++){
        if (a.some(el => f % el !== 0)) continue
        if (b.every(el => el % f === 0)) factores++
    }

    return factores;
}

var a = [2,6];
var b = [24,36];

var limit = Math.min(...b);
var f = Math.max(...a);
//console.log(limit);
//console.log(f);

console.log(getTotalX(a,b));

//Encontrar los múltiplos de cada número
//Encontrar los factores de cada numero
var a = [2,6];
var b = [24,36];

var limit = Math.min(...b);
var factores = 0;

for(let i = Math.max(...a); f<=limit;f++){
//    if (a.some(el => f % el !== 0)) continue
//    if (b.every(el => el % f === 0)) factores++
}

console.log(24 % 16);
console.log(36 % 16);


console.log(8 % 2);
console.log(8 % 6);
