//Funciones

function sumar(){
   console.log("toy sumando");
}

sumar();

// Expresion de la funcion

const sum2 = function() {
  console.log("restar");
}

sum2();

//IFFE
(function() {
  console.log("caca");
})();

//Hoisting JS da 2 vueltas, registrando las funciones en la primera y la segunda los llamados
