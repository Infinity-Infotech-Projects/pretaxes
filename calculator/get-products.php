<?php
include 'db_dsc.php';
$q = $conn->query("SELECT DISTINCT product_name FROM dsc_plans");
$data = [];
while($r = $q->fetch_assoc()){
  $data[] = $r['product_name'];
}
echo json_encode($data);
