"use strict"; //Ejecutar JS en modo estricto
// Objetos

const producto = {
  nombreProducto: "Monitor de 20 Pulgadas",
  precio: 300,
  disponible: true
}

const medidas = {
  peso: "1kg",
  medida: "1m"
}

const nuevoProducto = { ...producto, ...medidas };

console.log(nuevoProducto);
