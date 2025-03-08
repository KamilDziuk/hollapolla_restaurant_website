<?php
// retrieving data from the form sent using the POST method
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

// postmark
// creating an array with email data to send
$data = [
"From" => "kontakt@hollapolla.nl",
"To" => "kontakt@hollapolla.nl",
"Subject" => "Nowe zamówienie, kod zamówienia: $codeNumber",
"TextBody" => "Imię: $first_name
E-mail: $email
Kod zamówienia: $codeNumber
Adres: $addres 
Telefon: $phone
Data: $order_date
Godzina: $order_time
Zamówienie: $orderNumber
Ilość: $quantity
Wiadomość od klienta: $message
Zgody:
zgoda0: Wyrażam zgodę na przetwarzanie przez HollaPolla moich danych osobowych zawartych w niniejszym formularzu kontaktowym w celu i zakresie niezbędnym do realizacji zgłoszenia.
zgoda1: Wyrażam zgodę na przetwarzanie przez HollaPolla moich danych osobowych zawartych w niniejszym formularzu kontaktowym w celu przesyłania mi drogą elektroniczną ofert handlowych własnych produktów.
zgoda2: Wyrażam zgodę na przetwarzanie przez HollaPolla moich danych osobowych zawartych w niniejszym formularzu kontaktowym w celu kontaktu telefonicznego przedstawicieli firmy w sprawach związanych z ofertą handlową własnych produktów."
];

// initialize cURL to send email via Postmark API
$ch = curl_init("https://api.postmarkapp.com/email"); // postmark API address to send email
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // set the option to return the response as a string

curl_setopt($ch, CURLOPT_HTTPHEADER, [ // set HTTP headers
    "Content-Type: application/json", // indicates that the data is in JSON format
    "Accept: application/json", // expecting response in JSON format
    "X-Postmark-Server-Token: $apiKey" // adding an API key to authorize the request
]);
curl_setopt($ch, CURLOPT_POST, true);// specify that the request is a POST method
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data)); // encode data to JSON format and send in the request body

$response = curl_exec($ch); // sending the request and saving the response
curl_close($ch); // closing the cURL connection
?>
