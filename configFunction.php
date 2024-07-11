<?php
require_once 'config/configPhotosDB.php';
$servername = $config['servername'];
$username = $config['username'];
$password = $config['password'];
$dbname = $config['dbname'];
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT * FROM tb_uploadImage";
$result = $conn->query($sql);
$tb_uploadImage	 = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $tb_uploadImage	[] = $row;
    }
}

?>