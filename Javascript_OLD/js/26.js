"use strict";

// POO

// Object literal
const producto = {
  nombre: "Tablet",
  precio: 500,
};

// Object constructor

function Producto(nombre, precio){
  this.nombre = nombre;
  this.precio = precio;
}

function Cliente(nombre, apellido){
  this.nombre = nombre;
  this.apellido = apellido;
}

const producto1 = new Producto("Monitor Curvo de 100 pulgadas", 1000);
const cliente1 = new Cliente("Marcelo", "Fuenzalida");


function formatearProducto(producto){
  return `El producto ${producto.nombre} tiene un precio de: ${producto.precio}`;
}

// Prototype: Crea funciones que se utilizan en un objeto especifico

Producto.prototype.formatearProducto = function(producto){
  return `El producto ${producto.nombre} tiene un precio de: ${producto.precio}`;
}
