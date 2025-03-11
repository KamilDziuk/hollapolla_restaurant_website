<?php


// retrieving data from the form sent using the POST method
$reservation_date = $_POST['reservation_date'];
$reservationCode = $_POST['reservationCode'];
$reservation_time = $_POST['reservation_time']; 
$table_number = $_POST['table_number']; 
$name = $_POST['name']; 
$phone = $_POST['phone']; 
$email = $_POST['email']; 
$message = $_POST['message'];
$number_of_guests = $_POST['number_of_guests'];




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
        $mail->Host = '';// SMTP server
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
        $mail->Subject = htmlspecialchars('Hollapolla - Twoja rezerwacjia została przyjęta. Dziękujemy! ', ENT_QUOTES, 'UTF-8');
        $mail->Body = nl2br(htmlspecialchars( "
 Szczegóły zamówienia:
Imię: $name
Telefon: $phone
Email: $email
Liczba osób:  $number_of_guests
Data: $reservation_date
Godzina: $reservation_time
Kod rezerwacji: $reservationCode
Wiadomość od klienta: $message
Numer stolika: $table_number

Zgody:

 Wyrażam zgodę na przetwarzanie przez HollaPolla moich danych osobowych zawartych w niniejszym formularzu kontaktowym w celu i zakresie niezbędnym do realizacji zgłoszenia.

Wyrażam zgodę na przetwarzanie przez HollaPolla moich danych osobowych zawartych w niniejszym formularzu kontaktowym w celu przesyłania mi drogą elektroniczną ofert handlowych własnych produktów.

Wyrażam zgodę na przetwarzanie przez HollaPolla moich danych osobowych zawartych w niniejszym formularzu kontaktowym w celu kontaktu telefonicznego przedstawicieli firmy w sprawach związanych z ofertą handlową własnych produktów.
       
       
Pozdrawiamy, HollaPolla 🍴", ENT_QUOTES, 'UTF-8'));

 // Sending the email      
$mail->send();       
} catch (Exception $e) {
        // Handling errors (currently empty)
}
?>
