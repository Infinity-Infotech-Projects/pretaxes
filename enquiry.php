<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once __DIR__ . "/db.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] !== "GET") {
    http_response_code(405);
    exit;
}

$name    = $_POST['name'] ?? '';
$email   = $_POST['email'] ?? '';
$phone   = $_POST['phone'] ?? '';
$message = $_POST['message'] ?? '';

/* ---------- DB INSERT (FAST & SAFE) ---------- */
$stmt = $conn->prepare(
    "INSERT INTO form (name, email, phone, message) VALUES (?, ?, ?, ?)"
);
$stmt->bind_param("ssss", $name, $email, $phone, $message);
$stmt->execute();

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtpout.secureserver.net';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'vaibhav@pretaxessolutions.in';
    $mail->Password   = 'Jiva@240624#';

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('vaibhav@pretaxessolutions.in', 'Website Enquiry');
    $mail->addAddress('vaibhav@pretaxessolutions.in');

    $mail->isHTML(true);
    $mail->Subject = 'New Enquiry Received';
    $mail->Body = "
        <h3>New Enquiry</h3>
        <p><b>Name:</b> {$name}</p>
        <p><b>Email:</b> {$email}</p>
        <p><b>Phone:</b> {$phone}</p>
        <p><b>Message:</b> {$message}</p>
    ";

    $mail->send();
    echo "success";
    exit;

} catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
    exit;
}
?>
