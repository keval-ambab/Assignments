
<?php
$array = array(
    array(
        array(1,2),
        array(1,3),
        array(
          array(3, 4),
          array(3, 4),
           array(
          array(3, 4),
          array(3, 4),
        ),
        ),
    ),
    array(
        array(5, 6),
        array(7, 8),
    ),
);

// print_r($array);

function array_depth(array $array) {
$max_depth = 1;

foreach ($array as $value) {
if (is_array($value)) {
$depth = array_depth($value) + 1;

if ($depth > $max_depth) {
$max_depth = $depth;
}
}
}
return $max_depth;
}

print_r(array_depth($array));
?>








<?php
/*
$array = [
    [
    'name'=>"keval",
    'age'=>'18',
    'color'=>'blue',
    'address'=>[
        'street'=>'2nd street',
        'district'=>'borivali',
        'city'=>'Munbai',
        'state'=>[
            'name'=>'Maharashtra',
            'code'=>'MH'
                 ]
          ]
     ], 
    [
     'name'=>"akash",
     'age'=>'18',
     'color'=>'black',
     'address'=>[
         'street'=>'4th street',
         'district'=>'goregaon',
         'city'=>'Munbai',
         'state'=>[
             'name'=>'Maharashtra',
                'code'=>'MH'
                ]
          ]
      ],
      [
      'name'=>"lovelesh",
      'color'=>'pink',
      'address'=>[
          'district'=>'bandra',
          'city'=>'Munbai',
          'state'=>[
              'name'=>'Maharashtra',
              'code'=>'MH'
              ]
          ]
      ]
];
  


print_r($array);

function array_depth(array $array) {
$max_depth = 1;

foreach ($array as $value) {
if (is_array($value)) {
$depth = array_depth($value) + 1;

if ($depth > $max_depth) {
$max_depth = $depth;
}
}
}
return $max_depth;
}

print_r(array_depth($array)); */
?>