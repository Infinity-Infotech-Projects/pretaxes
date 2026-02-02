<?php
$conn = new mysqli("localhost","root","","pretaxes");
if($conn->connect_error){
  die("DB Error");
}
?>
