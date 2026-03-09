//get all cards
function getAllCards() { 
   
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api.scryfall.com/cards/search?q=set:fin&order=set",
        success: function (data) {
            console.log(data.data);
            // cards = data;
            var template = $("#card-row-template").html();
            var renderTemplate = Mustache.render(template, data);
            $("#cards-table tbody").append(renderTemplate);
        }
    });
}

//function to get a single card
function getCard(selectedButton) {
    var $button = $(selectedButton);
    var cardId = $button.data("card-id");
    //var selectedCardId = $(selectedButton).closest("tr").find(".card-id").text();

    $.ajax({
        type: "GET",
        dataType: "json",
        type: "GET",
    	url: "https://api.scryfall.com/cards/" + cardId,

        success: function (singleCard) {
            console.log("Card loaded:", singleCard.name);
            $("#card-title").html('' + singleCard.name + '' );
            $("#card-image").html('<img src="' + (singleCard.image_uris.small || '') + '" alt="Card Image">');
            $("#card-type").html('' + singleCard.type_line + '' );
            $("#card-details").html('' + singleCard.oracle_text + '' );
            $("#card-purchase-TCGplayer").html('<a href="' + singleCard.purchase_uris.tcgplayer + '" target="_blank">- TCGplayer</a>');
            $("#card-purchase-Cardhoarder").html('<a href="' + singleCard.purchase_uris.cardhoarder + '" target="_blank">- Cardhoarder</a>');
           // const ApiUrl = "https://api.justtcg.com/v1/cards?scryfallId=" + singleCard.id + "&include_price_history=true&price_history_duration=90d&api_key=tcg_7565ff92f20e40b3b3f168b705e929a2";
		}        
    });

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
		getCard(this);
	});
});

