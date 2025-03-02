<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="../styles/displaying_reservation.css">
<link rel="stylesheet" type="text/css" href="../styles/reservation.css">
<link rel="icon" type="image/png" href="assets/images/browserpictogram.png">
<link rel="apple-touch-icon" href="assets/images/icon-96x96.png">
<link rel="apple-touch-icon" sizes="152x152" href="assets/images/icon-152x152.png">
<link rel="apple-touch-icon" sizes="167x167" href="assets/images/icon-167x167.png">
<link rel="apple-touch-icon" sizes="180x180" href="assets/images/icon-180x180.png">
<title>Displaying Reservation</title>
</head>
<body>
<!-- gtranslate start -->

<div class="gtranslate_wrapper"></div>
<script>window.gtranslateSettings = {"default_language":"en","native_language_names":true,"detect_browser_language":true,"languages":["en","pl","nl","fr"],"wrapper_selector":".gtranslate_wrapper","switcher_horizontal_position":"right","float_switcher_open_direction":"right"}</script>
<script src="https://cdn.gtranslate.net/widgets/latest/float.js" defer></script>

 <!-- gtranslate start  end-->
<div id="printReservationBox">
<div id="printReservation"></div>
</div>
<div id="contenerImage">

</div>
<?php require "../controllers/get_reservation.php";?>
<script>
let date = new Date();

let currentDateResult =  date.getFullYear() + "-" +
("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) ;
let reservation =  <?php echo json_encode($reservation)  ?>

let display =  reservation.map( allReservation => {
return `${allReservation.order_date}`;
})

let displayReservation =  reservation.map( displayReservation => {
 return `<br>|<br> 
Reservation Code: ${displayReservation.reservationCode},<br>
Table number: ${displayReservation.table_number},<br>
Reservation Date: ${displayReservation.reservation_date},<br>
Reservation Time: ${displayReservation.reservation_time},<br>
Email: ${displayReservation.email},<br>
Name: ${displayReservation.name},<br>
Phone: ${displayReservation.phone},<br>
Message: ${displayReservation.message},<br>
Number of guests: ${displayReservation.number_of_guests}
<br> |`;
}).join(`\n`)

document.querySelector("#printReservation").innerHTML = displayReservation;

setInterval(() => {
location.reload();
},15000)
</script>
</body>
</html>
