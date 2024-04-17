
function birthdayCakeCandles(candles) {
    // Write your code here
    var maxCandle = 0;
    var maxCountCandle = 0;

    for (let i = 0; i < candles.length; i++) {
        if(candles[i] > maxCandle){
            maxCandle = candles[i];
        }

    }

    for (let i = 0; i < candles.length; i++) {
        if(maxCandle === candles[i]){
            maxCountCandle++;
        }
        
    }
    return maxCountCandle;

}

candles = [3,2,1,3];
console.log(birthdayCakeCandles(candles));