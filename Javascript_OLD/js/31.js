"use strict";

// Async / await

function descargarNuevosClientes() {
  return new Promise(resolve => {
    console.log("Descargando weas...");

    setTimeout( () => {
      resolve("Ready");
    }, 5000);

  });
}


function descargarNuevosPedidos() {
  return new Promise(resolve => {
    console.log("Descargando pedidos...");

    setTimeout( () => {
      resolve("Ready");
    }, 3000);

  });
}
/*setInterval( function() {
  console.log("e");
},1000);*/

async function app() {
  try {
    /*const clientes = await descargarNuevosClientes();
    const pedidos = await descargarNuevosPedidos();
    console.log(resultado);*/

    const resultado = await Promise.all([descargarNuevosPedidos(), descargarNuevosClientes()]);
    console.log(resultado[0]);
    console.log(resultado[1]);

  } catch (e) {
    console.log(e);
  }
}

app();
