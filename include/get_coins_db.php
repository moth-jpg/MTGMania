<?Php 
	
	header('Content-Type: application/json');

	include('db.php');

	$getAllCards = "SELECT * FROM cryptofolio";

	$resultGetAllCards = mysqli_query($con, $getAllCards);

	$allCardsArray = array(); 

	while ($rowAllCards = mysqli_fetch_assoc($resultGetAllCards)) {

		$allCardsArray[] = $rowAllCards;
	}
	
	
	echo json_encode($allCardsArray);
		 

?>