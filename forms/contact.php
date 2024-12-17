<?php
$name = $_POST['name'];
$subject = $_POST["tel"];
$email = $_POST["email"];
$message = $_POST["message"];


require "./vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);
$mail ->isSMTP();
$mail->SMTPAuth=true;

//server info

//$mail->SMTPDebug = 2;

$mail->Host="smtp.gmail.com";
$mail->SMTPSecure="tls";
$mail->Port=587;

//personal details

$mail->Username="skymaxtechagencies@gmail.com";
$mail->Password="spekjbctwrijtlfi";

$mail->setFrom($email, $name);
$mail->addAddress("skymaxtechagencies@gmail.com", "EvansMax");

$mail->Subject=$subject;
$mail->Body="Name : {$name} \n\n Email : {$email} \n\n Message : {$message}";

if ($mail->send()) {
    header("location:info.html");

}else{
    echo "Error::".$mail->ErrorInfo;
}
#header("location:info.html");

?>