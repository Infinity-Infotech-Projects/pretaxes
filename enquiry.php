<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once __DIR__ . "/db.php";

// PHPMailer files
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name    = $_POST['name'] ?? '';
    $email   = $_POST['email'] ?? '';
    $phone   = $_POST['phone'] ?? '';
    $message = $_POST['message'] ?? '';

    // 🔹 DB INSERT
    $query = "INSERT INTO form (name, email, phone, message)
              VALUES ('$name', '$email', '$phone', '$message')";
    mysqli_query($conn, $query);

    // 🔹 EMAIL SEND
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtpout.secureserver.net';

        // 🔐 YOUR EMAIL CREDENTIALS
        $mail->Username   = 'vaibhav@pretaxessolutions.in';
        $mail->Password   = 'Jiva@240624#';

        $mail->SMTPAuth   = true;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 465;

        // FROM & TO
        $mail->setFrom('vaibhav@pretaxessolutions.in', 'Website Enquiry');
        $mail->addAddress('vaibhav@pretaxessolutions.in'); // where you want to receive

        // EMAIL CONTENT
        $mail->isHTML(true);
        $mail->Subject = 'New Enquiry Received';
        $mail->Body    = "
            <h3>New Enquiry</h3>
            <p><b>Name:</b> $name</p>
            <p><b>Email:</b> $email</p>
            <p><b>Phone:</b> $phone</p>
            <p><b>Message:</b> $message</p>
        ";

        $mail->send();

        echo "<script>alert('Enquiry submitted & email sent!');</script>";
        echo "<script>window.location.href='index.php';</script>";

    } catch (Exception $e) {
        echo "Email Error: {$mail->ErrorInfo}";
    }
}
