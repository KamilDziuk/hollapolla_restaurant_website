<?php  
require "../config/config_ordering.php";

try {
    
    $sql = "SELECT * FROM orders";
    $stmt = $pdo->prepare($sql);


    $stmt->execute();


    $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);
 
    $stmt = null;
    $pdo = null;
 
} catch (PDOException $e) {

    echo "Error downloading to MySQL database" . $e->getMessage();
}
?>
