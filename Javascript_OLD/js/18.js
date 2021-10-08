"use strict";

function sumar(n1,n2) {
  return n1+n2;
}

const res = sumar(2, 3);

console.log(res);

let total = 0;

function addCar(precio) {
  return total+=precio;
}

total = agregarCarrito(200);

console.log(`Total a pagar es de: $${total}`);
