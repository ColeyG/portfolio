<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cole Contact Form</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <link href="css/reset.css" rel="stylesheet" type="text/css" media="screen">
    <link href="css/form.css" rel="stylesheet" type="text/css" media="screen">
</head>
<body>
    <?php
    if(isset($_POST['submitBut'])){
    
        $to = "cole@colegeerts.com";
        $email = $_POST['email'];
        $subject = $email ." - Message from your DotCom.";
        $first = $_POST['first_name'];
        $last = $_POST['last_name'];
        $message = $_POST['message'];
        $body = $first . " " . $last . " at " . $email . " says: " . $message;

        mail($to,$subject,$body);
    }
    ?>
<script src="js/redirect.js"></script>
</body>
</html>