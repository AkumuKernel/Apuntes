<?php include 'includes/header.php';

$autenticado = true;
$admin = false;
if($autenticado ){
  echo "usuario correctamente autenticado";
} else{
  echo "usuario no autenticado";
}

// If anidados
$cliente = [
  "nombre" => "Juan",
  "saldo" => 200,
  "informacion" => [
    "tipo" => "premium"
  ]
];

if(!empty($cliente)){
  echo "El arreglo está no vacio";
  if($cliente["saldo"] > 0){
    echo "el saldo de cliente exite";
  }
  else{
    echo "el saldo del cliente no exite";
  }
}
else{
  echo "El arreglo está vacio";
}

// Else if

if ($cliente["saldo"] > 0) {
  echo "el cliente tiene saldo";
}
else if ($cliente["informacion"]["tipo"] === "premium"){
  echo "el cliente es premium";
}
else{
  echo "el cliente no tiene saldo";
}
// Otra forma de escribir
if ($cliente["saldo"] > 0):
  echo "el cliente tiene saldo";

elseif ($cliente["informacion"]["tipo"] === "premium"):
  echo "el cliente es premium";

else:
  echo "el cliente no tiene saldo";
endif;

// Switch

$tecnologia = "php";

switch ($tecnologia) {
  case 'php':
    echo "Un excelente lenguaje";
    break;

  case 'Javascript':
    echo "Un genial lenguaje de la web";
    break;

  default:
    echo "Desconozco este lenguaje";
    break;
}
include 'includes/footer.php';
