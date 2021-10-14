




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>List | CURD</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">

    <style>
    .w-5{
        display:none;
    }
    th{
    /* color: white; */
    }
} 
</style>
</head>
<body>
    <div class="container">
    <h1 class="heading">Member Control</h1>
    <a href="{{ url('/add') }}" class="btn btn-danger">ADD MEMBER</a>

    <table class="table">
    <tr class='bg-primary text-light'>
        <th>ID</th>
        <th>NAME</th>
        <th>OPERATION</th>
    </tr>

    @php
    $id = 1;
    $currentPage =  $member->currentPage();
    $count = $member->perPage();
    @endphp
    @foreach($member as $emp)
    <tr>
    <td>{{$id  +  ($count * ($currentPage - 1))}}</td>
    <td>{{$emp['name']}}</td>
    <td><a href={{"delete/$emp->id"}}>delete</a>|
    <a href={{"update/$emp->id"}}>update</a></td>
    @php $id++; @endphp
    </tr>
    @endforeach


    </table>
</div>

<div class="paggination d-flex justify-content-center">
    {{$member->links()}}

{{--$member->links('pagination::bootstrap-4')--}}

</div>
</body>
</html>