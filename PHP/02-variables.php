<?php include 'includes/header.php';

// Variables

$nombre = "Marcelo";
$_nombre = "Marcelo";
$nombre_ = "Marcelo";


// Para variables constantes que no pueden cambiar

define('constante', 'Este es el valor de la constante');
const constante2= "Hola2";

// Prohibido
// $99usuario = 99;

echo $nombre; // Imprimir variables
var_dump($_nombre);

echo constante; // Imprimir Constantes
echo constante2;
include 'includes/footer.php';
