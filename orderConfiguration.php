
<?php
require_once 'configFunctionR.php';

if ($_SERVER['REQUEST_METHOD'] == "POST") {
  $_table_number = $_POST['table_number'];
  $_reservation_date = $_POST['reservation_date'];
  $_reservation_time = $_POST['reservation_time'];

  $sql = "SELECT * FROM reservations WHERE table_number = ? AND reservation_date = ? AND reservation_time = ?";
  $main = $conn->prepare($sql);
  $main->bind_param("iss", $_table_number, $_reservation_date, $_reservation_time);
  $main->execute();
  $result = $main->get_result();

  if ($result->num_rows > 0) {
    echo "This date is already booked";
  } else {
    $sql = "INSERT INTO reservations (table_number, reservation_date, reservation_time, status) VALUES (?, ?, ?, 'booked')";
    $main = $conn->prepare($sql);
    $main->bind_param("iss", $_table_number, $_reservation_date, $_reservation_time);
    $main->execute();
    echo "Reservation successful";
  }

  $conn->close();
}
?>