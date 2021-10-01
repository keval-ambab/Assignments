<?php 
$arr = [1,2,3,4,5,6,7,8];
$arr1 = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43","kev"=>"23");
$arr2 = array (
    array("Volvo",22,18),
    array("BMW",15,13),
    array("Saab",5,2),
    array("Land Rover",17,15)
  );

//for loop - index array
$temp = 0;
for($i = 0; $i <= isset($arr[$i]); $i++) {
$temp = $arr[$i];
}
echo "the output is: ".$i;


// ussing foreach - association array
$temp1 = 0;
foreach($arr1 as $j){
    $temp1 += 1;
}

echo "\nthe output is: ".$temp1;

//using while loop - multidim array
$k=0;$temp2=0;
while($k <= isset($arr2[$k])){
    $temp2 = $arr2[$k];
    $k++;
}
echo "\nthe output is: ".$k;

    ?>
