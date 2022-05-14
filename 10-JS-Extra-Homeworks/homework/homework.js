// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  // con entries
  //var arreglo = Object.entries(objeto);
  //return arreglo;
  var arreglo = [];
  arreglo = Object.keys(objeto).map(function (key) {
    return [key, objeto[key]];
  })
    return arreglo;

  // con for in:
  //var arreglo = [];
  //for (var clave in objeto) {
  //  array.push([clave, objeto[clave]])
  //}
  //return arreglo;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  // con hasOwnProperty:
  //var objeto = {}
  //for (var i = 0; i < string.length; I++){
  //  if (objeto.hasOwnProperty(string[i])) {
  //    objeto[string[i]] = objeto[string[i]] +1;
  //  } else {
  //    objeto[string[i]] = 1;
  //  }
  //}
  //return objeto;

  // cuenta la cantidad de una letra en una cadena
  function contarLetras (cadena, letra) {
    var contador = 0;
    for (var i = 0; i < cadena.length; i++) {
      if (letra === cadena[i]){
        contador++
      }
    }
    return contador;
  }

  // crea el objeto y se le asigna los valores
  var claveValor = { };
  for (var i = 0; i < string.length; i++) {
    claveValor[string[i]] = contarLetras(string, string[i]);
  }
  return claveValor;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  // otra forma de sumar:
  //cadena += s.charAt(i);

  var cadena1 = '';
  var cadena2 = '';
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i).toUpperCase() === s.charAt(i)) {
      cadena1 = cadena1 + s.charAt(i);
    } else {
      cadena2 = cadena2 + s.charAt(i);
    }
  }
  return cadena1 + cadena2;

  // o sino return cadena1.concat(cadena2)
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  /* con reverse:
  var invertida = str.split(' ').map(function (elemento) {
    return elemento.split('').reverse().join('');
  })
  return invertida.join(' ')
  */
  function vueltaPalabra (cadena) {
    var palabra = cadena[cadena.length - 1];
    for (let i = 1 ; i < cadena.length; i++) {
      palabra = palabra + cadena[cadena.length - i - 1];
    }
    return palabra;
  }
  var frase = str.split(' ');
  var nuevaFrase = frase.map(vueltaPalabra);
  var nuevaFraseJunta = nuevaFrase.join(' ');
  return nuevaFraseJunta;

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  // Opcion mas "pro":

  //if((numero.toString().split('').reverse().join('')) === numero.toString()){
  //  return 'Es capicua';
  //} else {
  //  return 'No es capicua';
  //}

  // Opcion casera:

  var resto = 0;
  var invertido = 0;
  var numero2 = numero;
  while (numero2 != 0) {
    resto = numero2 % 10;
    numero2 = parseInt (numero2 / 10);
    invertido = invertido * 10 + resto;
  }
  if (invertido === numero) {
    return 'Es capicua';
  } else {
    return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  /*
  Con replace:
  return cadena.replace(/a/g, '').replace(/b/g, '').replace(/c/g, '')
  */
  var cadena2 = '';
  
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c') {
      cadena2 = cadena2 + cadena[i];
    }
  }
  return cadena2;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  return arr.sort(function (a, b) { return a.length - b.length; });

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  /*
  con forEach:
  interseccion = [];
  arreglo1.forEach (num1 => {
    arreglo2.forEach (num2 => {
      if (num1 === num2) interseccion.push(num1)
    })
  })
  return interseccion;

  */
  arreglo1.sort(function (uno, dos) { return uno - dos});
  arreglo2.sort(function (uno, dos) { return uno - dos});
  var interseccion = [];
  var x = 0;
  var y = 0;
  while (x < arreglo1.length && y < arreglo2.length) {
    if (arreglo1[x] < arreglo2[y]) {
      x++;
    } else if (arreglo1[x] > arreglo2[y]) {
      y++;
    } else {
      interseccion.push(arreglo1[x]);
      x++;
      y++;
    }
  }
  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

