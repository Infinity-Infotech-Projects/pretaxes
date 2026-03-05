<?php

include '../db.php';

$product = $_GET['product'] ?? '';
$user = $_GET['user'] ?? 'individual';

$nationality = "Indian";

$parts = explode("_",$product);

$type = $parts[0] ?? '';
$year = $parts[1] ?? '1';


/* ---------- Detect Product ---------- */

if($type == "dgft"){
$product_name = "DGFT";
$certificate_type = "DGFT";
}

elseif($type == "combo"){
$product_name = "Class 3 General Combo";
$certificate_type = "Combo";
}

elseif($type == "general"){
$product_name = "Class 3 General";
$certificate_type = "General";
}

else{
echo json_encode(["status"=>"error"]);
exit;
}


/* ---------- Query ---------- */

$query = "SELECT * FROM dsc_certificate_rates
WHERE product_name='$product_name'
AND certificate_type='$certificate_type'
AND validity_year='$year'
AND nationality='$nationality'
LIMIT 1";

$result = mysqli_query($conn,$query);

if(!$result || mysqli_num_rows($result)==0){

echo json_encode(["status"=>"error"]);
exit;

}

$row = mysqli_fetch_assoc($result);


/* ---------- Price ---------- */

if($user == "individual"){
$price = $row['individual_price'];
}else{
$price = $row['organization_price'];
}

$support = $row['support_price'];


/* ---------- Response ---------- */

echo json_encode([

"status"=>"success",
"certificate"=>$price,
"support"=>$support,
"usb"=>500

]);