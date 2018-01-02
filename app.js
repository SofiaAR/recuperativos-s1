//EJERCICIO FÁCIL N°14 Dado un arreglo de 10 números, retornar un nuevo arreglo solo con los números pares.
//

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var isEven = [];

        /*sta funcion recorrera el arreglo numbers, por cada elemento que contenga y terminara cuando los recorra todos*/
        for (var i = 0; i<=numbers.length; i++){ 
            //para obtener el valor del elemento el que estoy parado actualmente lo busco dentro del arreglo pos su posicion(indice).
            //Entonces cuando estoy en el ciclo for la variable i comenzara en 0 e ira sumando 1 por cada vuelta que realice hasta que ya no queden elementos que recorrer.
            //de esta manera obtenemos el elemento actual desde el arreglo.(numbers[i])
            if (numbers[i] % 2 == 0) { // aqui evaluaremos si el elemente actual es un numero par
                isEven.push(numbers[i]);// aca vamos agregando a otro arreglo solo los numeros pares. Despues podemos recorrerlo igualmente que esta funcion.
            }
        }
    console.log(isEven)

//______________________________________________________________________________________

//EJERCICIO FACIL N°15 Dado un arreglo de 4 números positivos, devolver un nuevo arreglo con cada elemento multiplicado por 12.
//

var positiveNumbers = [4,8,12]; // Números a multiplicar//
    var resultNumbers = []; //contenedor donde irán números multiplicados//

    for (var i = 0;i<positiveNumbers.length; i++){ // recorre el arreglo y posicion a posicion cn length//
        resultNumbers.push(positiveNumbers[i]*12); // los numeros recorridos se multiplican y con push se envían al contenedor//
    }
alert(resultNumbers);

//_______________________________________________________________________________________

//EJERCICIO FACIL N°11 Diseñar un programa que lea las calificaciones de un alumno (10 notas en total). 
//y se aprueba con un promedio igual o mayor a 4 //


function promedio (Notas) {
  var sumar = 0; //contenedor de sumas//
  for (var i = 0; i < Notas.length; i++ ) { // recorre el arreglo uno por uno y suma //
  sumar = sumar + Notas[i];
  }
  var prom = sumar/10; //divide por el numero de notas para sacar el promedio//
  if (prom >= 4) { // si es mayor o igual a 4 aprubea//
    alert("Estudiante aprobado con : " + prom) ; 
  }
  else {
  alert("Estudiante no aprueba"); // si no reprueba//
  }
}

promedio ([4,7,6,5,4,7,6,7,5,3]);
//_______________________________________________________________________________________

//EJERCICIO FACIL N° 12 Realizar un programa que permita analizar si una palabra que el usuario introduce por teclado es palíndroma o no.
//Si es palíndroma debe retornar true, en caso contrario false.//

var palabra = prompt("Ingresa una palabra para verificar si es palindromo");
function esPalindromo( palabra ){
    a = palabra.length;  //si el string esta vacio no es palindromo//
//hace que todas las letras sean 1 o 0 , si todas las letras son 0 es palindromo, si no es falso//
    if(a == 0){
        return false;

    }   
    for(i=0;i<a/2;i++){
        if( palabra [i] != palabra[a-1-i]){
            return false;
        }
    }
    return true;
}

 esPalindrome(palabra);
 //_______________________________________________________________________________________

 //document.write( esPalindromo("anaamaoruro") ); //true//
 //document.write( esPalindromo("colega") );//false//

 //EJERCICIO MEDIO N°8//

 //Dado un arreglo y un número, retornar el índice (posición) del número. 

var array = [3,6,9,13,45,78];
    array.indexOf(3); // da 0 que es la posición del numero 3//


//EJERCICIO MEDIO N10°//
//Un grupos de amigos van a un evento y sus nombres están dentro de un arreglo. 
//Escribir una función donde dado el nombre de la persona puedas retornar el asiento que le toca. La numeración comienza en 1, si la persona no tiene asiento retornar 0.


vvar lista=["kote","luna","manuel","diego","romina"]; 

function seatNumber(arr,name){ //
if(arr.indexOf(name)!==-1){ 
  
  return arr.indexOf(name)+1; 
   
   }else{ 
   }
 }
  
console.log(seatNumber(lista,"diego"));
];





