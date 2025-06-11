<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'vendor/autoload.php';

header('Content-Type: application/json');

$response = ['success' => false];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';  // Added email
    $phone = $_POST['phone'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message = $_POST['message'] ?? '';

    if (empty($name) || empty($email) || empty($phone) || empty($subject) || empty($message)) {
        $response['error'] = "All fields are required.";
        echo json_encode($response);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'meenu.digitallybird@gmail.com'; // Replace with environment variable
        $mail->Password   = 'iqrk hpyl vtfp uaxt'; // Replace with environment variable
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;

        // Recipients
        $mail->setFrom('meenu.digitallybird@gmail.com', 'AKCODA Site');
        $mail->addAddress('meenu.digitallybird@gmail.com', 'Admin');
        $mail->addReplyTo($email, $name); // Allows user replies

        // Email Content
        $mail->isHTML(true);
        $mail->Subject = "New Contact Inquiry: $subject";
        $mail->Body    = "
            <h2>Contact Inquiry</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Subject:</strong> $subject</p>
            <p><strong>Message:</strong><br>$message</p>
        ";

        $mail->send();
        $response['success'] = true;
    } catch (Exception $e) {
        $response['error'] = 'Mailer Error: ' . $mail->ErrorInfo;
    }
}

echo json_encode($response);
?>
