<?php
    include("config.php");

$name = $_GET['action'];
   
    
   
    $query = 'select * from video where ville = "'.$name.'"';
    $result = $con->query($query);

    $res['video']= [];

    while($cat = $result->fetch_assoc()){
        $res['video'][]= $cat;
    }
 

    echo json_encode($res);

  



  

   