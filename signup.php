<?php

session_start();

$username = $_POST['username'];
$fullname = $_POST['fullname'];
$class = $_POST['class'];
$passw = $_POST['passw'];
$passw2 = $_POST['passw2'];
$email = $_POST['email'];


if(empty($username) ||
    empty($fullname) ||
    empty($class) ||
    empty($passw) ||
    empty($passw2) ||
    empty($email)){
        $_SESSION['messages'][]= 'Minden mező kitöltése kötelező!';
        header('Location: registration.php');
        exit;
};

if($passw !== $passw2){
    $_SESSION['messages'][]= 'A két jelszó nem egyezik meg!';
    header('Location: registration.php');
    exit;
};


try{
    $conn = new PDO('sqlite:mydb.sq3');
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("SELECT * FROM users WHERE user_name = :username OR email = :email");
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':email', $email);
    $result = $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    if(!empty($result)){
        $_SESSION['messages'][]= 'Létező felhasználó/email cím';
        header('Location: registration.php');
        exit;
    }else{
        $stmt = $conn->prepare("INSERT INTO users (user_name, full_name, class, password,  email) VALUES (:username, :fullname, :class, :passw, :email)");
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':fullname', $fullname);
        $stmt->bindParam(':class', $class);
        $stmt->bindParam(':passw', $passw);
        $stmt->bindParam(':email', $email);
        $result = $stmt->execute();
    }
    
    
}catch (PDOException $e){
    $_SESSION['messages'][]= 'Connection failed: ' . $e->getMessage();
    header('Location: registration.php');
    exit;
}

if($result){
    $_SESSION['token'] = hash('sha256', uniqid());
    
   /* $message= sprintf("Kedves %s! Kérlek erősítsd meg regisztrációdat a Hacknikum rendszerbe! http://localhost:8000/confirm.php%s", $fullname, http_build_query([
        'token' => $_SESSION['token'],
        'email' => $email
    ])
        );*/
    $header = "From: ";
    $message = "próba";
    $res = mail("balazsnad@gmail.com", "Regisztráció a Hacknikum rendszerbe!", $message, $header);
    $_SESSION['messages'][]= $res;
    header('Location: registration.php');
    exit;
}




$conn = null;

?>
