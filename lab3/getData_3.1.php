<?php
    $mysqli = new mysqli("localhost", "root", "", "news");
    if ($mysqli->connect_errno) {
echo "Не удалось подключиться к БД";
}
    $g = $_GET['g'];
    $need_to_get = $_GET['need_to_get'];
    $result = $mysqli->query(
        "SELECT  id, name, descript, image
        FROM news ORDER BY id DESC LIMIT $g, $need_to_get");
    if ($result){
        while ($row = $result->fetch_array()){
            $id = $row['id'];
            $name = $row['name'];
            $descript = $row['descript'];
            $image = $row['image'];
            echo "<div class='blok'>";
            echo "<h3>$name</h3>";
            echo "<img width='500px' margin:auto src='img/$image'>";
            echo "<p>";
            echo "</img>";
            echo $descript;
            echo "</div>";
        }
    }
?>
