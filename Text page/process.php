<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $text = $_POST["text"];
    $Sno = 1; // Assuming a default value for demonstration

    $host = "localhost";
    $dbname = "text";
    $username = "fire";
    $password = "fire";

    // Create database connection
    $conn = mysqli_connect($host, $username, $password, $dbname);
    if (mysqli_connect_errno()) {
        echo json_encode(['status' => 'error', 'message' => 'Connection error: ' . mysqli_connect_error()]);
        exit;
    }

    // SQL query with placeholders
    $sql = "update text set words=? where Srno = ?;";
    $stmt = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($stmt, $sql)) {
        echo json_encode(['status' => 'error', 'message' => 'SQL error: ' . mysqli_error($conn)]);
        exit;
    }

    // Bind parameters and execute statement
    mysqli_stmt_bind_param($stmt, 'si', $text,$Sno);
    if (mysqli_stmt_execute($stmt)) {
        echo json_encode(['status' => 'success', 'message' => 'Data saved successfully!']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Execution error: ' . mysqli_stmt_error($stmt)]);
    }
    
    mysqli_stmt_close($stmt);
    mysqli_close($conn);

}

