
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Reservation</title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" type="text/css" href="css/reservation.css">
  <link rel="icon" type="image/jpg" href="image/browserpictogram.jpg">

  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
<div class="nav_headar">
  <div class="container">
    <nav class="navbar">
      <a href="/." class="nav-logo"><img class="logoHP" src="/image/logoHP.png"></a>
      <ul class="nav-menu">
        <li class="nav-item"><a href="/." class="nav-link">Menu PL</a></li>
        <li class="nav-item"><a href="menuNL.html" class="nav-link">Menu NL</a></li>
        <li class="nav-item"><a href="gallery.php" class="nav-link">Gallery</a></li>
        <li class="nav-item">
          <a href="reservation.html" class="nav-link" id="openReservation" style="color:#be8040">Reservation</a>
        </li>
        <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
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

<a href="image/mapTable.jpg" target="_blank"><img id="imageReservation" src="image/mapTable.jpg"></a>

<form id="reservationForm">
<br>  <br>
  <input type="text" id="name" name="name" placeholder=" Last name">

  <br>
  <input type="number" id="phone" name="phone" placeholder=" Phone">
  <br>

  <input type="number" id="table_number" name="table_number" placeholder=" Number table">

  <br>
  <input type="number" id="number_of_guests" name="number_of_guests" placeholder=" Number of guests">
  <br>
 
  <input type="date" id="reservation_date" name="reservation_date" placeholder=" Date">

  <br>
  <input type="time" id="reservation_time" name="reservation_time" placeholder=" Time">

<br>
<textarea    rows="4" cols="50"  id="message" name="message" placeholder=" Message"></textarea>

  <input type="submit" id="submit" value=" Submit">
  <div class="textStatus"></div>
</form>

<footer>
  <section id="contact"></section>
  <div class="textLocation"><b>Lokalizacja</b><br><br>Wilhelminapark 66, 5041 ED Tilburg, Holandia<br></div>
  <div class="textContact"><b>Kontakt</b><br><br>Email: hollapolla66@gmail.com<br>Phone: + 31 6 58723606<br></div>
  <div class="textInformation"><b>Informacije</b><br><br>kvk: 92146872<br></div>
</footer>


<!-- email  connect start -->
<script src="https://smtpjs.com/v3/smtp.js"></script>
<!-- email  connect end -->
<script src="js/reservation.js" defer></script>
<script src="js/script.js" defer></script>
</body>
</html>
