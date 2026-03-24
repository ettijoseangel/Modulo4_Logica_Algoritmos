//*** Métodos de Arreglos (sort, reduce, some, every)  ***/

// Existen otros métodos que también son de utilidad en el desarrollo de software

//** sort() **/

//El método sort() se utiliza para ordenar los elementos de un arreglo en su lugar
// y devuelve el mismo arreglo ordenado. Por defecto, convierte los elementos a cadenas
// y los ordena en orden LEXICOGRAFICO, lo que puede dar resultados inesperados
// al trabajar con numeros. Para personalizar el criterio de ordenacion,
// se puede pasar una funcion de comparacion como ARGUMENTO. 
// Por EJEMPLO: para ordenar numeros de menor a mayor, se puede usar arr.sort((a,b) => a - b)
// Este metodo es util para organizar listas alfabeticamente, ordenar numeros o personalizar el orden de objetos.

// Ejemplo

const numeros = [30, 5, 20, 10];

numeros.sort((a, b) => a -b ); //Orden ASCENDENTE

console.log(numeros);
console.log('******************************');

//*****************************************************/

//**  reduce()  **/

// El metodo reduce() ejecuta una funcion de callback sobre cada elemento del arreglo,
// acumulando un valor unico que se devuelve al final. Este acumulador se actualiza en cada iteracion
// segun la logica definida en la funcion.  reduce()  es versatil y puede usarse para suma elementos,
// concatenar cadenas, crear objetos, orealizar operaciones mas complejas.
// Por ejemplo, puedes sumar núumeros con  arr.reduce((acum, val) => acum + val, 0),
// donde 0 es el valor inicial del acumulador. Es un metodo poderoso para transformar arreglos en un solo valor o estructura.

const numeros_arreglo = [1, 2, 3, 4];

const suma = numeros_arreglo.reduce((acumulador, num) => acumulador + num, 0);

console.log(suma);  //10
console.log('******************************');

//*****************************************************/

//**  some()  **/

// El metodo some() verifica si al menos UN elemento de un arreglo cumple con la condicion definida
// en una funcion de callback. 
// Si encuentra un elemento que cumple la condicion, detiene la iteracion y devuelve true. Si ninguno cumple, devuelve false.
// Este metodo es ideal cuando solo necesitas comprobar la existencia de un elemento que cumpla ciertos criterios, por ejemplo,
// si en una lista de numeros hay al menos uno mayor que 10:
//  arr.some(num => num > 10)

// Ejemplo

const segundo_arreglo = [1, 2, 3, 4];

const hayMayores = segundo_arreglo.some(num => num > 3);

console.log(hayMayores); //true
console.log('******************************');

//*****************************************************/

//**  every()  **/

// El metodo every() evalua si todos los elementos de un arreglo cumplen con una condicion especificada en una funcion de callback.
// Si todos cumplen, devuelve true;  si al menos uno NO lo hace, devuelve false.
// Este metodo es util para validar arreglos completos, como asegurarse de que todos los numeros de una lista sean positivos con
// arr.every(num => num > 0)
// Al igual que some, detiene la iteracion en cuanto encuentra un resultado definitivo, lo que lo hace eficiente.

const tercer_arreglo = [2, 4, 6, 8];

const sonPares = tercer_arreglo.every(num => num % 2 === 0);

console.log(sonPares);  // true
console.log('******************************');

//*****************************************************/'

//**  includes()  **/

// El metodo includes verifica si un arreglo contiene un valor especifico, devolviendo  'true' si lo encuentra
// y 'false' en caso contrario.  Es una forma sencilla y directa de realizar busquedas en arreglos.
// A diferencia de some() , includes()  no usa callback y simplemente busca el valor exacto proporcionado.
// Es util, por ejemplo, para verificar si un elemento existe en una lista o si una cadena contiene una subcadena determinada

const frutas = ["manzana", "platano", "naranja"];

const tieneManzana = frutas.includes("manzana");

console.log(tieneManzana); // true
