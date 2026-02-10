<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$subtotal   = $data['subtotal'];
$dscPrice   = $data['dscPrice'];
$tokenPrice = $data['tokenPrice'];

$gstDsc   = round($dscPrice * 0.18);
$gstToken = round($tokenPrice * 0.18);

$finalAmount = $subtotal + $gstDsc + $gstToken;

echo json_encode([
  "gstDsc" => $gstDsc,
  "gstToken" => $gstToken,
  "finalAmount" => $finalAmount
]);
