<?php include 'includes/header.php';

$clientes = [];
$clientes2 = array();
$clientes3 = array("Pedro", "Juan", "Karen");
$cliente = [
  "nombre" => "Marcelo",
  "saldo" => 200
];

// Empty - revisa si un array está vacio, marca true si está vacio
var_dump(empty($clientes));

// Isset - Revisa si una propiedad o un array está definidica o creada respectivamente
// Otro uso que tiene es poder revisar si existen propiedades dentro de arrays asociativos

echo "<br>";
var_dump( isset($clientes4));
var_dump( isset($cliente["nombre"]));
include 'includes/footer.php';
