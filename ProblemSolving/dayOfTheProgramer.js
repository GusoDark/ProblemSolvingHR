//DIA DEL PROGRAMADOR - DAY OF THE PROGRAMER
var year = 2016
var year1 = 2017
var year2 = 1800
/*
De 1700 a 1917 el calendario de russia era juliano
De 1919 empezaron con el gregogriano. y la transición se produjo en 1918
En 1918 el día siguiente al 31 de enero era 14 de febrero por lo que 14 de febrero es el dia 32
Si es año juliano los años bisiestos son divisibles entre 4
Si es año gregoriano son divisibles entre 400 y 4

Dado un año enconrtar el día 256 de ese año segun el calendario oficial en curso de ese año
imprimir en dd.mm.yyyy

dado 1984 se divide entre 4 == 0 bisiesto es true el día 256 después de 1918 es el 12-09 
siendo 12-09-1984

dias en Gregoriano 31+28+31+30+31+30+31+31 = 243 Hasta agosto
dias en Gregoriano bisiesto 31+29+31+30+31+30+31+31 = 244 Hasta agosto



*/
function programerDay(year){
  var bisiestoJuliano = (year%4 == 0) ? true : false;
  var bisiestoGregoriano = (year%400 == 0 || (year%4 == 0 && year%100 != 0)) ? true : false;
  
  var m = 9

  if(year >= 1700 && year <= 1917){

    if(bisiestoJuliano){
      console.log(bisiestoJuliano)
      var daySum = 256 - (31+29+31+30+31+30+31+31)
      console.log(daySum)
      return `${daySum}.0${m=9}.${year}`
    } else {
      console.log(bisiestoJuliano)
      var daySum = 256 - (31+28+31+30+31+30+31+31)
      console.log(daySum)
      return `${daySum}.0${m=9}.${year}`
    }

  } else if( year > 1918 && year <= 2700){

    if(bisiestoGregoriano){
      console.log(bisiestoGregoriano)
      var daySum = 256 - (31+29+31+30+31+30+31+31)
      console.log(daySum)
      return `${daySum}.0${m=9}.${year}`
    } else {
      console.log(bisiestoGregoriano)
      var daySum = 256 - (31+28+31+30+31+30+31+31)
      console.log(daySum)
      return `${daySum}.0${m=9}.${year}`
    }

  }else{
    var daySum = 256 - (31+15+31+30+31+30+31+31)
      console.log(daySum)
      return `${daySum}.0${m=9}.${year}`
  }
}

//console.log(programerDay(year))
//console.log(programerDay(year1))
//console.log(programerDay(year2))
console.log(programerDay(1918))

var year = 2016
var bisiestoGregoriano = (year%400 == 0 || (year%4 == 0 && year%100 != 0)) ? true : false;
console.log(bisiestoGregoriano)

