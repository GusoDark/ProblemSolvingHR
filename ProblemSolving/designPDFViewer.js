function designerPdfViewer(h, word) {
  // Write your code here
  var words = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w', 'x','y','z']
  var maxH = 0
  var area = 0
  var wide = word.length
  var wordSize = word.length
  console.log(wordSize)

  var letters = []
  
  var w = 0
  while(w<word.length){
    letters[w] = word[w]
    console.log(letters[w])
    w++
  }

  for( var i = 0; i<words.length; i++){
      for(var j=0; j<letters.length;j++){
        if(words[i] == letters[j] && h[i] > maxH){
            maxH = h[i]
            console.log(maxH + 'letra =' + words[i])
        }
      }
  }

  area = wide * maxH

  return area
  
}

var words = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var h =     [ 1,  3,  1,  3,  1,  4,  1,  3,  2,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5]
var word = 'abc'

console.log(designerPdfViewer(h, word))