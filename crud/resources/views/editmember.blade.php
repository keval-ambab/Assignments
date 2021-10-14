

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">

    <title>Update</title>
</head>
<body>
    <div class="container col-md-4 my-4">
    <h3 class="d-flex justify-content-center">Update Member</h3>

        <form class = "form-control" action="/update" method="post">
            @csrf
            <!-- <input type="text" name="id" placeholder="Add your id"/><br><br> -->
            <input type="hidden" name="id" value="{{$data['id']}}"/><br><br>

            <input class = "form-control" type="text" name="name" value="{{$data['name']}}"/><br><br>

            <button class="btn btn-primary" type="submit">Update</button>

            <!-- <a href="{{ url('/showme') }}" class="btn btn-xs btn-info pull-right">Show Data</a> -->

        </form>
    </div>
</body>
</html>