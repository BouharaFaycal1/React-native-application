<?php include 'config.php';


  


 $id = $_GET['action'];
	
	

	
	$result= $con->query('SELECT vote FROM video where id= "'.$id.'"');
	
	  $res['video']= [];

    while($cat = $result->fetch_assoc()){
        $res['video'][]= $cat;
    }
    
  
   $num = (int)$res['video'][0]['vote'];

    $nouvelval= $num+1;
    $add = $con->query("update  video set vote=$nouvelval where id=$id");
			
	if($add){
			echo  json_encode('vote Successfully'); // alert msg in react native
	}
		
	
?>