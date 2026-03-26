<?php
include('db.php');

if(isset($_POST['card_name'])) {
    $name = $_POST['card_name'];
    $price = floatval($_POST['card_price']);
    $amount = intval($_POST['amount_cards']);
    $totalValue = $price * $amount;

    $insert = "INSERT INTO cryptofolio (name, price, amount, totalValue, bought_on) 
               VALUES ('$name', '$price', '$amount', '$totalValue', NOW())";

    if(mysqli_query($con, $insert)){
        echo "Card added successfully";
    } else {
        echo "Error adding card: " . mysqli_error($con);
    }
} else {
    echo "No card data provided for adding.";
}
?>