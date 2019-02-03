<?php
    $server_name = "localhost";
    $user_name = "id8336828_root";
    $password = "rootroot";
    $db = "id8336828_jeux";

    $con = mysqli_connect($server_name, $user_name, $password, $db);

    if( !$con ){
        die("Connection Error");
    }
?>﻿