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
        <a href="/." class="nav-logo"><img    class="logoHP"  src="/image/logoHP.png">  </a>
        <ul class="nav-menu">

           <li class="nav-item">
                <a href="/." class="nav-link">Menu PL</a>     
         </li>
         <li class="nav-item">
          <a href="menuNL.html" class="nav-link">Menu NL</a>     
   </li>
   </li>
      <a href="gallery.php" class="nav-link">Gallery</a> 
  </li>
<li class="nav-item">
  <a href="#contact" id="contact" class="nav-link">Contact</a>        
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
 
     <?php 
          $sql = "SELECT * FROM tb_uploadImage ORDER BY id DESC";
          $res = mysqli_query($conn,  $sql);

          if (mysqli_num_rows($res) > 0) {
          	while ($images = mysqli_fetch_assoc($res)) {  ?>
             
             <div class="showImages">
             <a  target="_blank" href="uploads/<?=$images['image_image']?>"><img src="uploads/<?=$images['image_image']?>"></a>
             </div>
          		
    <?php } }?>
</body>
</html>