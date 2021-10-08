// Objetos

const producto = {
  nombreProducto: "Monitor de 20 Pulgadas",
  precio: 300,
  disponible: true
}


console.log(producto.nombreProducto);
console.log(producto["precio"]);

//Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';

//Quitar propiedades
delete producto.disponible;


console.log(producto.imagen);
