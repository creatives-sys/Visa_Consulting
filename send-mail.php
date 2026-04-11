<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = "neethukbj@gmail.com"; // 🔥 your email here
    $email_subject = "New Contact Form Submission: " . $subject;

    $body = "
    Name: $name\n
    Email: $email\n
    Phone: $phone\n
    Message:\n$message
    ";

    $headers = "From: $email";

    if(mail($to, $email_subject, $body, $headers)){
        echo "success";
    } else {
        echo "error";
    }
}
?>