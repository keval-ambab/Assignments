<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <meta name="viewport" content="width=`device-width`, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        if(isset($_POST['name'])) {
            $name = $_POST['name'];
            echo "Hello $name";
        }
    ?>
    <div id="msg">Lorem</div>

    <script>
        $('#msg').click(function(){
            $.ajax({
                url: "test.php",
                method:'POST',
                data: {'name':'keval'},
                success: function(result){
                    $("#msg").html(result);
                }
            });
        });
    </script>
</body>
</html>