//    ************************** Apuntes de clase: 12/03/2026 ******************************

//  *********************    Metodos en Arreglos: Segunda parte **********************

// ***********************************
console.log('*******************');

// Metodo every()

// Comprueba si todos los elementos del arreglo cumplen con una funcion

//Se usa cuando necesitas saber si TODOS los elementos SATISFACEN un criterio

console.log('Metodo every()');
console.log('Primer ejemplo:');
const numeros = [10, 20, 30, 40, 50];

const todosPares = numeros.every(numero => numero % 2 === 0);
console.log(todosPares); // Imprime true, porque todos los números son pares


console.log('Segundo ejemplo:');
const numeros2 = [10, 15, 30, 40, 50];

const todosPares2 = numeros2.every(numero => numero % 2 === 0);
console.log(todosPares2); // Imprime false, porque el número 15 no es par

console.log('Tercer ejemplo:');
const letras = ['a', 'b', 'c', 'd'];

const todosString = letras.every(letra => typeof letra === 'string');
console.log(todosString); // Imprime true, porque todos los elementos son cadenas de texto


console.log('********************');

// Metodo some()
// Comprueba si al menos un elemento del arreglo cumple con una funcion
// Se usa cuando necesitas saber si AL MENOS UN elemento SATISFACE un criterio

console.log('Metodo some()');

console.log('Primer ejemplo:');
const numeros3 = [10, 15, 30, 40, 50];

const algunPar = numeros3.some(numero => numero % 2 === 0);
console.log(algunPar); // Imprime true, porque hay números pares (10, 30, 40, 50)

console.log('Segundo ejemplo:');
const numeros4 = [11, 15, 31, 41, 51];
const algunPar2 = numeros4.some(numero => numero % 2 === 0);
console.log(algunPar2); // Imprime false, porque no hay números pares


console.log('*********************');

//Metodo includes()

// Comprueba si un arreglo incluye un elemento específico, devuelve true o false

// Se usa cuando necesitas saber si un elemento ESPECÍFICO está presente en el arreglo  

console.log('Metodo includes()');
console.log('Primer ejemplo:');

const frutas = ['manzana', 'banana', 'naranja'];

const tieneBanana = frutas.includes('banana');
console.log(tieneBanana); // Imprime true, porque 'banana' está en el arreglo

console.log('**********************');

// Metodo reduce()

// Reduce el arreglo a un solo valor

// Se usa cuando se necesita realizar un calculo acumulativo sobre los
// elementos de un arreglo

console.log('Metodo reduce()');
console.log('Primer ejemplo:');

const numeros5 = [1, 2, 3, 4, 5];
const sumatoria = numeros5.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(`Este es el resultado usando reduce(): ${sumatoria}`); // Resultado con el metodo reduce()


console.log('El equivalente de este primer ejemplo es equivalente a esto:');
let acumulador = 0;
for(let i = 0; i < numeros5.length; i++){
    acumulador = acumulador + numeros5[i];
}
console.log(`Este es el resultado con un ciclo for: ${acumulador}`);


console.log('Segundo ejemplo:'); //Juntas las letras del arreglo (imitando al metodo join() )
const arreglo_letras = ["A", "B", "C", "D"];

const resultado_letras = arreglo_letras.reduce((acumulador, elemento) => acumulador += elemento + " ", "");
console.log(resultado_letras);


console.log('Tercer ejemplo:'); //Obtener el valor maximo

const numeros6 = [1, 4, 8, 22, 99, 3, 7];
const max = numeros6.reduce((antes, elemento) => {
    if(antes > elemento) {
        return antes;
    } else{
        return elemento;
    }   
}, 0);
console.log(max);

// Usando operadores terciarios
console.log('Este es el resultado del tercer ejemplo usando operadores terciarios...');
const max2 = numeros6.reduce((antes, elemento) => antes > elemento ? antes : elemento, 0);
console.log(max2);


console.log('***************************');
console.log('Objetos en JavaScript');

// Los objetos sirven para representar entidades del mundo real
// Tambien para crear estructuras de datos complejas formmando estructuras jerarquicas

console.log('Primer ejemplo:');

let carritoCompras = {
    productos: [],
    agregarProducto: function(producto){
        this.productos.push(producto);
    },
    eliminarProducto: function(indice){
        this.productos.splice(indice, 1);
    }
};
//Agregando productos al arreglo de carritoCompras
carritoCompras.agregarProducto('Manzanas');
carritoCompras.agregarProducto('Platanos');
console.log(carritoCompras.productos);

//Eliminando un producto a traves del indice 0 
// En este caso, eliminamos el primer producto agregado (Manzanas)
carritoCompras.eliminarProducto(0);
console.log(carritoCompras.productos); 
