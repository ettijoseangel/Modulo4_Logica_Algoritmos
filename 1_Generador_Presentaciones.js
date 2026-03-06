//                                                             Ejercicio: Generador de Tarjetas de Presentación

//     Objetivo: 
//      Crear un programa que genere tarjetas de presentación personalizadas utilizando funciones flecha y template literals.


// Paso 1: Definimos la fuente de datos.
// Creamos un arreglo de tipo const llamado 'contactos'
// Donde 'contactos' contendrá 4 objetos. Cada objeto contiene: nombre, puesto, empresa, correo electrono y el telefono.
// El arreglo es el siguiente:

const contactos = [
    { nombre: "Juan", puesto: "Ingeniero", empresa: "Tech Corp", correo_electronico: "juan@techcorp.com", telefono: "123-456-7890" },
    { nombre: "María", puesto: "Diseñadora", empresa: "Design Studio", correo_electronico: "maria@designstudio.com", telefono: "098-765-4321" },
    { nombre: "Carlos", puesto: "Médico", empresa: "City Hospital", correo_electronico: "carlos@cityhospital.com", telefono: "111-222-3333" },
    { nombre: "Ana", puesto: "Abogada", empresa: "Legal Firm", correo_electronico: "ana@legalfirm.com", telefono: "555-555-5555" }
];


//Paso 2: Creamos la plantilla por medio de la funcion flecha llamada 'generarTarjeta'
//Definimos la funcion 'generarTarjeta' donde recibe un parametro 'contacto' y retorna una plantilla de texto formateada utilizando template literals.
// Funcionamiento: La función 'generarTarjeta' toma un objeto 'contacto' como argumento y utiliza template literals para crear una tarjeta de presentación 
// formateada con la información del contacto, incluyendo su nombre, puesto, empresa, correo electrónico y teléfono.
const generarTarjeta = contacto => {
    return `
    ---------------------------------------
    | Nombre: ${contacto.nombre} |
    | Puesto: ${contacto.puesto}  |                  
    | Empresa: ${contacto.empresa} |                
    | Correo Electrónico: ${contacto.correo_electronico} |   
    | Teléfono: ${contacto.telefono}                      |  
    ----------------------------------------
    `;
}

//Paso 3: Iteramos sobre el arreglo 'contactos' utilizando el método 'forEach' para generar y mostrar cada tarjeta de presentación en la consola.
// Funcionamiento: Este metodo (forEach) itera sobre cada elemento del arreglo 'contactos' y para cada contacto, llama a la función 'generarTarjeta' para crear la tarjeta de presentación,
// luego imprime la tarjeta en la consola.
contactos.forEach(contacto => {
    const tarjeta = generarTarjeta(contacto);
    console.log(tarjeta);
});
