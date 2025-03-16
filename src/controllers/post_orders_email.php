<?php

// Retrieving data from the form sent using the POST method
$codeNumber = $_POST['codeNumber'];
$orderNumber = $_POST['orderNumber'];
$quantity = $_POST['quantity'];
$first_name = $_POST['first_name'];
$message = $_POST['message'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$addres = $_POST['addres'];
$order_date = $_POST['order_date'];
$order_time = $_POST['order_time'];


if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit']))
 {

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Including PHPMailer library files (https://github.com/PHPMailer/PHPMailer)
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    // Configuring the mail server
    $mail->isSMTP();  
    $mail->Host = ''; // SMTP server
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Secure connection
    $mail->Port = 465; 
    $mail->Username = ''; // SMTP username
    $mail->Password = ''; // SMTP password

    // Setting sender and recipient
    $mail->setFrom(''); 
    $mail->addAddress($_POST['email']); // Recipient's email
    $mail->addCC(''); // Optional CC recipient

    // Configuring email encoding
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';

    // Setting email content
    $mail->isHTML(true);
    $mail->Subject = htmlspecialchars('Hollapolla - Your order has been successfully placed and accepted. Thank you!', ENT_QUOTES, 'UTF-8');
    $mail->Body = nl2br(htmlspecialchars("
        Order details:
        Name: $first_name
        Email: $email
        Order Code: $codeNumber
        Address: $addres
        Phone: $phone
        Date: $order_date
        Time: $order_time
        Order Number: $orderNumber
        Quantity: $quantity
        Customer Message: $message
        Consents:

        I consent to HollaPolla processing my personal data contained in this contact form for the purpose and to the extent necessary to process my request.

        I consent to HollaPolla processing my personal data contained in this contact form for the purpose of sending me electronic commercial offers of its own products.

        I consent to HollaPolla processing my personal data contained in this contact form for the purpose of telephone contact by the company representatives regarding the commercial offer of its own products.

        Best regards, HollaPolla 🍴", ENT_QUOTES, 'UTF-8'));

    // Sending the email
    $mail->send();

} catch (Exception $e) {
    // Handling errors (currently empty)
}
}
?>

