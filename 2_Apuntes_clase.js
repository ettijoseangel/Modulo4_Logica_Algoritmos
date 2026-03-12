//    Apuntes de clase: 10/03/2026

//Arreglos en JavaScript

// Un arreglo es una estructura de datos que puede contener una colección de elementos, como números, cadenas de texto, objetos, etc. 
// En JavaScript, los arreglos se definen utilizando corchetes [] y los elementos se separan por comas. 
// Los arreglos pueden ser de cualquier tipo de dato y pueden contener elementos mixtos.

// ******************************************************
// const y let en arreglos

// Se usa const cuando no necesitemos reasignar el arreglo, es decir, no vamos a cambiar la referencia del arreglo, pero sí podemos modificar su contenido.
const arregloConst = [1, 2, 3];
arregloConst.push(4);

// Se usa let cuando necesitamos reasignar el arreglo, es decir, cambiar la referencia del arreglo a otro arreglo o a otro valor.
let arregloLet = [1, 2, 3];
arregloLet = [4, 5, 6];


//******************************************************
//Acceso a elementos de un arreglo

//Los indices de los arreglos comienzan en 0, por lo que el primer elemento del arreglo se encuentra en el índice 0, el segundo elemento en el índice 1, y así sucesivamente.

//Ejemplo de acceso a elementos de un arreglo
let mountains = ["Everest", "K2", "Kangchenjunga"];

console.log(mountains[0]); // Imprime "Everest"
console.log(mountains[1]); // Imprime "K2"
console.log(mountains[2]); // Imprime "Kangchenjunga"

mountains.push("Lhotse"); // Agrega "Lhotse" al final del arreglo
console.log(mountains); // Imprime ["Everest", "K2", "Kangchenjunga", "Lhotse"]

//Si ponemos algo que no está definido, como un índice que no existe, el resultado será 'undefined'.
console.log(mountains[10]); // Imprime 'undefined'

//Si aplicamos el indexOf a un elemento que no existe en el arreglo, el resultado será -1.
console.log(mountains.indexOf("Annapurna")); // Imprime -1

//******************************************************

//Ciclo for

// El ciclo for es una estructura de control que se utiliza para repetir un bloque de código un número determinado de veces.

const numeros = [10, 20, 30, 40, 50];

// Ejemplo de ciclo for para iterar sobre un arreglo

// for (inicialización de la variable para contar; condición a cumplir; incremento) {
for (let i=0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

//******************************************************

// Funcion vs Metodo

// Una funcion es un bloque de código que realiza una tarea específica y puede ser reutilizado en diferentes partes del programa.

// Un método es una función que está asociada a un objeto y se utiliza para realizar operaciones sobre ese objeto o para acceder a sus propiedades.

//Metodos basicos sobre arreglos

let arreglo = ["Uva", "Melon", "Manzana", "Papaya"];

arreglo.unshift("Platano"); //Agrega Platano al inicio del arreglo
console.log(arreglo);

arreglo.shift(); //Quitar al inicio
console.log(arreglo);

arreglo.push("Platano"); //Agrega Platano al final
console.log(arreglo);

arreglo.pop(); // Quita Platano del final
console.log(arreglo);

console.log(arreglo.length); //Muestra el tamaño del arreglo (Es una Propiedad)


// *******************************************
// Metodo find

const numbers = [1, 5, 10, 15];

const number_encontrado = numeros.find(elemento => elemento > 9);
//Tambien se puede escribir asi
let number_find = numeros.find((elemento) => { return elemento > 9 });

console.log(number_encontrado);


// ***************************
//Metodo map
// map toma cada uno de los elementos y les realiza alguna transformacion

const numeros_map = [1, 2, 3, 4];

const dobles = numeros_map.map(elemento => elemento * 2);

console.log(dobles);
console.log(numeros_map);

//Ejemplo extraño

resultado = numeros_map.map(() => "Hola");
console.log(resultado);

//En este ejemplo "Hola" va a reemplazar cada elemento (los numeros) que se encuentra dentro del array

// *****************************
//Metodo filter
//Crea un nuevo arreglo que contiene solamente los resultados de una condicion

let numeros_filter = [1, 2, 3, 4, 5];
const pares = numeros_filter.filter(elemento => elemento % 2 === 0);
console.log(pares);

const mayor_que_3 = numeros_filter.filter(elemento => elemento > 3);
console.log(mayor_que_3);

const filtrados = numeros_filter.filter(() => true);
console.log(filtrados);


//**********************************
//Metodo forEach

//Este metodo ejecutará una función proporcionada por el usuario a cada elemento del arreglo

let nombres = ["Ana", "Pedro", "Juan", "Tulipano"];
nombres.forEach(nombre => console.log(`Hola ${nombre}`));

//Este metodo es lo mismo que aplicar un for
for(let i = 0; i < nombres.length; i++){
    console.log(`Hola ${nombres[i]}`);
}

//************************************** 
//Metodo sort

//Este metodo ordena elementos de forma alfanumerica

let numeros_sort = [3, 1, 4, 2, 11, 21];
numeros_sort.sort(); //Sin parametros ordena de forma alfanumerica

console.log(numeros_sort);

numeros_sort.sort((a,b) => a - b); // 3 - 1 = 2
console.log(numeros_sort); 

// *************************************
// Avanzado (Modificar esto)
let personas = ["Juan", "Tulipano", "Maria"];

personas.find(() => Math.random() > 0.5);
console.log(personas);  