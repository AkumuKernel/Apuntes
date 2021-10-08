"use strict";

async function obtenerEmpleados() {

    const archivo = "js/empleados.json";

    /*fetch(archivo)
      .then( resultado => {
        return resultado.json();
      })
      .then( datos => {
        console.log(datos);
        const {empleados} = datos;

        //console.log(empleados);

        empleados.forEach((empleado) => {
          console.log(empleado.nombre);
        });
      });*/

      const resultado = await fetch(archivo);
      const datos = await resultado.json();
      console.log(datos);
}

obtenerEmpleados();
