// Objetos

const producto = {
  nombreProducto: "Monitor de 20 Pulgadas",
  precio: 300,
  disponible: true
}

const precioProducto = producto.precio;

// Destructuring

const {nombreProducto} = producto;

console.log(nombreProducto);
