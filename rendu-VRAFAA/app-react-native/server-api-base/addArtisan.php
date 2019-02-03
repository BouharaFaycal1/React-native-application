<?php include 'config.php';


  

	//$mysqli = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
	$json = file_get_contents('php://input');
 
	 // decoding the received JSON and store into $obj variable.
	 $obj = json_decode($json,true);
	 

	 // name store into $name.
	$name = $obj['name'];
	 
	// same with $email.
	$video = $obj['video'];
	 
	// same with $password.
	$city = $obj['city'];
	
	$idUser= $obj['idUser'];
	
	if($obj['video']!="")
	{
	
	$result= $con->query("SELECT * FROM video where url='$video'");
	
	
		if($result->num_rows>0){
			echo json_encode('name video already exist');  // alert msg in react native		 		
		}
		else
		{		
		   $add = $con->query("insert into video (titre,url,ville,vote,id_user) values('$name','$video','$city',0,'$idUser')");
			
			if($add){
				echo  json_encode('Artisan Registered Successfully'); // alert msg in react native
			}
			else{
			   echo json_encode('check internet connection'); // our query fail 		
			}
				
		}
	}
	
	else{
	  echo json_encode('try again');
	}
	
?>