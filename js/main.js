//example API (Docs): https://pro.coincap.io/api-docs
//get all coins
function getAllCards() {

	$.ajax({
		type: "GET",
		dataType: "json",
		type: "GET",
    	url: "https://api.scryfall.com/cards/search?q=set%3Afin&order=set",

		success: function (allCards) {

            cards = allCards.data;
            $.each(allCards.data, function (list) {
                $("#cards-table tbody").append("<tr><td>" + this.name + "</td><td>" + this.mana_cost + "</td><td>" + this.type_line + "</td><td><button class='card-info-btn'>More Info</button=> (selectedButton)></td></tr>");
            })
			console.log(allCards);

		}
	});

}


//function to get a single coin
function getCard(selectedButton) {

    // STEP 1: Get the selected coin ID
    // - Start from the clicked button (selectedButton)
    // - Go to the closest table row (tr) (use closest() and find())
    // - Inside that row, find the element with class "card-id"
    // - Get the text value of that element (use the text())
    // - Store this value in a variable called selectedCardId

    var selectedCardId = $(selectedButton).closest("tr").find(".card-id").text();

    // STEP 2: Create an AJAX GET request
    // - Use method GET
    // - Expect JSON data
    // - Build the URL like this:
    //   "https://rest.coincap.io/v3/assets/" + selectedCardId + "/?apiKey=YOUR_API_KEY"
    // - Send the request to the CoinCap API


    // STEP 3: When the request is successful
    // - Access the returned object (coin)
    // - Go to coin.data
    // - Get:
    //     coin.data.name
    //     coin.data.supply
    // - Append (add) the name and supply to the modal
    // - Show the modal (if needed)


}


$(document).ready(function () {

	//load all coins @ loading
	getAllCards();

	//On click to get a single coin
	$("#cards-table").on("click", ".card-info-btn", function () {
		alert();
		getCard(this);

	});


});


