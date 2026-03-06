//Recordando el modulo pasado
//    Apuntes de clase: 05/03/2026

//Declaracion de variables con let y const

//Global scope
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
function suma(a, b) {
    return a + b;
}

//Funcion flecha
const sumaFlecha = (a, b) => a + b;

//Funciones flecha con un solo parametro
const cuadrado = x => x * x;

//Funciones flecha sin parametros
const saludo = () => console.log("Hola!");

//Funciones flecha con cuerpo de bloque
const sumaCompleja = (a, b) => {
    const resultado = a + b;
    return resultado;
};

//Funciones flecha y el contexto de 'this'
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

//Template literals
const nombre = "Juan";
const edad = 30;
//Concatenacion tradicional
const mensaje1 = "Hola, mi nombre es " + nombre + " y tengo " + edad + " años.";
//Template literals
const mensaje2 = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(mensaje1);
console.log(mensaje2);

//Symbols

let name = Symbol("nombre");
let age = Symbol("edad");
let subject = Symbol("materia");

persona2 = {}

persona2[name] = "Juan";
persona2[age] = 30;
persona2[subject] = "Matematicas";

console.log(persona2);