<?php
if(isset($_POST['submit'])) {
//To use this, you need the ID of your form elements to resemble what is written here. 
//If you need to you can change the values here to reflect your form


//write in your email here
$to = "ryan.jcoughlin@yahoo.com";

//This is so you know what the email is about
$subject = "Portfolio Contact";

//Name of the person who emailed you
$name_field = $_POST['name'];

//email of person
$email_field = $_POST['email'];
//this is what the person wants to tell you!
$message = $_POST['message'];
 
$body = "From: $name_field\n E-Mail: $email_field\n Message:\n $message";

//This tells the user that the email was sent. 
echo "Data has been submitted to $to!<br />Click here to go <a href='../index.html'>Home</a>";
mail($to, $subject, $body);

} else {
//You only see this message if something went wrong
echo "The Email Failed";

}

//For more info on php check out www.tizag.com or www.kirupa.com
?>
