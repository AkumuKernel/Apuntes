"use strict"; //Ejecutar JS en modo estricto
// Objetos

const producto = {
  nombreProducto: "Monitor de 20 Pulgadas",
  precio: 300,
  disponible: true
}
producto.imagen = 'imagen.jpg';

Object.freeze(producto); // No permite agregar ni eliminar propiedades ni cambiar valores
Object.seal(producto); // No permite agregar ni eliminar pero si permite cambiar valores

console.log(Object.isFrozen(producto));
