<?php
    $mysqli = new mysqli("localhost", "root", "", "comments");
if ($mysqli->connect_errno) {
        echo "Не удалось подключиться к БД";
}
    $result = $mysqli->query(
        "SELECT name, email, message
        FROM comm");
    if ($result){
        while ($row = $result->fetch_array()){
            $name = $row['name'];
            $email = $row['email'];
            $message = $row['message'];
            echo "<h3>";
            echo sprintf("%s (%s)",$name, $email);
            echo "</h3>";
            echo "<p>";
            echo $message;
echo "</p>";
        }
    }
?>
