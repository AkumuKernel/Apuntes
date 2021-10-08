"use strict";

const boton = document.querySelector("#button");

boton.addEventListener("click", function(){
  Notification.requestPermission()
    .then(resultado => console.log(`Ci`));
});

if(Notification.permission == "granted"){
  new Notification("Esta Notificación",{
    body: "Asterico wea asterisco",
  })
};
