<?php
require_once "../config/config_postmark_token.php";

// token  authorize
$token = POSTMARK_TOKEN;
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

// API key to authorize sending email via Postmark
$apiKey = ""; 

// creating an array with email data to send
$data = [
"From" => "kontakt@hollapolla.nl",
"To" => "kontakt@hollapolla.nl", 
"Subject" => "Nowe zamówienie, kod rezerwacji: $reservationCode", 
"TextBody" => "Imię: $name
Telefon: $phone
Email: $email
Liczba osób:  $number_of_guests
Data: $reservation_date
Godzina: $reservation_time
Kod rezerwacji: $reservationCode
Wiadomość od klienta: $message
Numer stolika: $table_number
Zgody:
zgoda0: Wyrażam zgodę na przetwarzanie przez HollaPolla moich danych osobowych zawartych w niniejszym formularzu kontaktowym w celu i zakresie niezbędnym do realizacji zgłoszenia.
zgoda1: Wyrażam zgodę na przetwarzanie przez HollaPolla moich danych osobowych zawartych w niniejszym formularzu kontaktowym w celu przesyłania mi drogą elektroniczną ofert handlowych własnych produktów.
zgoda3: Wyrażam zgodę na przetwarzanie przez HollaPolla moich danych osobowych zawartych w niniejszym formularzu kontaktowym w celu kontaktu telefonicznego przedstawicieli firmy w sprawach związanych z ofertą handlową własnych produktów."
];

// initialize cURL to send email via Postmark API
$ch = curl_init("https://api.postmarkapp.com/email"); // postmark API address to send email
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // set the option to return the response as a string

curl_setopt($ch, CURLOPT_HTTPHEADER, [ // set HTTP headers
"Content-Type: application/json", // indicates that the data is in JSON format
"Accept: application/json", // expecting response in JSON format
"X-Postmark-Server-Token: $token"  // adding an token to authorize the request
]);
curl_setopt($ch, CURLOPT_POST, true);// specify that the request is a POST method
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data)); // encode data to JSON format and send in the request body

$response = curl_exec($ch); // sending the request and saving the response
curl_close($ch); // closing the cURL connection
?>
