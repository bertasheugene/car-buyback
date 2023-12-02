<?php 

$form = $_GET['form'];

if($form['name'] && $form['phone'] && !$form['email']){
    $to      = 'my.avtopodbor@gmail.com';
    $subject = 'Заявка autobestseller.by ' . $form['name'];
    $message = 'Имя: '. $form['name'] . ' Телефон: '.$form['phone']."\r\n";
    if($form['auto']){
        $message .= ' Машина: '.$form['auto'];
    }
    $headers = array(
        'From' => 'autobestseller.by@info.com',
        'Reply-To' => 'autobestseller.by@info.com',
        'X-Mailer' => 'PHP/' . phpversion()
    );
    
    mail($to, $subject, $message, $headers);

    
}



?>