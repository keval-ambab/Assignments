<table class="table" id="table">
  <thead>
    <th>#</th>
    <th>Name</th>
    <th>Salary</th>
    <th>Action</th>
  </thead>

  <tbody>

<?php
    require_once "Object.php";
    $pageNo  = 1;
    if(isset($_GET['pageNo'])) {
        $pageNo = $_GET['pageNo'];
    }
    $limit = 3;
    $offset = ($pageNo - 1) * $limit;

    $data = "";
    try {
        $results = $obj -> read($offset, $limit);
    }catch (Exception $e) {
        $e -> getMessage();
    }

    $id = 1 + $offset;
    foreach($results as $result) {
        if ($result["id"] == $_GET["id"]){

                 $data .=  '<form class="form-inline-m-2"  action="update.php" method="POST">';
                $data .=  '<td><input type="text" class="form-control m-2" id="name" name="name" value="'.$id.'" readonly></td>';

                $data .=  '<td><input type="text" class="form-control m-2" id="name" name="name" value="'.$result['name'].'"></td>';
        
                $data .=  '<td><input type="text" class="form-control m-2" id="salary" name="salary" value="'.$result['salary'].'"</td>';
        
                $data .=  '<td><button type="submit" class="btn btn-primary">Save</button></td>';
        
                $data .=  '<input type="hidden" name="id" value="'.$result['id'].'">';
                $data .=  '<input type="hidden" name="pageNo" value="'.$pageNo.'">';
        
                $data .=  '</form>';
            }
else{

        $data .= "<tr>";

        $data .= '<td>'.$id.'</td>
                <td>'.$result["name"].'</td>
                <td>'.$result["salary"].'</td>
                <td>
                <a class = "btn btn-primary" href="index.php?id='.$result['id'].'&pageNo='.$pageNo.'" role ="button">Update</a> |
                <a class = "btn btn-danger" href="delete.php?id='.$result['id']. '" role ="button">Delete</a>
                </td>';
        $data .= "</tr>";
    }
    $id++;
}
    $data .= "</tbody>
                </table>";

echo $data;



?>
<?php
 require_once "pagination.php"; 
 ?>

<script>
    function pageLoad(pageNo) {
        $.ajax({
            url: 'read.php',
            method: 'GET',
            data: {pageNo: pageNo},
            success: function(result) {
                $('#pagination').html("")
                $('#table').html(result)
            }
        })
    }
</script>




  