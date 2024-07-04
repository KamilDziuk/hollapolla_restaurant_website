

<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Adding an image</title>
  <script src="js/script.js" defer></script>

  <link rel="stylesheet" type="text/css" href="css/addImages.css">
  <link rel="icon" type="image/jpg" href="image/browserpictogram.jpg">
  <meta name="viewport" content="width=device-width, initial-scale=1">


</head>
<body>

	<?php if (isset($_GET['error'])): ?>
		<p><?php echo $_GET['error']; ?></p>
	<?php endif ?>
     <form action="upload.php"
           method="post"
           enctype="multipart/form-data">

           <input type="file" 
                  name="picture">

           <input type="submit" 
                  name="submit"
                  value="Upload">
     	
     </form>
</body>
</html>