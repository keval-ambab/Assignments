<ul id="pagination" class="pagination">

<?php

require_once 'Object.php';

$limit = 3;

try{
    $pages = $obj -> getPages($limit);
}catch(Exception $e){
    echo $e;
}

    for($i = 1;$i <= $pages; $i++){
        if($i == $pageNo){
        $class = "active";
        }else{
        $class = "";
        }
      echo "<li class='page-item {$class}'><button class='page-link' onclick='pageLoad({$i})'>{$i}</button></li>";
    } //href = index.php?page_id= $i
    echo '</ul>';
    ?>
</div>

<!-- 
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
</script> -->
<!-- <button class=''>{$i}</button> -->