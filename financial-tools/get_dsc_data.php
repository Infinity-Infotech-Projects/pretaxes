<?php

$conn = new mysqli("localhost","root","","popup_form");

$product = $_GET['product'];
$user = $_GET['user'];

$sql = "SELECT * FROM dsc_certificate_rates WHERE product_name='$product' LIMIT 1";

$res = $conn->query($sql);

if($row=$res->fetch_assoc()){

$price = $user=="individual" ? $row['individual_price'] : $row['organization_price'];

$support = $row['support_price'];

$addon = $conn->query("SELECT price FROM dsc_addons WHERE addon_name='USB Token'")->fetch_assoc();

echo json_encode([
"status"=>"success",
"certificate"=>$price,
"support"=>$support,
"usb"=>$addon['price']
]);

}