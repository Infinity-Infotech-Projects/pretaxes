<?php
include 'db_dsc.php';

$result = $conn->query("
  SELECT DISTINCT 
    certificate_class, 
    certificate_type 
  FROM dsc_certificate_rates
");

$data = [];

while($row = $result->fetch_assoc()){
  $data[] = $row;
}

echo json_encode($data);
