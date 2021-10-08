"use strict"; //Correr Javascript en modo estricto
/* Variables var */

var producto = "Audifonos Gamer"; // Iniciamos la variable y asignamos un valor

var disponible; // Iniciamos la variable y no le asignamos el valor

/* Estas var pueden cambiar el tipo de datos, ejemplo, de string a boolean */

var producto1 = "Computadora",
    disponible1 = true,
    categorias = "Computadoras";

/* Esto sirve para iniciar multiples variables */

var nombre_producto = "Monitor HD"; //underscore_
var nombreProducto = "Monitor 4K" //camelcase;
var NombreProducto = "Monitor"; //PascalCase
var nombreproducto = "Monitor Ultra"; //lowercase

//console.log(producto); //Muestra los datos en consola
//alert(); Muestra una alerta en la pagina

/* Variables let y const */

let product = "Audifonos Gamer"; // Iniciamos la variable y asignamos un valor

let d1sponible; // Iniciamos la variable y no le asignamos el valor

/* Estas var pueden cambiar el tipo de datos, ejemplo, de string a boolean */

let product1 = "Computadora",
    d1sponible1 = true,
    category = "Computadoras";

/* Esto sirve para iniciar multiples variables */

let nombre_product = "Monitor HD"; //underscore_
let nombreProduct = "Monitor 4K" //camelcase;
let NombreProduct = "Monitor"; //PascalCase
let nombreproduct = "Monitor Ultra"; //lowercase

// En resumen let es como var, es la versión que se usa actualmente

// Const son valores fijos que no se modifican

const dispon1ble = 1;

// Ya despues de esto el valor no se puede cambiar

/* Strings */

const p1 = "Monitor de 20 pulgadas\""; // String
const p2 = String('Monitor de 20 pulgadas'); // String
const p3 = new String("Monitor de 40 pulgadas"); //Este es un objeto

console.log(typeof(p1));
//typeof() es una funcion que nos dice que tipo de variable estamos utilizando

/* Métodos para strings */

console.log(p2.length); // Muestra la extension de las letras que están escritas. Es una propiedad de los strings

//IndexOf
console.log(p1.indexOf('20')); // Sirve para encontrar un elemento en un string, devuelve un número de la posición
console.log(p1.includes('20')); //Devuelve un true cuando se encuentra un elemento en un string


/* Números */

const n1 = 100;
const n2 = 200;
const n3 = 200.20;

// Si está en color negro es string, si está en otro color que no sea de la escala de grises es un número

console.log(typeof(n1));

//Todos los números en javascript son de la variable "Number"

// Si ponemos "window" en la consola podemos ver todas la funciones que tiene js

/* Objeto Math */

console.log(window.Math.random());
console.log(Math.random());

// Ambas funciones son iguales

const pi = Math.PI; // Número pi
let redondeo = Math.round(2.5); // Redondea
redondeo = Math.ceil(2.5);  // Redondea hacia arriba
redondeo = Math.floor(2.5); // Trunca el número
let squareroot = Math.sqrt(144); // Raiz cuadrada
let abs = Math.abs(-200) //Valor absuluto
let min = Math.min(2 , 6 , 7 , 5, 0);
let max = Math.max(2 , 6 , 7 , 5, 0);


/* Orden de las operaciones */

let r1;

r1 = 20 + 30 * 2;

console.log(r1);

r1 = (20 + 30) * 2;

console.log(r1);

// Incrementos;

let puntaje = 10;
puntaje++; //depende de donde se ponga se sumará antes o despues
puntaje--;

puntaje += 20;

console.log(puntaje);


/* Concatenacion */
const nombre = "nombre";
const email = "correo@correo.com";

console.log(nombre + " " + email); // Forma antigua de hacerlo
console.log(nombre ," ", email); // Forma antigua de hacerlo
console.log(`Nombre cliente: ${nombre}\nEmail: ${email}`); //Template Strings


/* Booleans */

const boolean1 = true; //BOOLEAN
const boolean2 = false; //BOOLEAN
const boolean3 = "true";  //String
const boolean4 = new Boolean(true); //Objeto

/* Objetos */

const nombreProduct0 = "Monitor de 20 pulgadas";
const preci0 = 300;
const disponble = true;

const product0 = {
  nombreProducto: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
}

console.log(product0);

console.log(product0.precio);
console.log(product0["precio"]);

/* Modificar Objetos */
//Agregar nuevas propiedades
product0.imagen = "imagen.jpg";

console.log(product0);

// Eliminar porpiedades

delete producto.disponible;
console.log(product0);

/* Destructuring */

const precioProducto = product0.precio; // Forma antigua

const {precio} = producto; //Destructuring

// const {imagen, nombreProducto} = producto;

Object.freeze(product0); //Bloquea modificar el objeto
Object.seal(product0); // Bloquea el modificar el objeto pero si puedes modificar los elementos existentes

console.log(Object.isFrozen(product0));


/* Spread Operator */

const prod = {
  nombreProduct: "Monitor",
  precio: 100,
  disponible: true
}

const med = {
  peso: "1kg",
  medida: "1m"
}

const nuevoProduct = {...prod, ...med};

/* Arrays */

const num = [10, 20, 30, 40];

console.table(num);

const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
const meses1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.table(meses);
console.table(meses1);

const array = ["Hola", 10, true, "si", null, {nombre: "a", apellido: "e"}, [1,2,3]];

//Acceder a los valores de un Array

console.log(num[3]);

//Conocer la extension de un Array
console.log(meses.length);
meses.forEach(function(mes) {
  console.log(mes);
});

num[4] = 50; // Agrega un elemento al final de la tabla
num.push(60); // Agrega un elemento al final del array sin saber que posición tiene
num.unshift(-10,-20,-30) // Agrega un elemento al inicio del Array

num.pop(); // Elimina el último elemento del Array
num.shift(); // Elimina el primer del array
num.splice(2,1); //Elimina la cantidad de valores desde el índice que se selecciona

const newArray = [...meses, "Nuevo Mes"];
console.log(newArray);

const newArray1 = ["Nuevo Mes", ...meses];

const carrito = [
  {nombre: "Monitor 20 pulgadas", precio: 500},
  {nombre: "Television", precio: 700},
  {nombre: "Tableta", precio: 300},
  {nombre: "Audifonos", precio: 200},
  {nombre: "Teclado", precio: 50},
  {nombre: "Celular", precio: 500},
  {nombre: "Bocinas", precio: 300},
  {nombre: "Laptop", precio: 800}
];

//forEach

meses.forEach(function(mes) {
    if(mes === "Marzo"){
      console.log("Marzo si existe");
    }
});

//includes
const marzo = meses.includes("Marzo");
console.log(marzo);

// Some: ideal para arreglos de Objetos
// Includes: ideal para arreglos normales
let rest = carrito.some(function(producto) {
  return producto.nombre === "Celular Pro";
})
console.log(rest);

//Reduce

rest = carrito.reduce(function(total,producto){
  return total + producto.precio;
},0);

console.log(rest);

rest = carrito.filter(function(producto) {
  return producto.precio > 400;
});

console.log(rest);

/* Function */

function sumar(numero1 = 0, numero2 = 0) {
  console.log(numero1+numero2);
}

sumar(10+12);

//Expresion de la funciones
const sumar2 = function(n1 = 0, n2 = 0){
  console.log(n1+n2);
}

sumar2();

// iife es para que no se mezclen las variables y funciones de otros archivos

(function() {
      console.log("Esto es una funcion");
}());

const cliente = "Juan";

// En js primero se hace una etapa de creación dónde se crean las funciones y las Variables

const nu1 = 20;
const nu2 = "20";

console.log(parseInt(nu2)); // parseInt() es una funcion
console.log(nu1.toString()); // .toString() es un método

// Funciones que retornan valores

function sumar(n1 = 0, n2 = 0){
  return n1+n2;
}

let r = sumar(1 + 2);

console.log(r);

let total = 0;
function agregarCarrito(precio){
  return  total+= precio;
}

const reproductor ={
  reproducir: function(id){
    console.log(`Reproduciendo cancion con la id ${id}`);
  },
  pausar: function() {
    console.log("Pausando...");
  },
  crearPlaylist: function(nombre) {
    console.log(`Creando la PlayList ${id}`);
  }
}

reproductor.borrarCancion = function(id) {
  console.log(`Borrando la canción ${id}`);
}

reproductor.reproducir(365);
reproductor.pausar();
reproductor.borrarCancion(1);

const suma = (n1, n2) => {
  console.log(n1+n2);
}
let t = 0;
const suma1 = (n1) => t+=n1;

const aprendiendo = (tecnologia) => {
  console.log(`Aprendiendo ${tecnologia}`);
}

aprendiendo("javascript");


meses.forEach((mes) => {
  console.log(mes);
});

/* Estructura de control */

const point = 1000;

if(point == 1000){
  console.log("El puntaje es 1000");
}
else if (point === 990) {
  console.log("Te faltan 10 puntacos")
}
else{
  console.log("El puntaje no es 1000");
}
// El = es para asignar
// El == es para comparar
// El === es para comparar el tipo de variable y el dato
// El !== es para ver si la variable es igual pero el dato difente
// El != es para ver si la variable es diferente
// El > es para ver si es mayor
// El >= es para ver si el dato es mayor o igual
// El < es para ver si es menor
// El <= es para ver el menor que

/* Switch Case */

const metodoPago = "Tarjeta";

switch (metodoPago) {
  case "Tarjeta":
    console.log("Pago con tarjeta");
    break;
  case "Efectivo":
    console.log("Pago con Efectivo");
    break;
  case "Cheque":
    console.log("Pago con Cheque");
  default:
    console.log("Metodo de Pago Incorrecto");

}

/* Iteradores */
let arreglo = [1,2,3,4,5,6,7,8,9]
for (let i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);
}
// For Loop
let alfa = 0;
while (alfa < arreglo.length) { // Evalua primero la condicion antes de ejecutar
  console.log(`Valor: ${arreglo[alfa]}`);
  alfa++;
}
// While Loop
do {
  console.log(`Leiste ${arreglo[alfa-1]}`);
  alfa++;
} while (alfa<arreglo.length); // Primero ejecuta, luego evulua la condicion
// Do While Loop

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i]);
}

// ForEach  Se puede ejecutar solo en Arrays se usa para imprimir solamente

let array1 = carrito.forEach((producto) => {
    return producto;
});

//map Se puede ejecutar solo en Arrays es capaz retornar los datos del array sirve para crear nuevos array

let array2 = carrito.map((producto) => {
  return producto;
});

console.log(array1);
console.log(array2);

//This palabra reservada que si accedemos al mismo objetos, no sirve con arrow functions

const reservacion = {
  nombre: "Marcelo",
  apellido: "Fuenzalida",
  total: 5000,
  pagado: false,
  informacion: function() {
    console.log(`El cliente ${this.nombre} ${this.apellido}, reservó y debe ${this.total}`);
  }
};

reservacion.informacion();

/* Programacion orientada a objetos */

//Creacion de objeto con constructor
function Producto(nombre, precio){
  this.nombre = nombre;
  this.precio = precio;
}

let producto2 = new Producto('Monitor curvo de 40"', 800);


console.log(producto2);


/* Prototype */

// Funciones que se utilizan en una funcion en especifico
Producto.prototype.formatearProducto = function() {
  return `${producto.nombre} tiene un precio de ${producto.precio}`;
}

console.log(producto2.formatearProducto());
/* POO */

// Classes

class Cliente {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  formatearCliente(){
   return `Hola ${this.nombre} ${this.apellido}`;
  }
}

let cliente1 = new Cliente("Marcelo", "Fuenzalida");

console.log(cliente1.formatearCliente());

//Herencia

class Reservacion extends Cliente{
  constructor(nombre, apellido, precio){
    super(nombre, apellido);
    this.precio = precio;
  }
  formatearReserva(){
    return `${super.formatearCliente()} su reserva es de $${this.precio}`;
  }
}

let reserva = new Reservacion("Marcelo", "Fuenzalida", 500);

console.log(reserva.formatearReserva());

/* TryCatch */

const number1= 20
const number3= 30

console.log(number1);

try {
  console.log(number2);
} catch (error) {
  console.log(error);
}

console.log(number3);

// Se debe utilizar en lugares criticos, no en todo el codigo, debido a que así será a prueba de errores

/* Promises */

const usuarioAutenticado = new Promise((resolve, reject) => {
  const auth = true;

  if(auth){
    resolve("Autenticado"); //Se ejecuta si el promise se cumple
  }
  else{
    reject("Error"); // Se ejectura si el promise NO se cumple
  }
});

const usuarioAutenticado2 = new Promise(function() {
  const auth = true;
});

console.log(usuarioAutenticado);
console.log(usuarioAutenticado2);

//  En los promises existen 3 valores
// Pending: Que está pendiente, no está cumplido ni rechazado
// Fullfilled: Ya se cumplió el Promise
// Rejected: Cuando no se pudo cumplir el promise

usuarioAutenticado
        .then(function(resultado) { //Se usa cuando el promise se cumple
          console.log(resultado);
        })
        .catch(function(error) { //Se usa cuando el promise no se cumple
          console.log(error);
        })

console.log(usuarioAutenticado);

const boton = document.querySelector("#button"); //document selecciona el documento html

console.log("El boton es " + boton);

boton.addEventListener('click', function() {
  Notification.requestPermission()
    .then(resultado => {
      console.log(`El resultado es ${resultado}`)
    })
}); //Selecciona que evento se hace, para hacer una funcion

if(Notification.permission == "granted"){
  new Notification("Esta es la notificacion", {
    // icon: "Direccion del icono",
    body: "Esta wea es la notificacion"
  })
}

/* Async / Await */

function descargarNuevosClientes() {
  return new Promise(resolve => {
    console.log("Descargando, por favor espere...");

    setTimeout(function () {
      resolve("Todo fue descargado");
    }, 5000);

  });
}
function descargarNuevosPedidos() {
  return new Promise(resolve => {
    console.log("Descargando, por favor espere...");

    setTimeout(function () {
      resolve("Todo fue descargado");
    }, 3000);

  });
}

setTimeout( function() {
  console.log("Set timeout...");
}, 2000); // Es para ralentizar el codigo

//setInterval hace lo mismo, pero lo repite cada cierto tiempo dado

async function app() { //Definimos una funcion asincrona
  try {
    const resultado = await descargarNuevosClientes();
    console.log(resultado);
  } catch (e) {
    console.log(e);
  }
}
app();

async function app2() {
  try {
    const resultado = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);
  } catch (e) {
    console.log(e);
  }
}

app2();

}
