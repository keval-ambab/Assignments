<?php
require_once "Object.php";
?>
<html>
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

  <style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

  input[type=number] {
    -moz-appearance:textfield; /* Firefox */
  }
    </style>
  </head>
    <body>

          <div class="container">

            <h1>PHP CRUD</h1>
            <p>Perform all CRUD operation at one place.</p>

            
            <!-- form -->
            <form class="form-inline m-2" action="create.php" method="POST">
              <label for="name">Name:</label>
              <input type="text" class="form-control m-2" id="name" name="name" required>
              <label for="number">Salary:</label>
              <input type="number" class="form-control m-2" id="salary" name="salary" required>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div class="container">
            <?php include "read.php"; ?>
          </div>
    </body>
</html>