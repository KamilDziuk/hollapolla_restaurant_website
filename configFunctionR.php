<!-- Retrieving variables from the database start -->
<?php
require_once 'config/configReservationDB.php';
$servername = $config['servername'];
$username = $config['username'];
$password = $config['password'];
$dbname = $config['dbname'];
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}


?>
<!-- Retrieving variables from the database end -->