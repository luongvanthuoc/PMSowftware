<?php
 include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');
  $obj = json_decode($json,true);
 $stt= $obj["stt"];
  $noidung = $obj["noidung"];
  $Sql_Query = "INSERT INTO ghichu (`stt` ,  `noidung`  )
 VALUES ('$stt','$noidung')";

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
