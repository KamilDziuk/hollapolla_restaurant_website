<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="../styles/displaying_orders.css">
<link rel="icon" type="image/png" href="assets/images/browserpictogram.png">
<link rel="apple-touch-icon" href="assets/images/icon-96x96.png">
<link rel="apple-touch-icon" sizes="152x152" href="assets/images/icon-152x152.png">
<link rel="apple-touch-icon" sizes="167x167" href="assets/images/icon-167x167.png">
<link rel="apple-touch-icon" sizes="180x180" href="assets/images/icon-180x180.png">
<link rel="manifest" href="manifest.json">

<title>Displaying Orders</title>

</head>
<body>
<!-- gtranslate start -->
<div class="gtranslate_wrapper"></div>
<script>window.gtranslateSettings = {"default_language":"en","native_language_names":true,"detect_browser_language":true,"languages":["en","pl","nl","fr"],"wrapper_selector":".gtranslate_wrapper","switcher_horizontal_position":"right","float_switcher_open_direction":"right"}</script>
<script src="https://cdn.gtranslate.net/widgets/latest/float.js" defer></script>

<div id="ordersForm">
<div id="printOrders"></div>
</div>
<?php require "../controllers/get_orders.php";?>
<script>
let date = new Date();
let currentDateResult =  date.getFullYear() + "-" +
("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) ;
let orders =  <?php echo json_encode($orders)  ?>

let display =  orders.map( allOrders => {
return `${allOrders.order_date}`;
});

let displayOrders =  orders.map( displayOrders => {
return `<br>|<br> 
Code number: ${displayOrders.codeNumber},<br>
Order number: ${displayOrders.orderNumber},<br>
Quantity: ${displayOrders.quantity},<br>
First name: ${displayOrders.first_name},<br>
Email: ${displayOrders.email},<br>
Addres: ${displayOrders.addres},<br>
Order date: ${displayOrders.order_date},<br>
Order time: ${displayOrders.order_time},<br>
Message: ${displayOrders.message} <br> |`;
}).join(`\n`)

document.querySelector("#printOrders").innerHTML = displayOrders;
formDataDate = new FormData()
formDataDate.append('currentDateResult',currentDateResult);
formDataDate.append('display',display[0]);

fetch('../controllers/delete_orders.php',
{
method: "POST",
body: formDataDate
});

setInterval(() => {
 location.reload();
},15000);

</script>
</body>
</html>
