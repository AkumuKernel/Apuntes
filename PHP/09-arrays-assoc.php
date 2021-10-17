<?php include 'includes/header.php';

$cliente = [
  "nombre" => "Marcelo",
  "saldo" => 200,
  "informacion" => [
    "tipo" => "premium",
    "disponible" => 100
  ]
];

echo "<pre>";
var_dump($cliente);
echo "</pre>";

echo $cliente["nombre"];
echo $cliente["saldo"];
echo $cliente["informacion"]["tipo"];
include 'includes/footer.php';
