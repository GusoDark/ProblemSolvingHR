//Piramide 1
function piramide1(altura){
  var x = "x "
  var espacio = " "
  var piramide = "Piramide 1 \n"

  for(var i = 0; i < altura; i++){
    //console.log(i)
    //console.log(x)
    piramide = piramide + x + "\n"
    for(var j = 0; j < 1; j++){
      x = x + "x "
    }
  }

  return piramide

}

console.log(piramide1(6))

//Piramide 2
function piramide2(altura){
  var x = ""
  var espacio = ""
  var piramide = "Piramide 2 \n"
  var tamanoP = altura-1

  for(var i = 0; i < altura; i++){
    //console.log(i)
    //console.log(x)
    //piramide = piramide + espacio + x + "\n"
    for(var j = 0; j < 1; j++){
      x = x + "x "
    }

    for(var e = 0; e < tamanoP; e++){
      espacio = espacio + "  "
    }
    tamanoP--
    piramide = piramide + espacio + x + "\n"
    espacio = ""
  }
  return piramide
}

console.log(piramide2(6))


//Piramide 3
function piramide3(altura){
  var espacio = ""
  var piramide = "Piramide 3 \n"
  var tamanoP = altura

  for(var i = 0; i < altura; i++){
    //console.log(i)
    //console.log(x)
    for(var e = 0; e < tamanoP; e++){
      espacio = espacio + "x "
    }
    tamanoP--
    piramide = piramide + espacio + "\n"
    espacio = ""
  }
  return piramide
}

console.log(piramide3(6))

//Piramide 4
function piramide4(altura){
  var espacio = ""
  var x = ""
  var piramide = "Piramide 4 \n"
  var tamanoP = altura

  for(var i = 0; i < altura; i++){
    //console.log(i)
    //console.log(x)

    for(var j = 0; j < tamanoP; j++){
      x = x + "x "
    }

    for(var e = 0; e < i; e++){
      espacio = espacio + "  "
    }
    tamanoP--
    piramide = piramide + espacio + x +"\n"
    espacio = ""
    x = ""
  }
  return piramide
}

console.log(piramide4(6))


//Piramide 5
function piramide5(altura){
  var x = ""
  var espacio = ""
  var piramide = "Piramide 5 \n"
  var tamanoP = altura-1

  for(var i = 0; i < altura; i++){
    //console.log(i)
    //console.log(x)
    //piramide = piramide + espacio + x + "\n"
    for(var j = 0; j < 1; j++){
      x = x + "x "
    }

    for(var e = 0; e < tamanoP; e++){
      espacio = espacio + " "
    }
    tamanoP--
    piramide = piramide + espacio + x + "\n"
    espacio = ""
  }
  return piramide
}

console.log(piramide5(6))


//Piramide 6
function piramide6(altura){
  var espacio = ""
  var x = ""
  var piramide = "Piramide 6 \n"
  var tamanoP = altura

  for(var i = 0; i < altura; i++){
    //console.log(i)
    //console.log(x)

    for(var j = 0; j < tamanoP; j++){
      x = x + "x "
    }

    for(var e = 0; e < i; e++){
      espacio = espacio + " "
    }
    tamanoP--
    piramide = piramide + espacio + x +"\n"
    espacio = ""
    x = ""
  }
  return piramide
}

console.log(piramide6(10))