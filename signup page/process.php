<?php
include('../common/common.php');
    
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    //$text = $_POST["text"];
    //$Sno = 1; // Assuming a default value for demonstration
    $data= "2";
    //echo json_encode($data);

    //echo json_encode(['status' => 'success', 'message' => $data]);
    $user_id=rand(100000,999999);
    $username=$_POST['username'];
    $password=$_POST['password'];
    rand(100000,999999);


    $host = "localhost";
    $dbname = "text";
    $username = "fire";
    $password = "fire";
    $conn=mysqli_connect($host,$username,$password,$dbname);
    if (mysqli_connect_errno()) {
        echo json_encode(['status' => 'error']);
        exit;
    }
    
    $sql="select * from encry;";
    $result=mysqli_query($conn,$sql);
    $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode(['status'=>'success','result'=> $data]);
    
    
    //$stmt = mysqli_stmt_init($conn);
    //mysqli_stmt_bind_param($stmt, 'issi', );


}

