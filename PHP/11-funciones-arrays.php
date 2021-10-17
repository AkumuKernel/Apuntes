<?php include 'includes/header.php';

// in_array buscar elementos en un array

$carrito = ["Tablet", "Television", "Computadora"];

var_dump( in_array("Tablet", $carrito));

// Ordenar elementos de un array

$num = [1 , 4, 2, 3, 5];
sort($num); // De menor a mayor
rsort($num); // De mayor a menor

echo "<pre>";
var_dump($num);
echo "</pre>";

// Ordenar array asociativo
$cliente = array(
  "saldo" => 200,
  "tipo" => "Premium",
  "nombre" => "Marcelo"
);

asort($cliente); // Ordena arrays asociativos, ordena por los valores, no por las llaves
asort($cliente); // Ordena arrays asociativos, ordena por valores a la inversa.
ksort($cliente); // Ordena arrays asociativos por las llaves de A a Z
krsort($cliente); // Ordena arrays asociativos por las llaves pero al reves Z a A

echo "<pre>";
var_dump($cliente);
echo "</pre>";

include 'includes/footer.php';
