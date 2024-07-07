<?php
require_once 'configFunction.php';
?>
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Gallery</title>
  <script src="js/script.js" defer></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="stylesheet" type="text/css" href="css/gallery.css">
  <link rel="icon" type="image/jpg" href="image/browserpictogram.jpg">
  <meta name="viewport" content="width=device-width, initial-scale=1">


  </head>
<body>
  <div class="nav_headar">
      
    <div class="container">
      <nav class="navbar">
        <a href="/." class="nav-logo"><img    class="logoHP"  src="/image/logoHP.png"></a>
        <ul class="nav-menu">

           <li class="nav-item">
                <a href="/." class="nav-link">Menu PL</a>     
         </li>
         <li class="nav-item">
          <a href="menuNL.html" class="nav-link">Menu NL</a>     
   </li>


<li class="nav-item">
  <a href="#generalImages"  class="nav-link" style="color:#be8040"  > <b>Live style</b></a>        
</li>
<li class="nav-item">
  <a href="#events"  class="nav-link" style="color:#be8040"> <b>Events</b></a>        
</li>
<li class="nav-item">
  <a href="#ourDishes"  class="nav-link" style="color:#be8040"> <b>Our dishes</b></a>        
</li>
<li class="nav-item">
  <a href="#contact"  class="nav-link">Contact</a>        
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
<br><br><br><br><br><br><br><br><br><br><br><br>

<div class="headText">See what's going on with us</div>
<section id="generalImages"></section>
     <?php 
          $sql = "SELECT * FROM tb_uploadImage ORDER BY id DESC";
          $res = mysqli_query($conn,  $sql);

          if (mysqli_num_rows($res) > 0) {
          	while ($images = mysqli_fetch_assoc($res)) {  ?>
              
             <div class="showImages">
            <a  target="_blank" href="uploadsGeneral/<?=$images['image_image']?>"><img src="uploadsGeneral/<?=$images['image_image']?>"></a>
             </div>
     
         
    <?php } }?>
<div class="headText">Events</div>
<section id="events"></section>
    <?php 
          $sql = "SELECT * FROM tb_uploadImagesParties ORDER BY id DESC";
          $res = mysqli_query($conn,  $sql);

          if (mysqli_num_rows($res) > 0) {
          	while ($images = mysqli_fetch_assoc($res)) {  ?>
              
        
         
             <div class="showImages">

            <a  target="_blank" href="uploadsParties/<?=$images['image_parties']?>"><img src="uploadsParties/<?=$images['image_parties']?>"></a>
             </div>
      
    <?php } }?>


    <p></p>
    <div class="headText">Our dishes</div>
    <section id="ourDishes"></section>
    <?php 
          $sql = "SELECT * FROM tb_uploadImagesFoods ORDER BY id DESC";
          $res = mysqli_query($conn,  $sql);

          if (mysqli_num_rows($res) > 0) {
          	while ($images = mysqli_fetch_assoc($res)) {  ?>
                 
             <div class="showImages">
            <a  target="_blank" href="uploadsFood/<?=$images['image_foods']?>"><img src="uploadsFood/<?=$images['image_foods']?>"></a>
             </div>
    <?php } }?>
    <footer>
  <section id="contact"></section>
<div class="textLocation"><b>Location</b><br><br>Wilhelminapark 66, 5041 ED Tilburg, Holandia<br></div>
<div class="textContact"><b>Contact</b><br><br>Email: hollapolla66@gmail.com<br>Phone: + 31 6 58723606<br></div>
<div class="textInformation"><b>Information</b><br><br>kvk: 92146872<br></div>
</footer>