<?php

// require_once "connection.php";
require_once "Object.php";

$name = $_POST['name'];
$salary = $_POST['salary'];

try {
    $result = $obj -> create($name, $salary);
}catch (Exception $e) {
    $e -> getMessage();
}

if($result) {
    header("Location: index.php");
}



?>