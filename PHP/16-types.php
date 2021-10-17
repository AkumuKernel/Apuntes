<?php
declare(strict_types=1);
include 'includes/header.php';

function usuarioAutenticado() : string // Nos dice que tipo de variable debe retornar
{
  return "El user está autenticado";
}
function userAlpha(bool $x) : ?string // Nos dice que variable debe retornar idealmente
{
  if($x){
    return "Valido";
  }
  else{
    return null;
  }
}
function userBeta(bool $x) : string|int{ // Nos dice que variable debe retornar, con un o
  if($x){
    return "Valido";
  }
  else{
    return 0;
  }
}
$user = userBeta(false);

echo $user;

include 'includes/footer.php';
