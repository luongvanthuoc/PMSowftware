<?php
 include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');
  $obj = json_decode($json,true);

 $user = $obj["user"];
  $pass = $obj["pass"];

  $Sql_Query = "select count(*) from userdb where user='".$user."' and pass='".$pass."'" ;

 
 if(mysqli_query($con,$Sql_Query)){
 $MSG = 'Successfully' ;
 $json = json_encode($MSG);
 echo $json ; 
 }
 else{
 
 echo 'Wrong';
 
 }
 mysqli_close($con);
 
?>