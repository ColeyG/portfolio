<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cole Contact Form</title>
</head>
<body>
    <?php
    if(isset($_POST['submit'])){
        $to = "cole@colegeerts.com";
        $subject = ($_POST['first_name']);
        $body = "memes";

        mail($to,$subject,$body);
    }
    ?>
</body>
</html>