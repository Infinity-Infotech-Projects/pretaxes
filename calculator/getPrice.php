<?php
header("Content-Type: application/json");
include "db_dsc.php";

$data = json_decode(file_get_contents("php://input"), true);

// SAFE INPUTS
$category    = "Standard";
$nationality = trim($data['nationality']);
$dscType     = trim($data['dscType']);
$certType    = trim($data['certType']);
$validity    = intval($data['validity']);
$usb         = strtolower(trim($data['usb']));
$support     = strtolower(trim($data['support']));

// ==============================
// 1️⃣ GET DSC PRICE
// ==============================
$stmt = $conn->prepare("
SELECT individual_price, organization_price, support_price
FROM dsc_certificate_rates
WHERE category=? 
AND nationality=? 
AND certificate_type=? 
AND validity_year=?
LIMIT 1
");

$stmt->bind_param("sssi", $category, $nationality, $certType, $validity);
$stmt->execute();
$res = $stmt->get_result();
$row = $res->fetch_assoc();

$dscPrice = 0;
$supportPrice = 0;

if($row){
    if($dscType == "Individual"){
        $dscPrice = $row['individual_price'];
    } else {
        $dscPrice = $row['organization_price'];
    }

    // SUPPORT PRICE
    if($support == "required"){
        $supportPrice = $row['support_price'];
    }
}

// ==============================
// 2️⃣ GET USB TOKEN PRICE
// ==============================
$tokenPrice = 0;

if($usb == "required"){
    $addon = $conn->query("SELECT price FROM dsc_addons WHERE addon_name='USB Token' LIMIT 1");
    $token = $addon->fetch_assoc();
    if($token){
        $tokenPrice = $token['price'];
    }
}

// ==============================
// 3️⃣ TOTAL
// ==============================
$subtotal = $dscPrice + $tokenPrice + $supportPrice;

echo json_encode([
    "dscPrice" => $dscPrice,
    "tokenPrice" => $tokenPrice,
    "supportPrice" => $supportPrice,
    "subtotal" => $subtotal
]);
?>
