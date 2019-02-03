<?php

/*
* APi qui renvoie le json des utilsateurs ainsi que les artisans gagnants de chaque ville 
*
*/
    header('charset=utf-8');
    include("config.php");
   
    $query = 'select max(video.vote) winner, video.ville ,users.id ,users.name, video.titre from users inner join video on users.id = video.id_user group by ville order by video.vote desc';
    $result = $con->query($query);
    $res['video']= [];
    while($cat = $result->fetch_assoc()){
        $res['video'][]= $cat;
    }
 
    echo json_encode($res);

	?>