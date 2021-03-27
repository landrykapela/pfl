<?php
$subject = filter_var(trim($_POST['policy']),FILTER_SANITIZE_STRING);
$name = filter_var(trim($_POST['name']),FILTER_SANITIZE_STRING);
$value = isset($_POST['insurance_value']) ? filter_var(trim($_POST['name']),FILTER_SANITIZE_STRING) : "Not set";
$email = filter_var(trim($_POST['email']),FILTER_SANITIZE_EMAIL);
$phone = filter_var(trim($_POST['phone']),FILTER_SANITIZE_STRING);
$message = filter_var(trim($_POST['policy']),FILTER_SANITIZE_STRING);
$order_number = time();

$html =  '<!DOCTYPE html>
<html lang="en">
  <head>
    <title>PFL Insurance Brokers - Orders</title>
    <meta
      name="description"
      content="At PFL Insurance, we work hard to provide you with the best experience liasing with your insurer. We dedicate our resources just to make sure you get the best cover policy."
    />
    <meta
      name="keyword"
      content="PFL Insurance, best cover insurance, insurance policy, insurance brokers in Dar es Salaam, insurance business"
    />
    <meta name="charset" content="utf-8" />
    <meta name="author" content="Landry Kapela" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="http://localhost:3000/img/favicon.png" rel="icon" />
    <link
      href="http://localhost:3000/css/main.css"
      rel="stylesheet"
    />
    <link
      href="http://localhost:3000/css/mobile.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <header>
      <div class="top-bar" id="home">
        <div>
          <img class="logo" src="img/logo.webp" alt="PFL Insurance logo" />
        </div>
        <span id="menu-button" class="large-text">&darr;</span>
        <nav id="top-nav">
          <a class="nav-item" href="http://localhost:3000/index.html">Home</a>
          <a class="nav-item" href="http://localhost:3000/about.html">About</a>
          <a class="nav-item" href="http://localhost:3000/products.html">Products</a>
          <a class="nav-item active" href="http://localhost:3000/#home">Partners</a>
          <a class="nav-item" href="http://localhost:3000/index.html#contact">Contacts</a>
          <a class="nav-item focus" href="http://localhost:3000/order.html">Order Now</a>
        </nav>
      </div>
    </header>
    <section>
      <span class="medium-text">New Order</span>
      <p>Date: '.date('dd MM YYYY').'
       <p class="medium-text">Hello,</p>
       <p>There is a new request for <b>'.$subject.'</b> order number: <b>'.$order_number.'</b>. Kindly attend to '.$name.'\'s request ASAP</p>
      <h3>Orignal Message:</h3>
<p>'.$message.'</p>
<p>Name: <b>'.$name.'</b></p>
<p>Email: <b>'.$email.'</b></p>
<p>Phone: <b>'.$phone.'</b></p>

    </section>
    <footer>
      <div>
        <p>Quick Links</p>
        <nav id="nav-bottom">
          <a class="nav-item" href="http://localhost:3000/index.html#home">Home</a>
          <a class="nav-item" href="http://localhost:3000/about.html">About</a>
          <a class="nav-item" href="http://localhost:3000/products.html">Products</a>
          <a class="nav-item" href="http://localhost:3000/partners.html">Partners</a>
          <a class="nav-item" href="http://localhost:3000/order.html">Order Now</a>
        </nav>
      </div>
      <div class="text-left">
        <p>Address</p>
        <span
          >Avocado street,KAWE-Mzimuni <br />Near TPDF Golf Club <br />P.O Box
          75391, Dar es Salaam <br />E-mail: info@pflinsurance.co.tz
          <br />Phone: +255 753 123 283</span
        >
      </div>
      <div>
        <p>Stay Connected</p>
        <nav>
          <a class="nav-item" href="http://localhost:3000/https://instagram.com">Instagram</a>
          <a class="nav-item" href="http://localhost:3000/https://twitter.com">Twitter</a>
          <a class="nav-item" href="http://localhost:3000/https://linkedin.com">LinkedIn</a>
        </nav>
      </div>
    </footer>
  </body>
</html>
';
$html2 =  '<!DOCTYPE html>
<html lang="en">
  <head>
    <title>PFL Insurance Brokers - Orders</title>
    <meta
      name="description"
      content="At PFL Insurance, we work hard to provide you with the best experience liasing with your insurer. We dedicate our resources just to make sure you get the best cover policy."
    />
    <meta
      name="keyword"
      content="PFL Insurance, best cover insurance, insurance policy, insurance brokers in Dar es Salaam, insurance business"
    />
    <meta name="charset" content="utf-8" />
    <meta name="author" content="Landry Kapela" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="http://localhost:3000/img/favicon.png" rel="icon" />
    <link
      href="http://localhost:3000/css/main.css"
      rel="stylesheet"
    />
    <link
      href="http://localhost:3000/css/mobile.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <header>
      <div class="top-bar" id="home">
        <div>
          <img class="logo" src="img/logo.webp" alt="PFL Insurance logo" />
        </div>
        <span id="menu-button" class="large-text">&darr;</span>
        <nav id="top-nav">
          <a class="nav-item" href="http://localhost:3000/index.html">Home</a>
          <a class="nav-item" href="http://localhost:3000/about.html">About</a>
          <a class="nav-item" href="http://localhost:3000/products.html">Products</a>
          <a class="nav-item active" href="http://localhost:3000/#home">Partners</a>
          <a class="nav-item" href="http://localhost:3000/index.html#contact">Contacts</a>
          <a class="nav-item focus" href="http://localhost:3000/order.html">Order Now</a>
        </nav>
      </div>
    </header>
    <section>
      <span class="medium-text">New Order</span>
      <p>Date: '.date('dd MM YYYY').'
       <p class="medium-text">Dear '.$name.',</p>
       <p>We are happy to receive your order for <b>'.$subject.'</b>. Your order number: <b>'.$order_number.'</b> is being processed and we will get back to you ASAP</p>
       <p>Thank you for choosing PFL Insurance</p>
       <p>PFL Team</p>
      <h3>Orignal Message:</h3>
<p>'.$message.'</p>
<p>Name: <b>'.$name.'</b></p>
<p>Email: <b>'.$email.'</b></p>
<p>Phone: <b>'.$phone.'</b></p>

    </section>
    <footer>
      <div>
        <p>Quick Links</p>
        <nav id="nav-bottom">
          <a class="nav-item" href="http://localhost:3000/index.html#home">Home</a>
          <a class="nav-item" href="http://localhost:3000/about.html">About</a>
          <a class="nav-item" href="http://localhost:3000/products.html">Products</a>
          <a class="nav-item" href="http://localhost:3000/partners.html">Partners</a>
          <a class="nav-item" href="http://localhost:3000/order.html">Order Now</a>
        </nav>
      </div>
      <div class="text-left">
        <p>Address</p>
        <span
          >Avocado street,KAWE-Mzimuni <br />Near TPDF Golf Club <br />P.O Box
          75391, Dar es Salaam <br />E-mail: info@pflinsurance.co.tz
          <br />Phone: +255 753 123 283</span
        >
      </div>
      <div>
        <p>Stay Connected</p>
        <nav>
          <a class="nav-item" href="http://localhost:3000/https://instagram.com">Instagram</a>
          <a class="nav-item" href="http://localhost:3000/https://twitter.com">Twitter</a>
          <a class="nav-item" href="http://localhost:3000/https://linkedin.com">LinkedIn</a>
        </nav>
      </div>
    </footer>
  </body>
</html>
';
// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 
// Create email headers
$headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
mail('info@pflinsurance.co.tz',$subject,$html,$headers);
mail($email,$subject,$html2,$headers);
$result = array();
$result['status'] = "Success";
$result['message'] = "Message sent successfully";
echo json_encode($result);

?>