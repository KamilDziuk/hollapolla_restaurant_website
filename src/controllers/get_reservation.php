<?php  
require "../config/config_reservation.php";

try {    
$sql = "SELECT * FROM reservations";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$reservation = $stmt->fetchAll(PDO::FETCH_ASSOC); 
$stmt = null;
$pdo = null;
 
} catch (PDOException $e) {
echo "Error downloading to MySQL database" . $e->getMessage();
}
?>
