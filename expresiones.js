console.log("Estoy vivvooooooo");


/*
 Operador

 Un elemento que nos permite realizar una operacion entre dos o mas elementos.


 - Operadores aritmeticos (+, -. *, /)
 - Operadores de asignacion (=, / asignacion)
 - Operadores logicos (&&, ||, !)
 - Operadores de comparacion (<,>, <=, >=, ==. === )


*/

/*Operadores aritmeticos 


Son operadores que nos permiten tomar valores numericos como sus operandos y retornar un valor numerico unico. Corresponden a operaciones matematicas.



Suma (+)
Resta (-)
Multiplicación (*)
División (/)
Residuo / Modulo  (%)
Exponenciación (**)
Incremento (++)
Decremento (--)


*/


//variables
let numero1 = 10;
let numero2 = 2;
let numero3 = "5";

//operaciones
suma = numero1 + numero2; //12
resta = numero1 - numero2; //8
multiplicacion = numero1 * numero2;
division = numero1 / numero2;
residuo = numero1 % numero2;
exponenciacion = 10 ** 2 ; //es obsoleto porque hay un metodo para esto 


//Impresion de valor antes del incremento 
console.log ("valor del numero 1 antes del incremento :", numero1)
//Cuando usamos incrementos el valor se reasigna (suma y reasigna en la misma operacion)
incremento = numero1 ++; //11
decremento = numero2 --; //1

//Forma extensa de un incremento
numero1 = numero1 + 1;

console.log ("valor del numero 1 despues del incremento :", numero1)

//Incremento de 10 en 10 
numero1 += 10; //20  suma y reasigna al mismo tiempo
numero1 = 10 + 10;



//Ejemplo 
//operacionCompleja = 10 + 5 / 2 (5-6);


//impresiones en pantalla
console.log ("suma de 10 + 2", suma); //1ra forma de mostrar la suma
console.log ("suma de 10 + 2", numero1 + numero2); //2da  forma
console.log ("suma de 10 + 2", 10 + 2); //3ra forma
console.log ("Resta de 10 - 2", resta); //


/**
 *Operadores que nos permiten comparar dos datos, y al hacerlo obtenemos un valor booleano (true or false)

 -mayor que  (>)
 -menor que  (<)
 -mayor o igual que (>=)
 -menor o igual que (<=)
 -igual (==)
 -estrictamente igual (===)
 -no es igual (!=)
 -no es estrictamente igual (!==)


 igual (==)

 Sirve para comparar que dos valores  sean iguales


 */

 let numeroComparacion1 = 23;
 let numeroComparacion2 = 13;
 let numeroComparacion3 = 13;
 let numeroComparacion4 = "13";

 // 13 == "13" //true
 // 13 === "13" //false (una es una manzana y la otra es una manzana pero dibujada, asi que como una es real y la otra un dibujo, no son extrictamente iguales)
 // 23 > 12 //true
 // 23 < 12 //false

let edadFelipe = 20

 if (edadFelipe >= 18){
    console.log("Puedes ir a la pachangona");
 }  else{
    console.log("Te quedas en casa");
 }

 // Das negaciones es una afirmacion 
 //!vamos a comer (no vamos a comer)
 //!no me gusta java (si m gusta java) (no * no = si)


 /*
 Operaciones de asignacion
 Son los operadores que utilizan para asignar un calor a una variable. Se usa el operador =


 let edad =31;
 let saldo = 0;
  */


 /*
 Operadores logicos

 nos devuelven un resultado a apartir de que se cumpla o no una condicion, el resultado es booleano (true or false). 

    -AND &&: sirve para expresar que dos expresiones son verdaderas. Si ambas son verdaderas, el resultado es verdadero. Si alguna de ellas es falsa, todo el resultado es falso. Si ambas son falsas, todo es falso.

 */

let tengoUnCrush = true;
let miCrushMeQuiere = true;

if (tengoUnCrush && miCrushMeQuiere){
    console.log("Estoy feliz");
} else{
    console.log ("Haganse a un lado que me quiero automorir");
}
/*
    -OR || : Sirve para determinar si dos expresiones son falsas. Si cualquiera de las dos adirmaciones es verdadera, todo es verdadero. Si las dos son falsas, todo es falso. 
*/

let hayChilaquielesVerdes = true
let hayCarneEnSuJugo = false

if (hayChilaquielesVerdes || hayCarneEnSuJugo){
    console.log("Felipe desayuna chido");
} else {
    console.log("Felipe no desayuna chido")
}

/**
 
NOT (!): Regresa lo contrario de lo que evaluamos

 */

//Este codigo esta incompleto, puede causar errores (explicacion de anidacion de operadores logicoos)



let escenario1 = (edadFelipe >= 18 && saldoFelipe = !0); 

let escenario2 = (edadFelipe >=18 && amigosQueInviten = true);


if ( escenario1 || escenario2){

}