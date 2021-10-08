"use strict";
//Arrays

const numeros = [10,20,30,40,20];

//console.table(numeros);

const meses = new Array("Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre");

//console.table(meses);

const arreglo = [1, true, null, "Objetos"];

// Acceder a los valores de un Arrays

console.log(numeros[6]);

// .length: Conocer la extesion
// .forEach: para contar

meses.forEach((meses) => {
  console.log(meses);
});

// .push(): Para agregar
// .unshift(var): para agregar al inicio del array
// .pop(): elimina el último elemento del array
// .shift(): elimina del inicio del array
// .splice(position, cantValores): Elimina los elementos del Array

// Rest Operator o Spread Operator

const newArray = [...meses, "Diciembre"];
const nuevoArray = ["Enero", ...meses];

const carrito = [
  {nombre: "Wea", precio: 50},
  {nombre: "Woi", precio: 10}
];


//Includes

const resultado = carrito.Includes("Marzo");
console.log(resultado);

const resultado2 = carrito.some(function(producto){
  return producto.nombre === "Woi";
});

// Reduce

resultado = carrito.reduce(function(total, producto){
  return total + producto;
}, 0);

// filter: detectad dependiendo de funcion (a < 400)
