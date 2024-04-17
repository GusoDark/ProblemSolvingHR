function timeInWords(h,m){
     // Write your code here
     var wordH =[ 'one','two','three','four','five','six','seven','eigth','nine','ten','eleven','twelve']
    
     var wordM = [
   "o' clock", 'one minute', 'two minutes', 'three minutes', 'four minutes', 'five minutes', 'six minutes', 'seven minutes', 'eight minutes', 'nine minutes', 'ten minutes',
   'eleven minutes', 'twelve minutes', 'thirteen minutes', 'fourteen minutes', 'quarter', 'sixteen minutes', 'seventeen minutes', 
   'eighteen minutes', 'nineteen minutes', 'twenty minutes',
   'twenty one minutes', 'twenty two minutes', 'twenty three minutes', 'twenty four minutes', 'twenty five minutes', 'twenty six minutes', 'twenty seven minutes', 
   'twenty eight minutes', 'twenty nine minutes', 
   'half', 'twenty nine minutes', 'twenty eight minutes', 'twenty seven minutes', 'twenty six minutes', 'twenty five minutes', 'twenty four minutes', 'twenty three minutes', 'twenty two minutes', 'twenty one minutes', 'twenty minutes',
   'nineteen minutes', 'eighteen minutes', 'seventeen minutes', 'sixteen minutes', 'quarter', 'fourteen minutes', 'thirteen minutes', 'twelve minutes', 'eleven minutes', 'ten minutes',
   'nine minutes', 'eight minutes', 'seven minutes', 'six minutes', 'five minutes', 'four minutes', 'three minutes', 'two minutes', 'one minute'
 ];
 
     var oracionHora = ``
     var oracionMinuto = ``
     
     oracionHora = `${wordH[h-1]}`
     oracionMinuto = `${wordM[m]}`
     var oracionFinal;
         
     
     if(m == 0){
         oracionFinal = `${oracionHora} ${oracionMinuto}`  
     }
     
     if(m > 0 && m <= 30){
         oracionFinal = `${wordM[m]} past ${wordH[h-1]}` 
     }
     
     if(m > 30){
         oracionFinal = `${wordM[m]} to ${wordH[h]}` 
          
         if(h == 12){
             oracionFinal = `${wordM[m]} minutes to ${wordH[0]}` 
         }
         
     }
     console.log(oracionFinal)      
     return oracionFinal
}

console.log(timeInWords(1,1))
console.log(timeInWords(5,45))
console.log(timeInWords(5,0))
console.log(timeInWords(7,15))
console.log(timeInWords(7,14))
console.log(timeInWords(7,29))