<?php

namespace App\Controllers;

use App\Controllers\Controller;
use PHPMailer\PHPMailer\PHPMailer;


class HomeController extends Controller
{
    public function index($request, $response, $args)
    {
        $gallery = json_decode(file_get_contents('resources/content/gallery.json'));

        return $this->view->render($response, 'home.twig', compact('gallery'));
    }

    public function post($request, $response, $args)
    {
        $params = $request->getParams();
        $mail = new PHPMailer;

        $name = $params['name'];
        $email = $params['email'];
        $subject = $params['subject'];
        $message = $params['message'];

        $mail->setFrom($email, $name);
        $mail->addAddress('contact@staging.darkroast.co', 'Wincrete');
        $mail->addReplyTo('contact@staging.darkroast.co', 'Wincrete');
        $mail->ReutrnPath='contact@staging.darkroast.co';

        $mail->isHTML(true);

        $body = 'Name: ' . $name . "<br/>" .
                'Email: ' . $email . "<br/>" .
                'Message: ' . $message;

        $mail->Subject = $subject;
        $mail->Body    = $body;
        $mail->AltBody = $body;

        if(!$mail->send()) {
            echo 'Message could not be sent.';
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
            //return $response->withRedirect('/');
        }

    }
}
