<?php include 'includes/header.php';

$nombreCliente = "Marcelo Francisco";

echo strlen($nombreCliente); // Permite conocer la extension de un string
var_dump($nombreCliente);

// Eliminar espacios en blanco

$texto = trim($nombreCliente);
echo strlen($texto);

// Convertir en mayus

echo strtoupper($nombreCliente);

// Convertir en minus

echo strtolower($nombreCliente);

$correo1 = "correo@correo.com";
$correo2 = "Correo@correo.com";

var_dump(strtolower($correo1)===strtolower($correo2)); //Ejemplo para lo que sirve tolower;

echo str_replace("Marcelo", "M", $nombreCliente); // Sirve para reemplazar variables con strings

// Revisar para ver si un string existe

echo strpos($nombreCliente, "Marcelo"); //Muestra la ubicación de un string

// Concatenar stirngs

$tipoCliente = "Premium";

echo "El cliente " . $nombreCliente . " es " . $tipoCliente; // Concatena strings

echo "\nel cliente {$nombreCliente} es {$tipoCliente}"; // Es una especie de template strings
include 'includes/footer.php';
