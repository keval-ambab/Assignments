<?php

// require_once "connection.php";
require_once "Object.php";
$id = $_POST['id'];
$pageNo = $_POST['pageNo'];
$name = $_POST['name'];
$salary = $_POST['salary'];



// echo $id;
try {
    $result = $obj -> update($id,$name,$salary);
}catch (Exception $e) {
    $e -> getMessage();
}

if($result) {
    header("Location: index.php?pageNo=$pageNo");
}

?>