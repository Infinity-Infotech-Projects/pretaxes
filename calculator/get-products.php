<?php
header("Content-Type: application/json");
include 'db_dsc.php';

$result = $conn->query("
  SELECT DISTINCT certificate_type 
  FROM dsc_certificate_rates
  ORDER BY certificate_type
");

$data = [];

while($row = $result->fetch_assoc()){
    $data[] = $row['certificate_type'];
}

echo json_encode($data);
