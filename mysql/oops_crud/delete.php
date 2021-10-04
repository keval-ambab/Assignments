<?php

// require_once "connection.php";
require_once "Object.php";
$id = $_GET['id'];


try {
    $result = $obj -> delete($id);
}catch (Exception $e) {
    $e -> getMessage();
}

if($result) {
    header("Location: index.php");
}



?>