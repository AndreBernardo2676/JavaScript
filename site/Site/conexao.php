<?php
$host = "localhost";
$username = "root";
$password = "";
$bd = "inicio";

$mysqli = new mysqli($host, $username, $password, $bd);

if ($mysqli->connect_errno) {
    echo"Falha ao conectar: (" . $mysqli->connect_errno . ") " . $mysqli->connect_errno;
}

?>
