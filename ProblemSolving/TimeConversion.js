
function timeConversion(s) {
    // Write your code here
    var am_pm = `${s[s.length-2]}` + `${s[s.length-1]}`;
    var hours = (`${s[0]}` + `${s[1]}`) *1;//Se convierte el string a number para poder sumar
    var min = `${s[3]}` + `${s[4]}`;
    var sec = `${s[6]}` + `${s[7]}`;
    
    if(am_pm === 'PM' || am_pm === 'pm'){
        if(hours == 12){
            //hours = 0;
            hours = `${hours}`
        }else if(hours != 12){
            hours += 12;
        }
    } else {
        if(hours == 12){
            hours = 0;//En caso de que el horario sea am
            hours = `0${hours}`
        }else if(hours != 12){
            hours = `0${hours}`
        }
    }

    return `${hours}:${min}:${sec}`;
}

var s = '12:05:45PM';
var s2 = '12:00:00AM';

console.log(timeConversion(s));