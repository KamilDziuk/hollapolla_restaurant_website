<?php  
require_once "../config/config_reservation.php";

//retrieves data from a form submitted via the POST method
$reservation_date = $_POST['reservation_date'];
$reservationCode = $_POST['reservationCode'];
$reservation_time = $_POST['reservation_time'];
$table_number = $_POST['table_number'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];
$number_of_guests = $_POST['number_of_guests'];

// executes an INSERT INTO query on the orders table, saving the reservations data

try {
$sql = "INSERT INTO reservations (reservation_date, reservationCode, reservation_time, table_number, name, phone, email, message, number_of_guests)
VALUES ( :reservation_date, :reservationCode, :reservation_time, :table_number, :name, :phone, :email, :message, :number_of_guests)";
$stmt = $pdo->prepare($sql);
$stmt -> bindParam(":reservationCode", $reservationCode);
$stmt -> bindParam(":table_number", $table_number);
$stmt -> bindParam(":reservation_date", $reservation_date);
$stmt -> bindParam(":reservation_time", $reservation_time);
$stmt -> bindParam(":email", $email);
$stmt -> bindParam(":name", $name);
$stmt -> bindParam(":phone", $phone);
$stmt -> bindParam(":message", $message);
$stmt -> bindParam(":number_of_guests", $number_of_guests);

$stmt->execute();
$stmt = null;
$pdo = null;
die();

//uses try-catch to handle possible errors
} catch (PDOException $e) {
echo "Error adding to MySQL database" . $e->getMessage();
}
?>

