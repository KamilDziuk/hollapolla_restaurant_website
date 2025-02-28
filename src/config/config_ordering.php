<?php
try{
$dbhost = '';
$dbname='';
$dbuser = '';
$dbpass = '';
$pdo = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
}
catch(PDOException $e)
{
echo "ERRPR:" . $e -> getMessage() . "<br>";
};
?>

