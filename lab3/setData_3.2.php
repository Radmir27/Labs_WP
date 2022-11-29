<?php
    $mysqli = new mysqli("localhost", "root", "", "comments");
    if ($mysqli->connect_errno) {
echo "Не удалось подключиться к БД";
}
    $email = $_GET['email'];
    $name = $_GET['name'];
    $message = $_GET['message'];
    $result = $mysqli->query(
        "INSERT INTO comm SET name='$name', email='$email', message='$message'"
    );
?>
