// *********************************** Estructura de Datos Comunes en JS *******************************/

// Además de los arreglos y objetos, existen otras estructuras de datos importantes que pueden ser muy útiles en el desarrollo de software,
// especialmente cuando se trata de optimizar el rendimiento y organizar datos de manera más eficiente. 
// A continuación, se describen algunas de estas estructuras de datos, junto con ejemplos de su uso práctico.

// ************* Pilas (Stacks) ****************/

// Una pila es una estructura de datos que sigue el principio de 
// ULTIMO en ENTRAR   ,    PRIMERO en SALIR  ----> LAST IN, FIRST OUT
// Esto significa que el último elemento agregado a la PILA será el primero en ser removido,
// Puedes imaginar una pila de platos, donde solo puedes tomar el plato de la parte superior.

// **************** Ejemplo de uso de pilas *************************/

// En los navegadores web, cuando se navega a través de páginas,
// se usa una pila para mantener el historial de navegación. 
// Cada vez que cargas una nueva página, esta se agrega a la pila,
// y cuando usas el botón "Atrás", el navegador elimina la página más reciente
// (última en entrar) de la pila.

let pila = [];

pila.push("Página 1");
pila.push("Página 2");
pila.push("Página 3");

console.log(pila.pop()); //Imprime "Página 3", la última página visitado
console.log("***********************");


// ********************* Colas (Queues) *************************/

// Una cola es una estructura de datos que sigue el principio de...
// PRIMERO en ENTRAR   ,    PRIMERO en SALIR    -----> FIRST IN, FIRST OUT
// Es como una fila de personas esperando en un banco: 
//  la primera persona en llegar es la primera en ser atendida.

// *********************  Ejemplo de uso de colas  **********/

// Las colas se usan comúnmente en sistemas de impresión, 
// donce los trabajos de impresión se procesan en el orden en que fueron enviados.
// El primer trabajo que llega a la cola será el primero en ser impreso.

let cola = [];

cola.push("Trabajo 1");
cola.push("Trabajo 2");
cola.push("Trabajo 3");

console.log(cola.shift());   //Imprime "Trabajo 1", el primero en entrar
console.log("***********************");

// *********************  Conjuntos (Sets) **********/

// Un conjunto es una estructura de datos que almacena elementos únicos,
// es decir, no permite duplicados. Esto lo hace útil cuando 
// necesitas garantizar que no haya elementos repetidos en una colección de datos.

// *********************  Ejemplo de uso de conjuntos  ***************/

// Imagina que estás construyendo una lista de usuarios que han participado en un evento.
// Aunque un usuario podría registrarse varias veces, solo te interesa contar a cada persona
// una vez. Un conjunto te ayudaría a manejar esto de manera eficiente.

let usuarios = new Set();

usuarios.add("Juan");
usuarios.add("Ana");
usuarios.add("Juan");  // No se agrega porque "Juan" ya está en el conjunto

console.log(usuarios); // Imprime Set {"Juan", "Ana"}
console.log("***********************");

// *********************  Mapas (Maps)  **********/

// Un mapa es una estructura de datos SIMILAR a un objeto,
// pero permite usar cualquier tipo de clave, no solo cadenas.
// Además, los mapas mantienen el orden de inserción de los elementos.

// *********************  Ejemplo de uso de mapas  ***************/

// Imagina que estás desarrollando una aplicación de compras en línea.
// Es como usar un mapa para asociar código de producto único a su precio.

let precios = new Map();

precios.set("productoA", 25);
precios.set("productoB", 40);
precios.set("productoC", 15);

console.log(precios.get("productoB"));  // Imprime 40
console.log("***********************");

// *********************  Árboles (Trees)  ***************/

// Un árbol es una estructura jerárquica en la que cada elemento (NODO)
// tiene un valor y una lista de referencias a otros nodos, que se llaman HIJOS.
// Los árboles son útiles cuando se necesita representar RELACIONES JERÁRQUICAS, 
// como la estructura de un sistema de archivos o la organización de una empresa.

// *********************  Ejemplo de uso de árboles  ***************/

// Un sistema de archivos en un computadore está representado como un árbol,
// cada carpeta es un nodo, y las subcarpetas y archivos son nodos hijos de las carpetas correspondientes.

let arbol = {
    nombre: "Root",
    
    hijos: [
        { nombre: "Carpeta 1", hijos: [] },
        { nombre: "Carpeta 2", hijos: [{ nombre: "Subcarpeta", hijos: [] }] }
    ]
};

// 1. Buscar un nodo por nombre   ------ Este método recorre el árbol hasta encontrar la carpeta que buscas.
const buscarCarpeta = (nodo, nombreObjetivo) => {
    // Caso base = ¿es este el que buscamos?
    if (nodo.nombre === nombreObjetivo) return nodo;

    // Si tiene hijos, buscamos en cada uno de ellos
    for (const hijo of nodo.hijos) {
        const resultado = buscarCarpeta(hijo, nombreObjetivo);
        if (resultado) return resultado;   // Si lo encontró en la rama, lo devuelve
    }

    return null;  // No se encontró
};

// 2. Agregar un hijo a una carpeta específica      ------- Usamos una función de búsqueda anterior para saber dónde insertar el nuevo objeto.
const agregarHijo = (raiz, nombrePadre, nombreNuevoHijo) => {
    const padre = buscarCarpeta(raiz, nombrePadre);

    if (padre) {
        padre.hijos.push({ nombre: nombreNuevoHijo, hijos: [] });
        console.log(`${nombreNuevoHijo} agregado a ${nombrePadre}`);
    } else {
        console.log(`No se encontró la carpeta padre: ${nombrePadre}`);
    }
};

// 3. Mostrar la estructura  completa (Formato Visual)        --------  Para ver la jerarquía con sangrias, como en una terminal
const imprimirArbol = (nodo, nivel = 0) => {
    //Creamos la indentación basada en el nivel de profundidad
    const sangria = " ".repeat(nivel);
    console.log(`${sangria}📁 ${nodo.nombre}`);

    //Llamda recursiva para los hijos
    nodo.hijos.forEach(hijo => imprimirArbol(hijo, nivel + 1));
}

// 1. Agregar contenido
agregarHijo(arbol, "Carpeta 1", "Archivo secreto del pentagono.txt");
agregarHijo(arbol, "Subcarpeta", "Foto.jpg");

// 2. Ver el resultado
imprimirArbol(arbol);
console.log("***********************");

// *********************  Resumen de Estructuras de Datos  ***************/

// Aquí se resumen las estructuras mencionadas:

// ** Arreglos (Arrays):  **/
// - Son ideales para almacenar colecciones ordenadas de elementos que se acceden mediante un índice.
// - Ejemplo: Lista de tareas, carrito de compras, inventario de productos.

// ** Objetos (Objects):  **/
// - Se utilizan para almacenar datos en forma de clave-valor, donde cada clave es única.
// - Ejemplo: Información personal de un usuario, detalles de un libro.

// **  Pilas (Stacks):  **/
// - Siguen el principio de último en entrar, primero en salir (LIFO).
// - Ejemplo: Historial de navegación en un navegador web, manejo de deshacer en aplicaciones de edición.

// **  Colas (Queues):  **/
// - Siguen el principio de primero en entrar, primero en salir (FIFO).
// - Ejemplo: Procesamiento de trabajos en una impresora, manejo de solicitudes en un servidor.

// **  Conjuntos (Sets):  **/
// - Almacenan solo elementos únicos, sin permitir duplicados.
// - Ejemplo: Registro de usuarios que han participado en un evento, elementos únicos en una lista.

// **  Mapas (Maps):  **/
// - Almacenan datos en formato clave-valor, pero permiten cualquier tipo de clave.
// - Ejemplo: Asociación de productos con precios en una tienda en línea, mapeo de códigos de colores.

// **  Árboles (Trees):  **/
// - Representan estructuras jerárquicas con nodos que pueden tener hijos.
// - Ejemplo: Estructura de carpetas en un sistema de archivos, representación de una organización jerárquica.