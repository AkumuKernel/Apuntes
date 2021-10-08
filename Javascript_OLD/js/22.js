"use strict";

// Switch/Case

const metodoPago = "bitcoin";

switch (metodoPago) {
  case "tarjeta":
    console.log("Proceso de pago de tarjeta");
    break;

  case "bitcoin":
    console.log("Proceso de pago con bitcoin");
    break;

  default:
    console.log("No existe ese proceso");
    break;
}
