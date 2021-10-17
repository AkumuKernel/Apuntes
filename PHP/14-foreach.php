<?php include 'includes/header.php';

$productos = [
  [
    "nombre" => "tablet",
    "precio" => 200,
    "disponible" => true
  ],
  [
    "nombre" => "tv",
    "precio" => 300,
    "disponible" => true
  ],
  [
    "nombre" => "monitor",
    "precio" => 400,
    "disponible" => false
  ]
];

foreach ($productos as $producto) { ?>
  <li>
  <p> Producto: <?php echo $producto["nombre"] ?></p>
  <p> Precio: <?php echo "$".$producto["precio"] ?></p>
  <p> <?php echo ($producto["disponible"] ? "Disponible" : "No disponible") ?></p> <!-- Ternario -->
  <?php if($producto["disponible"]){ ?>
    <p> disponible </p>
  <?php } else { ?>
    <p> no disponible</p>
  <?php } ?>
  </li>
<?php
}

include 'includes/footer.php';
