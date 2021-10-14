<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Member</title>
</head>
<body>

<div class="container col-md-4 my-4">
    <h3 class="d-flex justify-content-center">Add Member</h3>

    <form class="form-control" action="" method="post">
        @csrf
        <!-- <input type="text" name="id" placeholder="Add your id"/><br><br> -->
        <input type="hidden" name="id"/><br><br>

        <input type="text" class="form-control " name="name" placeholder="Add your Name"/><br><br>
       
        <button class="btn btn-danger mx-4" type="submit">Submit</button>
        <a href="{{ url('/showme') }}" class="btn btn-primary mx-4">Show Data</a>
    </form>
</div>
</body>
</html>