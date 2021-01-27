<?php
session_start();

if(empty($_SESSION['token'])){
    $_SESSION['messages'][] = "Lejárt munkamenet!";
    header('Location: registration.php');
    exit;
};

var_dump($_GET);
?>