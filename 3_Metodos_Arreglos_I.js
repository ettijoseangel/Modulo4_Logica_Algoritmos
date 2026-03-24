//*** Métodos de Arreglos (find, map, filter, foreach) ***/

// Los métodos de arreglos en JavaScript son herramientas poderosas que 
// le permiten manipular, transformar y analizar datos en un formato de lista.
// Si apenas estás empezando a conocer JavaScript,
// aprender estos métodos te ayudará a trabajar con datos de forma más eficiente y legible. 
// Vamos a explorar los más importantes.

//** find() **/

// find() devuelve el primer elemento en un arreglo que cumple con una condicion dada
// Si ningún elemento cumple la condición, retorna "undefined"

const numeros = [10, 20, 30, 40];

const resultado = numeros.find(num => num > 25);

console.log(resultado); // 30

console.log('******************************');

//*****************************************************/

//**  map()  **/

// El metodo map() crea un nuevo arreglo aplicando una funcion a cada elemento del arreglo original,
// sin modificar el original.

const numeros_arreglo = [1, 2, 3, 4];

const cuadrados = numeros_arreglo.map(num => num ** 2);

console.log(cuadrados); //[1, 4, 9, 16]

console.log('******************************');

//*****************************************************/

//**  filter()  **/

// El metodo filter() devuelve un nuevo arreglo que contiene todos los elementos
// que cumplen una condicion especificada

const arreglo_numeros = [5, 10, 15, 20];

const mayores = arreglo_numeros.filter(num => num > 10);

console.log(mayores); // [15, 20]

console.log('******************************');

//*****************************************************/

//**  forEach()  **/

// El metodo forEach() ejecuta una funcion para cada elemento del arreglo.
// No devuelve un nuevo arreglo ni modifica el original.

const frutas = ["manzana", "platano", "naranja"];
frutas.forEach(fruta => console.log(fruta));

// manzana
// platano
// naranja

console.log('******************************');

//*****************************************************/

//**  Casos de Uso en el Mundo Real  **/

// ** Aplicaciones de Tiendas en Línea **/

// - filter(): Filtrar productos por precio o categoría.

// - find(): Encontrar un producto específico basado en el ID.

// ** Administración de Contactos **/

// - map(): Crear una lista con solo los nombres de los contactos.

// - includes(): Verificar si un nombre está en la lista de contactos.

// ** Seguimiento de Hábitos **/

// - every(): Verificar si completaste todas tus metas diarias.

// - some(): Comprobar si al menos cumpliste una meta.

// ** Orden de Calificaciones **/

// - sort(): Ordenar calificaciones de estudiantes de mayor a menor.

// ** Cálculos Financieros **/

// - reduce(): Calcular el gasto total de una lista de transacciones.
