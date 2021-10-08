"use strict";

// This

//Para arrow hay que poner window.variable

const reservación = {
  nombre: "Marcelo",
  apellido: "Fuenzalida",
  total: 10000,
  pagado: false,
  informacion: function(){
    console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de $${this.total}`);
  }
};

console.log(reservación.informacion());
