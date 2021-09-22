
<?php

$fname = $lname =$email =$password = "";
$fnameErr = $lnameErr =$emailErr =$passwordErr = "";

if($_SERVER["REQUEST_METHOD"]=="POST"){

    if(empty($_POST["fname"])){
        $fnameErr = "Name is required";
    }else {
        if(!preg_match("/^[a-zA-Z-' ]*$/",$fname)){
            $fnameErr = "Only letter are allowed" ;  
        }else{
            $fname = vali_data($_POST["fname"]);
        }   
    }


    if(empty($_POST["lname"])){
        $lnameErr = "Name is required";
    }else {
        if(!preg_match("/^[a-zA-Z-' ]*$/",$fname)){
            $fnameErr = "Only letter are allowed" ;  
        }else{
            $fname = vali_data($_POST["fname"]);
        }   
    }

    if(empty($_POST["email"])){
        $emailErr = "Email is required";
    }else {
        if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
            $emailErr = "Invalid Email Format";
        }else{
            $email = vali_data($_POST["email"]);
        }
    }

    if(empty($_POST["password"])){
        $passwordErr = "Password is required";
    }else {
        if($_POST["password"] != 123456){
            $passwordErr = "Invalid Password";
        }else{
            $password = vali_data($_POST["password"]);

        }
    } 
    // $password = vali_data($_POST["password"]);
}

function vali_data($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

?>

<html lang="en">
<head>
  
    <title>Welcome</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">

    <h3>PHP FORM VALIDATION</h3>
        <!-- <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"> -->
        <form method="POST" action="index.php">
    <br>
        First Name: <input type="text" name="fname" id="fname" value="<?php echo $name;?>"> 
        <span class="error"><?php echo $fnameErr;?></span>
        <br>        <br>

        Last Name: <input type="text" name="lname" id="lname">
        <span class="error"><?php echo $lnameErr;?></span>
        <br>        <br>

        Email: <input type="email" name="email" id="email">
        <span class="error"><?php echo $emailErr;?></span>
        <br>        <br>

        Password: <input type="password" name="password" id="password">
        <span class="error"> <?php echo $passwordErr;?> </span>
        <br><br>
            
        <input type="submit" value="submit" id="submit">
    </form>
  </div>
</body> 
</html>


<br>    <br><br><br><br><br>
<?php
echo "<div class='container'>";
echo "<h2>Your Input:</h2>";
echo "First Name:" . $fname;
echo "<br>";
echo "Last Name:" . $lname;
echo "<br>";
echo "Email:" . $email;
echo "<br>";
echo "Password:" . $password;
echo "<br>";
echo "</div>";

?>