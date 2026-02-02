<?php
$conn = mysqli_connect("localhost", "root", "", "popup_form");

if (!$conn) {
    die("Database connection failed: " . mysqli_connect_error());
}

