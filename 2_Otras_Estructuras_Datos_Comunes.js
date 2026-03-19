// *********************************** Otras Estructuras de Datos Comunes en Desarrollo de Software *******************************/

// En desarrollo de software, existen otras estructuras de datos que juegan un papel fundamental
// en la organización y manipulación eficiente de datos. 
// A continuación, se presentan algunas de estas estructuras adicionales, 
// junto con ejemplos de su aplicación práctica en el desarrollo de software.

// ************* Listas (Lists) ****************/

// Una lista es una estructura de datos que almacena una colección ordenada de elementos.
// A diferencia de los arreglos, las listas pueden tener un comportamiento más flexible, y pueden
// implementarse de diferentes maneras dependiendo de si son listas ESTÁTICAS o listas DINÁMICAS

// Listas estáticas: Son similares a los arreglos y sus tamaño no cambia después de ser creadas.

// Listas dinámicas: Pueden crecer y reducir su tamaño durante la ejecución del programa,
//                   lo que hace más eficientes en cuanto a memoria en ciertos escenarios.

// **************** Ejemplo de uso de listas *************************/

// En una aplicación de gestión de tareas, una lista dinámica podría almacenar las tareas de un usuario,
// permitiendo agregar y eliminar tareas de manera eficiente sin preocuparse por el tamaño del contenedor.

// Este ejemplo ilustra el comportamiento básico de una lista estática.

let listaDeTareas = ["Comprar pan", "Llamar a mamá", "Enviar correo"];

listaDeTareas.push("Ir al gimnasio");
console.log(listaDeTareas);   // Imprime [ 'Comprar pan', 'Llamar a mamá', 'Enviar correo', 'Ir al gimnasio' ]
console.log("***********************");

// ************* Listas Ligadas (Linked Lists) ****************/

// Una lista ligada es una estructura de datos compuesta por nodos, donde cada nodo contiene un valor y una referencia (o enlace)
// al siguiente nodo en la secuencia. A diferencia de los arreglos y las listas, las listas ligadas no almacenan sus elementos de manera contigua en memoria.
// Esta caracteristica permite una insercion y eliminacion de elementos mas eficiente en ciertas situaciones.

// Listas ligadas simples: Cada nodo tiene un solo enlace que apunta al siguiente nodo.

// Listas doblemente ligadas: Cada nodo tiene dos enlaces: uno al siguiente nodo y otro al nodo anterior.


// **************** Ejemplo de uso de listas ligadas *************************/
// **************** Listas ligadas sin ES6 *************************/

// Una aplicación de navegación hacia atrás (como un historial de navegador) puede usar una lista ligada para almacenar cada página visitada,
// y puede navegar hacia adelante o hacia atrás de manera eficiente utilizando enlaces en cada nodo.

//      Nodo de lista ligada basico
// function Nodo(valor) {
//     this.valor = valor;
//     this.siguiente = null;  // Enlace al siguiente nodo
// }

//      Crear una lista ligada simple
// let nodo1 = new Nodo("Página 1");
// let nodo2 = new Nodo("Página 2");
// let nodo3 = new Nodo("Página 3");

//      Enlazar los nodos
// nodo1.siguiente = nodo2;
// nodo2.siguiente = nodo3;
// console.log(nodo1.siguiente.valor);   //Imprime "Página 2"

// **************** Listas ligadas con ES6 *************************/

// 1. En lugar de 'function Nodo', usamos un constructor
class Nodo {
    constructor(valor) {    // El constructor recibe un "paquete" con el parametro 'valor'
        // 'this' Es una palabra clave que se refiere al objeto especifico que se encuentra creando en ese momento.
        this.valor = valor;    // Aquí se le dice al obbjeto "Guarda este paquete que recibiste en una caja llamada 'valor' dentro de tí"
        this.siguiente = null;   //Esto es clave en las listas ligadas. Por defecto, cada nodo nace 'soltero' o desconectado. Ponemos 'null' para indicar que, de entrada' no hay nadie despues de él
    }
}

// 2. Esta clase se encarga de llevar el control de donde empieza la lista (cabeza)
//    y nos permite agregar elementos facilmente
class ListaLigada {
    constructor(){
        this.cabeza = null;  // La lista inicia vacía
    }

    // Método para agregar un nodo al final
    agregar(valor) {
        const nuevoNodo = new Nodo(valor);

        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
        } else {
            let actual = this.cabeza; 
            // Recorremos hasta llegar al último (el que tiene siguiente null)
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
    }


// Método para imprimir la lista (útil para debuggear)
mostrar() {
    let actual = this.cabeza;
    let resultado = "";
    while (actual){
        resultado += `${actual.valor} -> `;
        //resultado = resultado + `${actual.valor} -> `;
        actual = actual.siguiente;
    }
    console.log(resultado + "null");
    }
}

// 3. Ahora, en lugar de enlazar a mano, la clase lo hace por ti:
const miHistorial = new ListaLigada();

miHistorial.agregar("Página 1");
miHistorial.agregar("Página 2");
miHistorial.agregar("Página 3");

// Comprobando el enlace como en tu ejemplo original:
console.log(miHistorial.cabeza.siguiente.valor);  // Imprime "Página 2"

// Ver toda la lista
miHistorial.mostrar();  // Página 1 -> Página 2 -> Página 3 -> null

console.log("***********************");

// ************* Conjutno de Elementos (Sets) o Bolsas (Bags) ****************/

// Un CONJUNTO o BAG es una estructura de datos que almacena elementos sin un orden especifico
// y sin permitir duplicados. Es otras palabras, un conjunto es similar a un conjunto matemático,
// y se usa principalmente para verificar la pertenencia de un elemento de manera eficiente.

// - A diferencia de un conjunto matemático, un bag o "bolsa" permite duplicados, 
//   pero todavía no mantiene un orden en los elementos.

// **************** Ejemplo de uso de un "bag" *************************/

// En una aplicación de compras en línea, un "bag" podría representar el carrito de compras,
// donde los usuarios agregan productos (y los mismos productos pueden aparecer varias veces).

let carritoDeCompras = new Set();  // Usemos Set para evitar duplicados

carritoDeCompras.add("Zapatos");
carritoDeCompras.add("Camiseta");
carritoDeCompras.add("Zapatos");    // No se agregará porque "Zapatos" ya está en el conjunto

console.log(carritoDeCompras);      //Imprime Set(2) {"Zapatos", "Camiseta"}
console.log("***********************");

// ************* Conjunto de Elementos (Sets) o Bolsas (Bags) ****************/

// Una tabla hash es una estructura de datos que mapea claves a valores a través de una función hash.
// La función hash convierte una clave en índice en una tabla interna,
// lo que permite acceso en tiempo constante (O(1))

// **************** Ejemplo de uso de una tabla hash *************************/

// En un sistema de autenticación de usuarios, 
// podrías usar una tabla hash para almacenar los pares de nombre de usuario y contraseña 
// para realizar búsquedas rápidas.

let usuarios = new Map();

usuarios.set("juan123", "password123");
usuarios.set("ana456", "password456");

console.log(usuarios.get("juan123"));   // Imprime "password123"
console.log("***********************");

// Las tablas hash son especialmente útiles cuando se necesitan realizar búsquedas rápidas
// en grandes cantidades de datos, como en bases de datos o sistemas de búsquedas.

// ************* Colas de Prioridad (Priority Queues) ****************/

// Una cola de prioridad (o pila de prioridad) es una estructura de datos que almacena elementos
// con una prioridad asociadad, y siempre extrae el elemento con la prioridad más alta
// (o baja, dependiendo de la implementación).
// En una cola de prioridad, los elementos no se extraen en el orden en que fueron insertados, sino en función de su prioridad.

// **************** Ejemplo de uso de una cola de prioridad *************************/

// En un sistema de gestión de tareas o trabajos, se podría utilizar una cola de prioridad para
// procesar primero las tareas más urgentes o importantes.

class ColaDePrioridad {
    constructor() {
        this.items = [];
    }

    agregar(item, prioridad){
        this.items.push({ item, prioridad });
        this.items.sort((a, b) => b.prioridad - a.prioridad);  // Ordena por prioridad
    }

    extraer(){
        return this.items.shift();   // Extrae el primer elemento (el de mayor prioridad)
    }
}

let cola = new ColaDePrioridad();
cola.agregar("Tarea urgente", 1);
cola.agregar("Tarea normal", 3);
console.log(cola.extraer());    // Imprime  { item: 'Tarea normal', prioridad: 3 }
console.log("***********************");

// Este tipo de estructura es útil cuando se necesita asegurarse de que las tareas más urgentes o importantes se procesen primero, 
// como en sistemas de impresión, procesadores de tareas o gestión de colas en servidores.

// ************* En resumen ****************/

// Listas: Son colecciones ordenadas de elementos, útiles para manejar secuencias de datos. Pueden ser estáticas o dinámicas.
// Listas Ligadas: Son estructuras compuestas por nodos, donde cada nodo apunta al siguiente. Son útiles para inserciones y eliminaciones eficientes.
// Conjuntos y Bags: Son colecciones de elementos sin orden y sin duplicados, ideales para operaciones de pertenencia o para representar elementos sin necesidad de un orden específico.
// Tablas Hash: Permiten asociar claves con valores de manera eficiente, permitiendo búsquedas rápidas.
// Colas de Prioridad: Son similares a las colas pero con una prioridad asignada a cada elemento, útil para procesar datos con prioridades.