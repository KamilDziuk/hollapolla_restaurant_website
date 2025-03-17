<?php  
require_once "../config/config_ordering.php";

//retrieves data from a form submitted via the POST method
$codeNumber = $_POST['codeNumber'];
$orderNumber = $_POST['orderNumber'];
$quantity = $_POST['quantity'];
$first_name = $_POST['first_name'];
$email = $_POST['email'];
$addres = $_POST['addres'];
$order_date = $_POST['order_date'];
$order_time = $_POST['order_time'];
$message= $_POST['message'];

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit']))
 {
// executes an INSERT INTO query on the orders table, saving the order data
try {  
$sql = "INSERT INTO orders (codeNumber, orderNumber, quantity, first_name, email, addres, order_date, order_time, message) 
VALUES (  :codeNumber, :orderNumber,:quantity, :first_name, :email, :addres, :order_date ,:order_time, :message)";
$stmt = $pdo->prepare($sql);

$stmt -> bindParam(":codeNumber", $codeNumber);
$stmt -> bindParam(":orderNumber", $orderNumber);
$stmt -> bindParam(":quantity", $quantity);
$stmt -> bindParam(":first_name", $first_name);
$stmt -> bindParam(":email", $email);
$stmt -> bindParam(":addres", $addres);
$stmt -> bindParam(":order_date", $order_date);
$stmt -> bindParam(":order_time", $order_time);
$stmt -> bindParam(":message", $message);
   
$stmt->execute();

$stmt = null;
$pdo = null;
die();

//uses try-catch to handle possible errors
} catch (PDOException $e) {
echo "Error adding to MySQL database" . $e->getMessage();
}
}
?>

