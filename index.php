<?php
$check="";
    if(isset($_POST['submitBut'])){
    
        $to = "cole@colegeerts.com";
        $email = $_POST['email'];
        $subject = $email ." - Message from your DotCom.";
        $first = $_POST['first_name'];
        $last = $_POST['last_name'];
        $message = $_POST['message'];
        $address = $_POST['address'];
        $check="";

        $body = $first . " " . $last . " at " . $email . " says: " . $message;

        if($address===""){
            if($first==="" or $last==="" or $message==="" or $email===""){
                $check="fail";
            }else{
            mail($to,$subject,$body);
            $check = "check";
            }
    }
}
?>

<!doctype html>
<html  lang="en">
<head>
<meta charset="UTF-8">
<title>Cole Geerts&#39; Works</title>
<meta name="theme-color" content="#191919" />
<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
<link href="css/reset.css" rel="stylesheet" type="text/css" media="screen">
<link href="css/main.css" rel="stylesheet" type="text/css" media="screen">
<link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,700i%7CSource+Sans+Pro" rel="stylesheet">
</head>
<body>
<p id="check" class="hidden"><?php echo $check?></p>
<h2 class="hidden">Canvas</h2>
<canvas id="canvas"></canvas>
<section id="onTop">
    <h2 class="hidden">On Top of Canvas</h2>
    <header id="mainHeader">
        <div id="logo"><img src="images/logo.svg" alt="Cole Geerts Logo"></div>
    </header>
    <section id="container">
        <div id="typed">
        <h2 class="hidden">Moving Text</h2>
            <span class="moving"></span>
        </div>
    </section>
    <a id="downRockerButton">
        <div id="downRockerHold">
            <div id="downRocker">
                <img src="images/rocker.png" alt="down arrow">
            </div>
        </div>
    </a>
</section>
<section id="underneath">
    <section id="galleryBack">
        <img alt="gallery image large" src="images/gallery/1.jpg" id="popupImg">
    </section>
    <div id="switcher">
        <div id="currentCanvas"></div>
        <div id="currentTitle">Bubble Background</div>
        <div id="canvasSwitcher">
            <a href="#"><div class="canvasButton" id="canvas1"></div></a>
            <a href="#"><div class="canvasButton" id="canvas2"></div></a>
            <a href="#"><div class="canvasButton" id="canvas3"></div></a>
        </div>
    </div>
    <div id="about">
        <h2>What I Do</h2>
        <p class="white">I&#39;m Cole Geerts and I am a Web Developer out of London Ontario. I've been learning and refining my skills for a little over a year now and have a lot of active projects that I am interested in. Below are my project quick-link cards that thread off to different parts of the internet that I am involved in. I primarily write small projects on my <a href="https://codepen.io/ColeyG/">codepen</a> and <a href="https://github.com/ColeyG">github</a> accounts respectively but you'll see my main muses below. On top of that you'll see some of my work I&#39;ve collaborated on. Please take a look and do get in touch! Keep in mind I <span class="italics">am</span> accepting clients and <span class="italics">will</span> work on your projects so do not hesitate to talk about your ideas.</p>
    </div>
    <div id="library">
        <h2 class="black">My Projects</h2>
        <section class="cardBanner">
            <h2 class="hidden">Projects</h2>
        </section>
    </div>
    <div id="resumeCon">
        <h2>Resum&#233;</h2>
        <p class="white">My work and study comprises of all things vaguely &#39;full stack&#39; as I have a wide reach of knowledge from CSS/SASS, JS, PHP, and beyond. While most of my work focuses on the entire development process I like to work with javascript and its plethora of libraries and frameworks like node.js. On top of that I also like to stay frequent with the CSS spec studying CSS-flexbox and CSS-grid on my own time. These prices of tech in conjunction ensure that I am able to assemble great pieces of web tech alone or in a group. Take a full look down below.</p>
        <a href="resume.html"><p>See my full Resum&#233; here</p></a>
    </div>
    <div id="contactCon">
        <h2 id="letsTalk" class="black">Let&#39;s talk:</h2>
        <div class="formWrapper">
        <form class="form" name="contact" method="post" action="index.php">
            <p class="italics">first name:</p>
            <input placeholder="John" class="input blue" type="text" name="first_name" maxlength="100" size="40">
            <p class="italics">last name:</p>
            <input placeholder="Doe" class="input beige" type="text" name="last_name" maxlength="100" size="40">
            <p class="italics">email:</p>
            <input placeholder="email123@gmail.com" class="input red" type="text" name="email" maxlength="150" size="40">
            <p class="italics">message:</p>
            <textarea placeholder="What is your perogative?" class="input blue" name="message" maxlength="1500" cols="40" rows="8"></textarea>
            <textarea placeholder="Where is the css?" class="hidden" name="address" maxlength="1500" cols="30" rows="8"></textarea>
            <input id="submitButton" class="input" type="submit" value="Submit" name="submitBut">
        </form>
        <p class="reminderText">all fields are required</p>
        </div>
    </div>
    <div id="galleryCon">
        <h2 id="galleryTitle" class="black">Gallery</h2>
        <div id="galleryConImages">
            <img src="images/gallery/1.png" alt="gallery image" id="1.png" class="galleryImage">
            <img src="images/gallery/2.png" alt="gallery image" id="2.png" class="galleryImage">
            <img src="images/gallery/3.png" alt="gallery image" id="3.png" class="galleryImage">
            <img src="images/gallery/4.png" alt="gallery image" id="4.png" class="galleryImage">
            <img src="images/gallery/5.png" alt="gallery image" id="5.png" class="galleryImage">
        </div>
    </div>
    <footer id="footer">
        <h2 class="hidden">Footer</h2>
        <a href="https://github.com/ColeyG"><div class="social"><img src="images/git.png" alt="git logo"></div></a>
        <a href="https://codepen.io/ColeyG/"><div class="social"><img src="images/codepen.png" alt="codepen logo"></div></a>
        <a href="https://twitter.com/ColeyGeerts"><div class="social"><img src="images/twitter.svg" alt="twitter logo"></div></a>
    </footer>
    <div id="versioning">
        <p>version 0.96 - Copyright &copy; 2018 Cole Geerts</p>
    </div>
</section>
<section id="lightBox">
    <div id="popBody">
        <h2 class="hidden">Popup area</h2>
        <p id="popTextHook">Thanks for reaching out <?php echo $first?>. I am sure you will be hearing from me shortly. In the mean time, please take a look at my other projects and visit my pages around the web.</p>
    </div>
    <a href="#" id="popdown"><div id="closeButton"><p id="popCloseHook">Close</p></div></a>
</section>
<script src="js/popup.js"></script>
<script src="js/canvasCircle.js"></script>
<script src="js/typed.js"></script>
<script src="js/galleryLightbox.js"></script>
<script src="js/main.js"></script>
<script src="js/serverfiller.js"></script>
</body>
</html>
