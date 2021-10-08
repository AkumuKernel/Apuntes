"use strict";

const usuarioAutenticado = new Promise( (resolve, reject) => {
  const auth = false;

  if(auth){
    resolve("Sirve"); // Se cumple
  }
  else{
    reject("No Sirve"); // No se cumple
  }
});

usuarioAutenticado.then(function(resultado){
    console.log(resultado);
  })
  .catch(function(error){
    console.log(error);
  });
// Hay 3 valores posibles

// Pending: No se acepta ni se rechaza se espera
// Fullfilled: Se cumplió
// Rejected: Se rechaza o no se cumple
