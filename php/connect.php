<?php
    $user = 'root';
    $password = 'root';
    $db = 'db_portfolio_2';
    $host = 'localhost';
    $port = 3306;
    
    $link = mysqli_init();
    $success = mysqli_real_connect(
       $link, 
       $host, 
       $user, 
       $password, 
       $db,
       $port
    );
?>