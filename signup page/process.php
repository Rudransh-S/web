<?php
include('../common/common.php');
    
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    //$text = $_POST["text"];
    //$Sno = 1; // Assuming a default value for demonstration
    $data= "2";
    echo json_encode($data);
    echo json_encode(['status' => 'success', 'message' => 'Data saved successfully!']);

    $host = "localhost";
    $dbname = "text";
    $username = "fire";
    $password = "fire";}

