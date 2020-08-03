<?php

// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
$title = "Новое обращение Best Tour Plan";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message
";

$titleSub = "Новая подписка с Best Tour Plan";
$bodySub  = "
<h2>Новое письмо</h2>
<b>У вас новая подписка с электронной почтой</b> $email<br>
";
// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'feldmeow2@gmail.com'; // Логин на почте
    $mail->Password   = 'Iloveyou1992:3:**'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('feldmeow2@gmail.com', 'feld meow'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('feldmeow@yandex.com');  


    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
if ($mail->send()) {
    header('Location: thankyou_message.html', true);
}



$mailSub = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mailSub->isSMTP();   
    $mailSub->CharSet = "UTF-8";
    $mailSub->SMTPAuth   = true;
    $mailSub->SMTPDebug = 2;
    $mailSub->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mailSub->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mailSub->Username   = 'feldmeow2@gmail.com'; // Логин на почте
    $mailSub->Password   = 'Iloveyou1992:3:**'; // Пароль на почте
    $mailSub->SMTPSecure = 'ssl';
    $mailSub->Port       = 465;
    $mailSub->setFrom('feldmeow2@gmail.com', 'feld meow'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mailSub->addAddress('feldmeow@yandex.com');  


    // Отправка сообщения
    $mailSub->isHTML(true);
    $mailSub->Subject = $titleSub;
    $mailSub->Body = $bodySub;    

// Проверяем отравленность сообщения
if ($mailSub->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mailSub->ErrorInfo}";
}

// Отображение результата
// if ($mailSub->send()) {
//     header('Location: thankyou_sub.html', true);
// }
