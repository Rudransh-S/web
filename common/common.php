<?php
    $host = "localhost";
    $dbname = "text";
    $username = "fire";
    $password = "fire";
    
    
    
    //for connecting the sql  
    $conn = mysqli_connect($host, $username, $password, $dbname);
    if (mysqli_connect_errno()) {
        echo json_encode(['status' => 'error', 'message' => 'Connection error: ' . mysqli_connect_error()]);
        exit;
    }


    // check if the user is logined in or not
function check_login_in($conn){
    if (isset ($_SESSION['user_id'])){
        $id=$_SESSION['user_id']; 
        $qurry="select * from user where user_id ='$id' limit = 1";
        $result=mysqli_query($conn,$qurry);
        if ($result && mysqli_num_rows($result)> 0){
             $user_data=mysqli_fetch_assoc($result);
             return $user_data;
        }
    }
    //redirect to login page


    // i am make that part
    die;


}
