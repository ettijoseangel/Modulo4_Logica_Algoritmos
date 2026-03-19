// **********************Ejemplos: Funciones flecha************************ */

// Antes de ECMAScript 6, las funciones en JavaScript se definían mediante la palabra  function
// Esta sintaxis resultaba menos concisa y, en algunos casos, más difícil de entender cuando se trabajaba con funciones anónimas o callbacks

// Una función anónima es un bloque de código definidos sin un nombre específico y se usan para tareas de un solo uso.

// Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que la primera haya finalizado su tarea.

// ************** Ejemplo práctico: Uso de let, const y funciones flecha

//Instrucciones:

// 1. Declara una función flecha llamada calculateArea que reciba dos parámetros (width y height) y retorne el área de un rectángulo.

// 2. Usa let para declarar una variable base que represente el ancho (width) y const para una constante multiplier que tendrá el valor 2.

// 3. Llama a la función calculateArea y muestra el resultado en la consola.

// ****************** Implementación PRE-ES6: ********************** */
// var calculateArea = function(width, height) {
//     var base = width; //uso de 'var' en lugar de 'let'
//     var multiplier = 2; //uso de 'var' en lugar de 'const'
//     return base * height * multiplier;
// };

// console.log(calculateArea(5,10));

//*****************  Implementacion con ES6 ***************************/

let calculateArea = (width, height) => {
    let base = width; // Declara base como 'let'
    const multiplier = 2; //Declara multiplier como 'const'
    return base * height * multiplier;
};
console.log(calculateArea(5,10));
console.log('****************************');

//************** Promesas **************/

// Una promesa es un OBJETO que representa la finalización o el fracaso eventual de una 
// operación asíncrona

// Una operación asíncrona es una tarea de programación que se ejecuta independientemente del flujo principal,
// permitiendo que el programa continúe funcionando sin esperar a que dicha tarea finalice.

// Ejemplo:

// Es como hacer un pedido en una pizzería (operación asíncrona)
// Pides la comida (solicitud), el chico del mostrador te da un ticket y tú puedes hablar con tus amigos 
// (seguir ejecutando tareas) mientras la cocina prepara la pizza (en segundo plano).
// Y no te quedas parado en la cocina esperando a que la pizza esté lista

// ***************Ejemplo prático: Trabajando con Promesas y async/await

//Instrucciones:
// 1. Crea una función fetchUserData que devuelva una promesa. 
//  Esta promesa debe simular una operación asincrónica que tarda 2 segundos en completarse (usa setTimeout).

// 2. Dentro de fetchUserData, resuelve la promesa con un objeto que tenga dos propiedades: id y name.

// 3. Escribe una función getUser que use async/await para llamar a fetchUserData, 
// esperar el resultado y mostrarlo en la consola.

//*****************Implementación Pre-ES6 con Callbacks anidados **************/

// function fetchUserData(callback) {
//   setTimeout(function() {
//     callback({ id: 1, name: "Alice" });  // Objeto que simula datos de usuario
//   }, 2000);
// }

// function getUser() {
//   fetchUserData(function(userData) {
//     console.log(userData);  // Muestra el resultado en consola
//   });
// }

// getUser();

// ********************Implementación con ES6 (con Promesas y async/await)

const fecthUserData = () => {
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve({id: 1, name: "Alice"}); //Objeto que simula datos de usuario
        }, 2000);
    });
};

const getUser = async () => {
    const userData = await fecthUserData(); //Esperas a que la promesa se resuelva

    console.log(userData);
};

getUser();

console.log('*********************');
//Comparacion
// - ES6 con Promesas y async/await: 
// Este enfoque es más limpio y fácil de leer, ya que el código se escribe de forma secuencial gracias a await, 
// y las promesas permiten evitar los callbacks anidados.

// - Pre-ES6 con Callbacks: 
// Los callbacks anidados pueden volverse complejos en operaciones asincrónicas más largas, 
// lo cual aumenta el riesgo de errores y hace que el flujo de control sea difícil de seguir.

//********************* Clases en JavaScript *************/

// Una clase es una plantilla o modelo para crear objetos con propiedades (datos) y métodos (comportamientos) predefinidos.
// Esta clase permite organizar el código de forma estructurada y reutilizable,
// permitiendo instanciar múltiples objetos con la misma estructura mediante la palabra clave
// 'new'

//******************** Implementación de una "clase" antes de ES6 ***********************/

// function Producto(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
// }

// Producto.prototype.obtenerDetalles = function(){
//     return `Producto: ${this.nombre}, Precio: ${this.precio}`;
// };

// const producto1 = new Producto('Laptop', 1200);
// console.log(producto1.obtenerDetalles());


//******************** Implementación de una clase después de ES6 ***********************/

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    obtenerDetalles(){
        return `Producto: ${this.nombre}, Precio: ${this.precio}`;
    }
}

const producto1 = new Producto('Laptop', 1200);
console.log(producto1.obtenerDetalles());


//*********************************  Módulos (import/export)  **********************************/

// Antes de ES6, JavaScript no tenía un sistema de módulos nativo, por lo que los desarrolladores tenían que utilizar bibliotecas como require.js 
// o el sistema de módulos de Node.js para dividir el código en archivos más pequeños. 
// Con ES6, se introdujo la sintaxis import y export, lo que permite que el código se organice de manera más modular y reutilizable de forma nativa en el navegador.

// ******************************* Antes de ES6 (CommonJS) *********************************/

// En un archivo llamado 'utils.js'
function saludar(nombre){
    return `Hola, ${nombre}`;
}

module.exports = saludar;

// En un archivo llamado 'app.js'
const saludar = require('./utils');
console.log(saludar('Juan'));

// ******************************* Después de ES6 (import/export) *********************************/

// En el archivo llamado 'utils.js'
export function saludar(nombre){
    return `Hola, ${nombre}`;
}

//En el archivo app.js
import { saludar } from './utils';
console.log(saludar('Juan'));