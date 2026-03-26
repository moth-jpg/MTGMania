<?php
include('db.php');

if(isset($_POST['card_id'])) {
    $cardId = intval($_POST['card_id']);
    $amount = intval($_POST['amount_cards']);
    $totalValue = floatval($_POST['total_value']);

    $update = "UPDATE cryptofolio SET amount = $amount, totalValue = $totalValue WHERE id = $cardId";

    if(mysqli_query($con, $update)){
        echo "Card updated successfully";
    } else {
        echo "Error updating card: " . mysqli_error($con);
    }
} else {
    echo "No card_id provided for update.";
}
?>