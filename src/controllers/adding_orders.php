<?php  
require_once "../config/config_ordering.php";

$codeNumber = $_POST['codeNumber'];
$orderNumber = $_POST['orderNumber'];
$quantity = $_POST['quantity'];
$first_name = $_POST['first_name'];
$email = $_POST['email'];
$addres = $_POST['addres'];
$order_date = $_POST['order_date'];
$order_time = $_POST['order_time'];
$message= $_POST['message'];

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
} catch (PDOException $e) {

    echo "Error adding to MySQL database" . $e->getMessage();
}
?>

