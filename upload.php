<?php 

if (isset($_POST['submit']) && isset($_FILES['picture'])) {

    require_once 'configFunction.php';


    ob_start();



    $img_name = $_FILES['picture']['name'];
    $img_size = $_FILES['picture']['size'];
    $tmp_name = $_FILES['picture']['tmp_name'];
    $error = $_FILES['picture']['error'];

    if ($error === 0) {
        if ($img_size > 525000) {
            $em = "Obraz jest za duży.";
            header("Location: gallery.php?error=$em");
        } else {
            $img_ex = pathinfo($img_name, PATHINFO_EXTENSION);
            $img_ex_lc = strtolower($img_ex);

            $allowed_exs = array("jpg", "jpeg", "png"); 

            if (in_array($img_ex_lc, $allowed_exs)) {
                $new_img_name = uniqid("IMG-", true).'.'.$img_ex_lc;
                $img_upload_path = 'uploads/'.$new_img_name;
                move_uploaded_file($tmp_name, $img_upload_path);

                // Insert into Database
                $sql = "INSERT INTO tb_uploadImage(image_image) 
                        VALUES('$new_img_name')";
                mysqli_query($conn, $sql);
                header("Location: gallery.php");
            } else {
                $em = "Zły foramt pliku. Dozwolone formaty(jpg, jpeg, png)";
                header("Location: gallery.php?error=$em");
            }
        }
    } else {
        $em = "Wystąpił nieznany błąd";
        header("Location: gallery.php?error=$em");
    }

  
    ob_end_flush();

} else {
    header("Location: gallery.php");
}
?>