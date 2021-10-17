<?php include 'includes/header.php';

$carrito = []; // Forma de definir un array
$carrito1 = array(); // Otra forma de definir un array

$carrito2 = ["Tablet", "Television", "Computadora"]; // Este estilo se usa más en databell

echo "<pre>"; // Para ver de mejor forma un array
var_dump($carrito2);
echo "</pre>";

// Para acceder a un elemento en especifico del array
var_dump($carrito2[1]);

// Agregar elementos al array

$carrito2[3] = "Nuevo Producto...";

// Agrega un elemento al final
array_push($carrito2, "Audifonos");

// Añadir al inicio
array_unshift($carrito2, "Smartwatch");

echo "<pre>";
var_dump($carrito2);
echo "</pre>";

$clientes = array("Cliente 1", "Cliente 2", "Cliente 3"); // Este estilo se utiliza más en wordpress

echo "<pre>";
var_dump($clientes);
echo "</pre>";


include 'includes/footer.php';
