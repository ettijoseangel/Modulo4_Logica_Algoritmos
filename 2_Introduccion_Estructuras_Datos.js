// ********** Introducción a Estructuras de Datos ********** */

// Las estructuras de datos son una forma de organizar y almacenar datos en una computadora de manera eficiente 
// para que puedan ser utilizados y manipulados de forma más efectiva. 
// En JavaScript, dos de las estructuras de datos más comunes y esenciales que usaremos son arreglos (arrays) y objetos (objects). 
// Estos son fundamentales para la programación en JavaScript, ya que permiten almacenar colecciones de datos y manipularlos de manera flexible y eficiente.

// ********** Arreglos ************/

// Un arreglo es una estructura de datos que almacena una colección de elementos. 
// Los arreglos en JavaScript pueden contener cualquier tipo de dato: números, cadenas de texto, objetos e incluso otros arreglos. 
// Los elementos en un arreglo se organizan en una secuencia y se accede a ellos mediante un índice, el cual comienza en 0.

// Para crear un arreglo en JavaScript, usamos corchetes []:
let frutas = ["manzana", "platano", "cereza"];

console.log(frutas[0]);  // Imprime el primer dato almacenado, en este caso "manzana"
console.log("***********************");

// ************* Operaciones comunes con arreglos ****************** */

// 1. Acceder a un elemento.   ------ Para acceder a un elemento del arreglo usando su indice.
let colores = ["rojo", "verde", "azul"];

console.log(colores[1]);  // Imprime "verde"

// 2. Agregar elementos.      ------ Usando el método .push() para agregar elementos al final del arreglo.
colores.push("amarillo");

console.log(colores);    // Imprime ["rojo", "Verde", "azul", "amarillo"]

// 3. Eliminar elementos.     ------ Usando el método .pop() para eliminar el último elemento del arreglo
colores.pop();

console.log(colores);    // Imprime ["rojo", "verde", "azul"]
console.log("***********************");

// ****************** Ejemplo de caso de uso de arreglos *********/

// Imagina que estás organizando una fiesta y necesitas llevar un registro de los invitados.
// Usar un arreglo es una manera sencilla de almacenar y manejar una lista de nombres.

let invitados = ["Juan", "Maria", "Pedro", "Ana"];

invitados.push("Luis"); // Agrega a Luis a la lista.

console.log(invitados); // Imprime ["Juan", "Maria", "Pedro", "Ana", "Luis"]
console.log("***********************");

// ******************** Objetos (Objects) **********************/

// Un objeto en JavaScript es una estructura que permite almacenar una colección de datos
// en forma de propiedades clave-valor. A diferencia de los arreglos, los objetos no están
// ordenados por índice, sino por claves (o propiedades). Las claves son siempre cadenas de texto,
// y los valores pueden ser cualquier tipo de dato (números, cadenas, arreglos, funciones, etc).

// Para crear un objeto en JavaScript, usamos llaves {}:
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

console.log(persona.nombre); //Imprime "Juan"
console.log("***********************");

// ************** Operaciones comunes con objetos ***********************/

// 1. Acceder a una propiedad.    ----- Para acceder a una propiedad del objeto usando el nombre de la propiedad.
console.log(persona.edad);    // Imprime 30

// 2. Modificar una propiedad.    ----- Para cambiar el valor de una propiedad asignando un nuevo valor.
persona.ciudad = "Barcelona";
console.log(persona.ciudad);  // Imprime "Barcelona"

//3. Agregar una nueva propiedad. ----- Para agregar propiedades nuevas a un objeto de manera dinamica.
persona.telefono = "123-456-7890";
console.log(persona.telefono);  // Imprime "123-456-7890"
console.log("***********************");

console.log(persona.agua);      // Imprime 'undefined'  cuando se intenta acceder a una propiedad que no existe en un objeto

// ********************* Ejemplo de caso de uso de arreglos  **********/

// Un objeto es útil cuando deseas almacenar información realacionada entre sí,
// como los detalles de una persona. Por ejemplo, si quieres almacenar los datos de un libro,
// podrías hacerlo usando con propiedades como título, autor y año.

let libro = {
    titulo : "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967
};

console.log(libro.titulo);  // Imprime "Cien años de soledad"
console.log("***********************");

// **********************************  Comparacion entre Arreglos y Objetos  ***************************/

// Ambos, arreglos y objetos, son fundamentales en JavaScript, pero tienen usos diferentes:
// 1. Los arreglos son ideales cuando necesitas almacenar una colección ordenada de elementos, 
//      y acceder a ellos por un índice numérico.
// 2. Los objetos son mejores cuando necesitas almacenar una colección no ordenada de datos relacionados entre sí, 
//      donde cada elemento tiene un nombre o clave asociada.

// ******************* Ejemplo de uso combinado ******************/

// Supongamos que deseas llevar un registro de varios productos en una tienda.
// Puedes usar un arreglo para almacenar los productos y un objeto para describir cada uno de esos productos.

let productos = [
    { nombre: "Camiseta", precio: 20, stock: 50 },
    { nombre: "Pantalón", precio: 40, stock: 30 },
    { nombre: "Zapatos", precio: 60, stock: 20 }
];

console.log(productos[1].nombre);   // Imprime "Pantalón"
console.log("***********************");

// ************************ Casos de Uso en el Mundo Real ************************** */

// ** Arreglos: **

// Lista de tareas: Usar un arreglo para almacenar las tareas que necesitas realizar en un día.
// Carrito de compras: Un arreglo puede almacenar los productos que el usuario añade a su carrito.
// Orden de empleados: Puedes usar un arreglo para almacenar los nombres de los empleados en un proyecto, 
//       asegurándote de que se sigan ciertos pasos o etapas.


// ** Objetos:  **

// Registro de usuario: Un objeto puede almacenar información sobre un usuario (nombre, dirección, email).
// Configuración de una aplicación: Los objetos se usan para almacenar configuraciones o parámetros de una aplicación, 
//      como el tema de la interfaz de usuario, el idioma, etc. 
// Receta de cocina: Un objeto puede almacenar los ingredientes y las instrucciones de una receta, 
//      cada uno con su nombre y cantidad.
