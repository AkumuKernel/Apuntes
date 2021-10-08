"use strict";

/* Estructuras de Control */

const puntaje = 1000;

// === Revisa que tengan el mismo tipo
// !== Revisa que tengan el mismo tipo y sea diferente
// == >= <= > <

if(puntaje == 1000){
  console.log(`Sí el puntaje es 1000`);
}

else{
    console.log(`El puntaje en realidad es ${puntaje}`);
}

const rol = "Admin";

if(rol === "Admin"){
  console.log("Acceso a todo el sistema");
}
else if(rol === "Editor"){
  console.log("Acceso limitado");
}
else{
  console.log("No hay acceso");
}
