function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    var totalAppleDistance = [];
    var totalOrangeDistance = [];
    var applesCount = 0;
    var orangesCount = 0;

    //Determinar la distancia de cada fruta
    for (let i = 0; i < apples.length; i++) {
        totalAppleDistance[i] = a + apples[i];
        if(totalAppleDistance[i] >= s && totalAppleDistance[i] <= t){
            applesCount++;
        }
    }

    for (let i = 0; i < oranges.length; i++) {
        totalOrangeDistance[i] = b + oranges[i];
        if(totalOrangeDistance[i] >= s && totalOrangeDistance[i] <= t){
            orangesCount++;
        }
    }
    
    return `${applesCount}\n${orangesCount}`;
}

var s = 7; //start point
var t = 11 //end point
var a  = 5; //indica la posición del arbol de manzana
var b = 15;//indica la posición del arbol de naranja
var m = 3;// 
var n = 2;
var apples = [-2, 2, 1];
var oranges = [5, -6];

console.log(countApplesAndOranges(s, t, a, b, apples, oranges));


/*
s = startpoint
t = endpoint
a = apple tree
t = orange tree
apples = array with distance of each apple
apples = array with distance of each apple

*/

/**
 * Steps to solve diagram
 * 
 * Conocer los puntos donde se localiza la casa de sam
 * conocer los puntos donde se localiza el arbol de manzanas = a
 *      ''      ''      ''      ''      ''      ''  naranjas = b
 * Conocer cuantas manzanas y naranjas hay
 * Para determinar en donde cae cada manzana se realiza lo sigueinte:
 *      Al valor de la posición a se le suma la distancia de cada manzana
 * Para determinar en donde cae cada naranja se realiza lo sigueinte:
 *      Al valor de la posición b se le suma la distancia de cada naranja
 * 
 * Determinar en los arreglos finales cuántas manzanas están en el rango inclusico de s - t.
 *      
 * 
 */