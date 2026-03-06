//Recordando el modulo pasado
//    Apuntes de clase: 05/03/2026

//Declaracion de variables con let, const y var

//Global scope

// El global scope se refiere al ámbito global de una aplicación, donde las variables y funciones declaradas son accesibles desde cualquier parte del código. 
// Las variables declaradas con var tienen un alcance global o de función, mientras que las variables declaradas con let y const tienen un alcance de bloque, 
// lo que significa que solo son accesibles dentro del bloque en el que se declaran (como dentro de una función, un bucle o una estructura condicional). 
// Es importante tener en cuenta estas diferencias para evitar problemas de alcance y mantener un código más organizado y predecible.

// ***Nota: Es recomendable usar let y const en lugar de var para evitar problemas de alcance y mejorar la legibilidad del código.***

var var1 = 1; //Var es para variables globales o de funcion, no tiene scope de bloque
let let1 = 1; //Let es para variables de bloque

function myFunction() {
    //function scope
    var var2 = 2;
    let let2 = 2;

    for (var i = 0; i < 1; i++) {
        //block scope
        var var3 = 3;
        let let3 = 3;
    }
}


//Hablemos de la funcion flecha

//Funcion tradicional
// La funcion tradicional se define utilizando la palabra clave 'function' seguida del nombre de la función, los parámetros entre paréntesis y el cuerpo de la función entre llaves.
function suma(a, b) {
    return a + b;
}


//Funcion flecha
// La función flecha es una forma más concisa de escribir funciones en JavaScript. Se define utilizando la sintaxis de flecha (=>) 
// y puede omitir la palabra clave 'function' y las llaves si el cuerpo de la función es una sola expresión.
const sumaFlecha = (a, b) => a + b;


//Funciones flecha con un solo parametro
// Si una función flecha tiene un solo parámetro, se pueden omitir los paréntesis alrededor del parámetro.
const cuadrado = x => x * x;


//Funciones flecha sin parametros
// Si una función flecha no tiene parámetros, se deben usar paréntesis vacíos.
const saludo = () => console.log("Hola!");


//Funciones flecha con cuerpo de bloque
// Si el cuerpo de la función flecha tiene más de una expresión, se deben usar llaves para delimitar el bloque de código y se debe usar la palabra clave 'return' para devolver un valor.
const sumaCompleja = (a, b) => {
    const resultado = a + b;
    return resultado;
};


//Funciones flecha y el contexto de 'this'
// En las funciones tradicionales, el valor de 'this' se determina por cómo se llama a la función. En cambio, en las funciones flecha, 
// 'this' se hereda del contexto en el que se define la función, lo que significa que no tiene su propio valor de 'this' y no puede ser rebindado. 
// Esto puede ser útil para evitar problemas de contexto en ciertas situaciones, como en callbacks o métodos de objetos.
const obj = {
    nombre: "Objeto",
    metodoTradicional: function() {
        console.log(this.nombre); // 'this' se refiere al objeto
    },
    metodoFlecha: () => {
        console.log(this.nombre); // 'this' no se refiere al objeto, sino al contexto global
    }
};

console.log(obj.metodoTradicional);
console.log(obj.metodoFlecha);


//****************************************************************************
//Template literals
// Los template literals son una forma de crear cadenas de texto en JavaScript que permiten incluir expresiones y variables de manera más sencilla y legible.
// Se definen utilizando comillas invertidas (backticks) en lugar de comillas simples o dobles, y las expresiones se incluyen dentro de ${}.
// Ejemplo de concatenacion tradicional vs template literals

const nombre = "Juan";
const edad = 30;

//Concatenacion tradicional
// La concatenación tradicional de cadenas de texto en JavaScript se realiza utilizando el operador '+' para unir las partes de la cadena, 
// lo que puede resultar en un código menos legible y más propenso a errores.
const mensaje1 = "Hola, mi nombre es " + nombre + " y tengo " + edad + " años.";


//Template literals
// Los template literals permiten crear cadenas de texto de manera más legible y fácil de escribir, 
// ya que se pueden incluir variables y expresiones directamente dentro de la cadena utilizando la sintaxis ${}.
const mensaje2 = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;


console.log(mensaje1);
console.log(mensaje2);


// *****************************************************

//Symbols
// Los Symbols son un tipo de dato primitivo en JavaScript que se utilizan para crear identificadores únicos.
// Se crean utilizando la función Symbol() y pueden tener una descripción opcional para facilitar la depuración. 
// Los Symbols son útiles para evitar conflictos de nombres en objetos y para crear propiedades privadas en objetos.

let name = Symbol("nombre");
let age = Symbol("edad");
let subject = Symbol("materia");

persona2 = {}

persona2[name] = "Juan";
persona2[age] = 30;
persona2[subject] = "Matematicas";

console.log(persona2);

// ****************************************************

//Desestructuracion de arreglos
// La desestructuración de arreglos es una característica de JavaScript que permite extraer valores de un arreglo y asignarlos a variables de manera más concisa y legible.

// Ejemplo de desestructuración de arreglos
let arreglo = ["Papaya", "Manzana", "Pera"];


let [ fruta_1 ] = arreglo;
console.log(fruta_1); //Papaya

let [ , fruta_2 ] = arreglo;
console.log(fruta_2); //Manzana

let [ , , fruta_3 ] = arreglo;
console.log(fruta_3); //Pera


//Hablemos de synchronous y asynchronous

//Synchronous
// El código síncrono se ejecuta de manera secuencial, lo que significa que cada línea de código se ejecuta una después de la otra.
// En el ejemplo a continuación, la función tareaSincrona se ejecuta completamente antes de que se ejecute la función tareaAsincrona, 
// lo que demuestra el comportamiento síncrono del código.
function tareaSincrona() {
    console.log("Tarea sincrona iniciada");
    console.log("Tarea sincrona finalizada");
}

//Asynchronous
// El código asíncrono se ejecuta de manera no secuencial, lo que significa que algunas partes del código pueden ejecutarse mientras otras partes están en espera de una operación,
// como una solicitud de red o un temporizador.
// En el ejemplo a continuación, la función tareaAsincrona se inicia después de la función tareaSincrona, pero su finalización se retrasa debido al uso de setTimeout, 
// lo que demuestra el comportamiento asíncrono del código.
function tareaAsincrona() {
    console.log("Tarea asincrona iniciada");
    setTimeout(() => {
        console.log("Tarea asincrona finalizada");
    }, 2000);
}

tareaSincrona();
tareaAsincrona();

//Callbacks
// Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que la función principal ha terminado su tarea.
// En el ejemplo a continuación, la función tareaConCallback acepta un callback como argumento y lo ejecuta después de completar su tarea asincrona, 
// lo que demuestra cómo los callbacks permiten manejar operaciones asíncronas en JavaScript.
function tareaConCallback(callback) {
    console.log("Tarea con callback iniciada");
    setTimeout(() => {
        console.log("Tarea con callback finalizada");
        callback();
    }, 2000);
}

// Llamamos a la función tareaConCallback y le pasamos un callback que se ejecutará después de que la tarea asincrona haya finalizado.
tareaConCallback(() => {
    console.log("Callback ejecutado");
});
