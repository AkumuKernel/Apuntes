"use strict";

// Classes

class Producto {

  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  formatearProducto(){
    return `El producto ${producto.nombre} tiene un precio de: ${producto.precio}`;
  }
};

const producto1 = new Producto("Monitor Curvo de 100 pulgadas", 1000);

// Herencia

class Libro extends Producto{
  constructor(nombre, precio, isbn){
      super(nombre,precio);
      this.isbn = isbn;
  }
  formatearProducto(){
    return `${super.formatearProducto()} y su isbn es de ${isbn}`;
  }
}

const libro = new Libro("Wea", 120, "74651348135");
