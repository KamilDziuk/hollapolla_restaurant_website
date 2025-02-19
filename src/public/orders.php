




<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>HollaPolla - Orders</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" type="text/css" href="../styles/orders.css">

  <link rel="icon" type="image/png" href="assets/images/browserpictogram.png">
  <link rel="apple-touch-icon" href="assets/images/icon-96x96.png">
  <link rel="apple-touch-icon" sizes="152x152" href="assets/images/icon-152x152.png">
  <link rel="apple-touch-icon" sizes="167x167" href="assets/images/icon-167x167.png">
  <link rel="apple-touch-icon" sizes="180x180" href="assets/images/icon-180x180.png">
  <link rel="manifest" href="manifest.json">
  
  


</head>

<body>
  <!-- gtranslate start -->
  <div class="gtranslate_wrapper"></div>
<script>window.gtranslateSettings = {"default_language":"en","native_language_names":true,"detect_browser_language":true,"languages":["en","pl","nl","fr"],"wrapper_selector":".gtranslate_wrapper","switcher_horizontal_position":"right","float_switcher_open_direction":"right"}</script>
<script src="https://cdn.gtranslate.net/widgets/latest/float.js" defer></script>

  <!-- gtranslate start  end-->

<div class="nav_headar">
  <div class="container">
    <nav class="navbar">
      <a href="https://hollapolla.nl/" class="nav-logo"><img    class="logoHP"  src="assets/images/logoHP.webp">  </a>
      <ul class="nav-menu">

      <li class="nav-item">
              <a href="https://hollapolla.nl/" class="nav-link">Menu</a>     
       </li>

<li class="nav-item">
  <a href="https://reservations.hollapolla.nl/" class="nav-link" id="openReservation"   style="color:#be8040"    >Reservations</a>        
   </li>
  <li class="nav-item">
    <a href="https://orders.hollapolla.nl/" class="nav-link" id="openReservations"   style="color:#f4d135"    >Orders online</a>        
  </li>

<li class="nav-item">
  <a style="color:#cdcdcd"   onclick="window.location.href='tel:+31 6 58723606'">+31 6 58723606</a>    
</li>



    <li class="nav-item">
  <a href="https://www.facebook.com/profile.php?id=61555700734528" class="fa fa-facebook"></a>
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



<div class="orderSummaryBackground">
  
<div class="orderSummary">
<div class="codeNumber"> </div>

<div class="textStatus">
   </div>



</div>
  
</div>

<div id="ordersForm">
  <div class="information"></div><br> 
  <input type="text" id="first_name" placeholder=" Last name" >
  <input type="email" id="email" name="email" placeholder="Email"> 
  <input type="number" id="phone" name="phone" placeholder=" Phone" >
  <textarea    rows="2" cols="10"  id="addres" name="addres" placeholder=" Addres"  ></textarea>

  <div id="contenerOrderInfo">
  
    <div class="boxOrderInfo">
      
    <div class="numbersOrderLocation">Numbers order</div>
    <div class="quantityLocation">Quantity</div>
    
  </div>
  </div>


  <div class="information display" style="color: #ff0000; font-size: 12px;">To send an order, click on the name of the dish on the menu or enter the dish number in the message.</div>


<textarea    rows="4" cols="10"    id="message" name="message" placeholder=" Message"></textarea>

  <input type="submit" id="submit" value="submit">

  <div class="information" style="color: #be8040;">Accept the rules to send</div> 
  <label class="containerCheck">I consent to the processing by HollaPolla of my personal data contained in this contact form for the purpose and to the extent necessary to process the application.
    <input type="checkbox"  name="checkbox" >
    <span class="checkmark"></span>
  </label>
  <label class="containerCheck">I consent to the processing by HollaPolla of my personal data contained in this contact form for the purpose of sending me commercial offers for the company's own products electronically.
    <input type="checkbox" name="checkbox" >
    <span class="checkmark"></span>
  </label>
  <label class="containerCheck"> I consent to the processing by HollaPolla of my personal data contained in this contact form for the purpose of telephone contact by the company's representatives in matters related to the commercial offer for its own products.
    <input type="checkbox" name="checkbox" >
    <span class="checkmark"></span>
  </label>

  </div> 

</div>
</div>
<div id="contenerImage">
  <div class="information">When ordering through our website you will receive a <b   style="color: #be8040;">10%</b> discount. For orders over<b   style="color:#f4d135"> €50 free delivery</b>, under €4.<br> Payment can be made upon receipt of the order.  Payment by <b   style="color: #be8040;">card </b>or <b   style="color: #009e20;">cash</b>.<br><br>Click on the name of a <b  style="color:#f4d135">dish </b>in the menu to add it to your order.</div> <br>



</div>



<!-- email  connect start -->
<script src="https://smtpjs.com/v3/smtp.js"></script>
<!-- email  connect end -->
<script src="../scripts/orders.js" defer></script>
<script src="../scripts/script.js" defer></script>


</body>
</html>
