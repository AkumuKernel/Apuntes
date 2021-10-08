async function obtenerEmpleados(){

  // fetch('/js/empleados.json')
  //   .then(resultado => return resultado.json();)
  //   .then((datos) => {
  //     const {empleados} = datos;
  //
  //       empleados.forEach((empleado) => {
  //         console.log(empleado);
  //
  //         document.querySelector(".contenido").textContent += `${empleado.nombre}\n`;
  //       });
  //
  //   })

    const resultado = await fetch('/js/empleados.json');
    const datos = await resutado.json();
    console.log(datos);
}

obtenerEmpleados();
