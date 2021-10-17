<?php include 'includes/header.php';

// While se ejecuta hasta que el inicializador es falso

$i = 0; // inicializador

while($i < 10){ //Cuando no se cumple la condicion no ejecuta el codigo

  echo $i . "<br>";

  $i++; // Incremento
}

echo "<br>";
$i = 0;

do { // Ejecuta el código y luego revisa la condicion
  echo $i . "<br>";
  $i++;
} while ($i < 10);


// For loop

echo "<br>";

for ($i=0; $i < 100 ; $i++) { // Primero se define la variable para la condicion, luego se pone la condicion a evaluar y luego aumenta o decrementa
    if($i%3 === 0 && $i%5 === 0){
      echo "{$i} - Fizz Buzz <br>";
    }
    else if( $i%3 === 0){
      echo " {$i} - Fizz <br>";
    }
    else if ( $i%5 === 0){
      echo " {$i} - Buzz <br>";
    }

}

// forEach loop
$clientes = ["Pedro", "Juan", "Karen"];

foreach ($clientes as $cliente) {
  echo " Cliente - {$cliente} <br>";
}

echo count($clientes); // Cuenta la cantidad de elementos de un array
echo sizeof($clientes); // Mide que tan grande es un array

// Alternativa de While

$i = 0;

while($i < 10): //Se ponen 2 puntos para decir que aqui inicia el while

  echo $i . "<br>";

  $i++; // Incremento
endwhile; // Se utiliza para finalizar el while

for ($i=0; $i < 100 ; $i++):
    if($i%3 === 0 && $i%5 === 0){
      echo "{$i} - Fizz Buzz <br>";
    }
    else if( $i%3 === 0){
      echo " {$i} - Fizz <br>";
    }
    else if ( $i%5 === 0){
      echo " {$i} - Buzz <br>";
    }

endfor;

foreach ($clientes as $cliente):
  echo " Cliente - {$cliente} <br>";
endforeach;

$cliente = [
  "nombre" => "Juan",
  "saldo" => 200,
  "tipo" => "premium"
];

foreach ($cliente as $key => $valor):
  echo " {$valor} <br>";
endforeach;

include 'includes/footer.php';
