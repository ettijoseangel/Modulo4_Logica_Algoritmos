// ************************************** Ejercicio Practico *******************/

// Problema: Supón que estás desarrollando una aplicación web que necesita organizar sus funcionalidades en diferentes módulos. 
// Crea un módulo para las funciones de autenticación y otro para las operaciones de la base de datos. 
// Usa import y export para integrarlos en la aplicación principal.

// Solución:

// En un archivo llamado 'auth.js'
export function login (usuario, contrasena){
    return usuario === 'admin' && contrasena === '1234';
}

// En un archivo llamado 'db.js'
export function obtenerDatos(){
    return ['Producto 1', 'Producto 2', 'Producto 3'];
}

// En un archivo llamado app.js
import { login } from './auth';
import { obtenerDatos } from './db';

if (login('admin', '1234')) {
    console.log('Login exitoso');
    console.log(obtenerDatos());
} else {
    console.log('Login fallido');
}