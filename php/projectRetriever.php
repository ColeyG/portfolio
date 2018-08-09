<?php

ini_set('display_errors',1);
error_reporting(E_ALL);

include('connect.php');

$projS="SELECT * FROM tbl_projects";
$projQ=mysqli_query($link,$projS);
$data="{";

//print_r($projQ);

$iter=0;
while($row = mysqli_fetch_array($projQ)){
    
    $data.="\"".$iter."\":";
    $data.='{';
    $data.="\"title\":\"".$row['proj_title']."\",";
    $data.="\"slug\":\"".$row['proj_slug']."\",";
    $data.="\"image\":\"".$row['proj_image']."\",";
    $data.="\"link\":\"".$row['proj_link']."\",";
    $data.="\"desc\":\"".$row['proj_longDesc']."\"";

    $data=rtrim($data,',');
    
    
    $data.='},';
    $iter++;
}

$data.="\"entries\":".$iter;

$data.="}";

echo $data;

mysqli_close($link);

?>