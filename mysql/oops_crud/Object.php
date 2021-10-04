<?php

require_once "connection.php";

try {
    $obj = new Logic();
}
catch (Exception $e) {
    $e -> getMessage();
}

// $obj -> dbConnect();
