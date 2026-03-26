<?php
include('db.php');

$id = $_POST['id'];

$delete = "DELETE FROM cryptofolio WHERE id = $id";
if(mysqli_query($con, $delete)){
    echo "Card deleted successfully";
} else {
    echo "Error deleting card: " . mysqli_error($con);
}
?>