<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>menu NL</title>
  <script src="js/script.js" defer></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <!-- <link rel="stylesheet" type="text/css" href="css/style.css"> -->
  <link rel="icon" type="image/jpg" href="image/browserpictogram.jpg">
  <meta name="viewport" content="width=device-width, initial-scale=1">


</head>
<body>
  <div class="nav_headar">
      
    <div class="container">
      <nav class="navbar">
        <a href="/." class="nav-logo"><img    class="logoHP"  src="/image/logoHP.png">  </a>
        <ul class="nav-menu">

           <li class="nav-item">
                <a href="/." class="nav-link">Menu PL</a>     
         </li>
         <li class="nav-item">
          <a href="menuNL.html" class="nav-link">Menu NL</a>     
   </li>
   <li class="nav-item">
  <a href="gallery.php" class="nav-link">Gallery</a> 
</li>
<li class="nav-item">
  <a href="#contact"class="nav-link">Contact</a>        
</li>
<li class="nav-item">
    <a href="reservation.php" class="nav-link" id="openReservation"   style="color:#be8040"    >Reservation</a>        
  </li>
</li>
</li>
<li class="nav-item">
     
</li>
<li class="nav-item">
  
    </li>
    <li class="nav-item">
  <a href="https://www.facebook.com/profile.php?id=61555700734528 " class="fa fa-facebook"></a>
  <a href="https://www.instagram.com/hollapolla66/?utm_source=qr&igsh=MXFzdG11cWE0OXhvNg%3D%3D" class="fa fa-instagram"></a>
  </li>



        </ul>
        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </div>
   </div>
  </div>


<img id="imageReservation" src="image/(niderlandzki) (angielski) (3)_20240607_120140_0002.png">
<form method="post" action="">
<label form="table_number">Number table</label >
<input type="number" id="table_number" name="table_number" >

<label form="reservation_date">Date</label>
<input type="date" id="reservation_date" name="reservation_date" >

<label form="reservation_time">Time</label>
<input type="time" id="reservation_time" name="reservation_time" >

<button type="submit" id="submit" value="Submit"></button>

</form>
<div class="textStatus"></div>

<footer>
  <section id="contact"></section>
<div class="textLocation"><b>Lokalizacja</b><br><br>Wilhelminapark 66, 5041 ED Tilburg, Holandia<br></div>
<div class="textContact"><b>Kontakt</b><br><br>Email: hollapolla66@gmail.com<br>Phone: + 31 6 58723606<br></div>
<div class="textInformation"><b>Informacije</b><br><br>kvk: 92146872<br></div>
</footer>





<script src="js/reservation.js" async></script>
<!-- email  connect start -->
<script src="https://smtpjs.com/v3/smtp.js"></script>
<!-- email  connect end -->

<?php
// Include the configuration file which likely contains database connection settings and functions
require_once'configFunction.php';

// Check if the request method is POST, which means the form has been submitted
if($_SERVER['REQUEST_METHOD'] == "POST")

{
  // Get the table number, reservation date, and reservation time from the submitted form
    $_table_number = $_POST['table_number'];
    $_reservation_date  = $_POST['reservation_date'];
    $_reservation_time = $_POST['reservation_time'];

    // Prepare an SQL statement to select any reservations that match the submitted table number, date, and time
    $sql = "SELECT * FROM reservations WHERE  table_number =? AND  reservation_date =? AND  reservation_time =? ";
$main = $conn -> prepare( $sql);

    // Bind the parameters to the SQL query: table number as an integer, and reservation date and time as strings
$main -> bind_param("iss",  $_table_number,   $_reservation_date, $_reservation_time );

    // Execute the SQL query
$main -> execute();

// Get the result of the query
$result = $main ->get_result();

    // Check if there are any rows in the result, meaning a reservation already exists for the specified table, date, and time
if($result -> num_rows >0)


{
echo "This number table is exists";
}
else
{
    // Prepare an SQL statement to insert a new reservation into the database
    $sql = "INSERT INTO  reservations (table_number, reservation_date, reservation_time, status ) VALUE (?, ?, ?, 'booked')";   

    $main = $conn -> prepare( $sql);


    $main -> bind_param("iss",  $_table_number,   $_reservation_date, $_reservation_time );
    
    $main -> execute();

}

}
// Close the database connection
$conn -> close();
?>




















</body>
</html>
