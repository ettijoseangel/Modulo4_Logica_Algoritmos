//* ******** Ejercicio Práctico ********** */

// Problema: En un sistema de inventario de una tienda en línea, 
// necesitas crear una clase 'Producto' que almacene el nombre,
// precio y cantidad de un artículo. Además, debe incluir un método 'actualizarStock'
// que aumente o disminuya la cantidad de productos disponibles.

// Solución 

class Producto {
    constructor (nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    obtenerDetalles(){
        return `${this.nombre} - Precio: ${this.precio} - Stock: ${this.cantidad}`;
    }

    actualizarStock(cantidad){
        this.cantidad += cantidad;
        //this.cantidad = cantidad + cantidad;
    }
}

const producto1 = new Producto('Camiseta', 25, 100);
producto1.actualizarStock(-20);
console.log(producto1.obtenerDetalles()) // Camiseta - Precio: 25 - Stock: 80