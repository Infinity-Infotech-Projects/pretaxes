<?php
include 'db_dsc.php';

$nationality = $_POST['nationality'];   // indian / foreign
$category    = $_POST['category'];      // individual / organization
$type        = $_POST['type'];          // normal / combo / dgft
$year        = (int)$_POST['year'];
$usb         = $_POST['usb'];            // yes / no
$support     = $_POST['support'];        // yes / no

/* PRODUCT NAME MAPPING (VERY IMPORTANT) */
if ($type === 'dgft') {
    $product_name = 'DGFT';
    $cert_type = 'normal';
} else {
    if ($nationality === 'foreign') {
        $product_name = 'Foreign Class 3 General';
    } else {
        $product_name = 'Class 3 General';
    }

    if ($type === 'combo') {
        $product_name .= ' Combo';
        $cert_type = 'combo';
    } else {
        $cert_type = 'normal';
    }
}

/* FETCH PRICE FROM DB */
$sql = "
SELECT price, support_price 
FROM dsc_plans
WHERE product_name = ?
AND validity_year = ?
AND category = ?
AND certificate_type = ?
LIMIT 1
";

$stmt = $conn->prepare($sql);
$stmt->bind_param("siss", $product_name, $year, $category, $cert_type);
$stmt->execute();
$res = $stmt->get_result();
$row = $res->fetch_assoc();

if (!$row) {
    echo json_encode([
        "dsc" => 0,
        "usb" => 0,
        "support" => 0,
        "total" => 0
    ]);
    exit;
}

/* CALCULATION */
$dsc_price = (int)$row['price'];
$support_price = ($support === 'yes') ? (int)$row['support_price'] : 0;
$usb_price = ($usb === 'yes') ? 500 : 0;

$total = $dsc_price + $support_price + $usb_price;

echo json_encode([
    "dsc" => $dsc_price,
    "usb" => $usb_price,
    "support" => $support_price,
    "total" => $total
]);
$dsc_price = (int)$row['price'];
$usb_price = ($usb === 'yes') ? 500 : 0;
$support_price = ($support === 'yes') ? (int)$row['support_price'] : 0;

$total = $dsc_price + $usb_price + $support_price;
