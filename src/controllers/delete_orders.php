<?php  
require_once "../config/config_ordering.php";

$currentDateResult = $_POST['currentDateResult'];
$display = $_POST['display'];

try{

    if($currentDateResult === $display)
    {
     echo "Good";
    }
    else
    {
        $sql = "DELETE FROM orders WHERE order_date = '$display'";


        $stmt = $pdo->prepare($sql);
     
        $stmt->execute();
       
       
        $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo "Error deleting". $display;
    }


    $stmt = null;
    $pdo = null;
    die();
} catch (PDOException $e) {
   
    echo "Error deleting to MySQL database" . $e->getMessage();
};
?>




