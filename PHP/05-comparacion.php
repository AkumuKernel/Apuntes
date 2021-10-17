<?php include 'includes/header.php';

$num1 = 20;
$num2 = 30;
$num3 = 30;
$num4= "30";

var_dump($num1 > $num2); // Es mayor a
echo "<br/>";
var_dump($num1 < $num2); // Es menor a
echo "<br/>";
var_dump($num1 >= $num2); // Es mayor o igual a
echo "<br/>";
var_dump($num1 <= $num2); // Es menor o igual a
echo "<br/>";
var_dump($num3 == $num2); // Es igual a
echo "<br/>";
var_dump($num3 == $num4); // Revisa solo el valor
echo "<br/>";
var_dump($num3 === $num4); //Revisa el valor y tipo de dato
echo "<br/>";
var_dump($num2 <=> $num1); // Si el número de la izquierda es menor = -1, si es igual = 0, si el de la derecha es menor = 1;

include 'includes/footer.php';
