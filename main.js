// LOGIC FOR CHANGING TABS AND LOADING CARDS
// Handles navigation between different MTG card sets
$('.nav-link[data-tab]').on('click', function (e) {
    e.preventDefault();
    const tab = $(this).data('tab');
    // switch active class
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    // clear table body
    $('#cards-table tbody').empty();

    if (tab === 'finalfantasy') {
        getAllFFCards();
    } else if (tab === 'lowryn') {
        getAllLowrynCards(); 
    }
    else if (tab === 'EdgeOfEternities') {
        getAllEdgeOfEternitiesCards(); 
    }
    else if (tab === 'BloomBurrow') {
        getAllBloomBurrowCards(); 
    }
    else if (tab === 'StrixHaven') {
        getAllStrixHavenCards(); 
    }
     else if (tab === 'Innistrad') {
        getAllInnistradCards(); 
    }

});

// GET ALL FINAL FANTASY CARDS
function getAllFFCards() { 
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api.scryfall.com/cards/search?q=set:fin&order=set",
        success: function (data) {
            console.log(data.data);
            var template = $("#card-row-template").html();
            var renderTemplate = Mustache.render(template, data);
            $("#cards-table tbody").append(renderTemplate);
        },
        error: function (err) {
            console.error("Error loading all cards:", err);
        }
    });
}

// GET ALL Lowryn Eclipsed CARDS
function getAllLowrynCards() { 
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api.scryfall.com/cards/search?q=set:ecl&order=set",
        success: function (data) {
            console.log(data.data);
            var template = $("#card-row-template").html();
            var renderTemplate = Mustache.render(template, data);
            $("#cards-table tbody").append(renderTemplate);
        },
        error: function (err) {
            console.error("Error loading all cards:", err);
        }
    });
}

// GET ALL Edge of Eternities CARDS
function getAllEdgeOfEternitiesCards() { 
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api.scryfall.com/cards/search?q=set:eoe&order=set",
        success: function (data) {
            console.log(data.data);
            var template = $("#card-row-template").html();
            var renderTemplate = Mustache.render(template, data);
            $("#cards-table tbody").append(renderTemplate);
        },
        error: function (err) {
            console.error("Error loading all cards:", err);
        }
    });
}

// GET ALL Bloom Burrow CARDS
function getAllBloomBurrowCards() { 
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api.scryfall.com/cards/search?q=set:blb&order=set",
        success: function (data) {
            console.log(data.data);
            var template = $("#card-row-template").html();
            var renderTemplate = Mustache.render(template, data);
            $("#cards-table tbody").append(renderTemplate);
        },
        error: function (err) {
            console.error("Error loading all cards:", err);
        }
    });
}

// GET ALL Strixhaven CARDS
function getAllStrixHavenCards() { 
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api.scryfall.com/cards/search?q=set:sta&order=set",
        success: function (data) {
            console.log(data.data);
            var template = $("#card-row-template").html();
            var renderTemplate = Mustache.render(template, data);
            $("#cards-table tbody").append(renderTemplate);
        },
        error: function (err) {
            console.error("Error loading all cards:", err);
        }
    });
}

// GET ALL Innistrad CARDS
function getAllInnistradCards() { 
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api.scryfall.com/cards/search?q=set:inr&order=set",
        success: function (data) {
            console.log(data.data);
            var template = $("#card-row-template").html();
            var renderTemplate = Mustache.render(template, data);
            $("#cards-table tbody").append(renderTemplate);
        },
        error: function (err) {
            console.error("Error loading all cards:", err);
        }
    });
}

// GET SINGLE CARD DETAILS
// Fetches detailed information for a specific card and displays it
function getCard(selectedButton) {
    var $button = $(selectedButton);
    var cardId = $button.data("card-id");
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api.scryfall.com/cards/" + cardId,
        success: function (singleCard) {
            $("#card-title").html(singleCard.name);
            $("#card-image").html('<img src="' + (singleCard.image_uris?.small || '') + '">');
            $("#card-type").html(singleCard.type_line);
            $("#card-details").html(singleCard.oracle_text);
            $("#card-purchase-TCGplayer").html('<a href="' + singleCard.purchase_uris?.tcgplayer + '" target="_blank">TCGplayer</a>');
            $("#card-purchase-Cardhoarder").html('<a href="' + singleCard.purchase_uris?.cardhoarder + '" target="_blank">Cardhoarder</a>');
            
            getChartInfo(singleCard); // unified
        }   
    });
}

// GET CHART DATA
// Creates mock price history data for the last 7 days
function getChartInfo(singleCard) {
           const currentPrice = parseFloat(singleCard.prices.eur) || 1;
            // generate fake history (last 7 days)
            const dateArray = [];
            const priceArray = [];
            for (let i = 7; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            dateArray.push(date.toISOString().split('T')[0]);
            // small random variation
            const variation = (Math.random() - 0.5) * 0.5;
            priceArray.push((currentPrice + variation).toFixed(2));
        }
        generateChart(dateArray, priceArray);
}

// GENERATE CHART
// Creates a Chart.js line chart with the price data
function generateChart(dateArray, priceArray){
    const ctx = document.getElementById('priceChart').getContext('2d');
    // Destroy old chart if exists
    if (window.priceChartInstance) {
        window.priceChartInstance.destroy();
    }
    window.priceChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dateArray,
            datasets: [{
                label: "Price",
                data: priceArray,
                borderColor: '#3e95cd',
                fill: false,
                tension: 0.1,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: true } },
            scales: {
                x: { type: 'category', title: { display: true, text: 'Date' } },
                y: { type: 'linear', title: { display: true, text: 'Price' } }
            }
        }
    });
}

// OPEN MODAL AND POPULATE CARD INFO
// Prepares the add-to-portfolio modal with card details
function getCardInfo(selectedButton) {
	//get the value from the table
	var cardName = $(selectedButton).closest("tr").find(".card-name").text();
	var cardPrice = $(selectedButton).closest("tr").find(".card-price").text();
    $("#amount-cards").val(1);       // default to 1
    $("#total-value").text($("#card-price").text());

	//place the crypto name and price in an object
	selectedInfo = {cardName: cardName, cardPrice: cardPrice}
	//step 1 get the template
     var template = $("#cryptofolio-modal-template").html();
	//step 2 Render output with Mustache.js
    var renderTemplate = Mustache.render(template, selectedInfo);	
	//step 3 append the data to the body
      $("#card-wallet-modal-body").html(renderTemplate);
}

// ADD CARD TO PORTFOLIO DATABASE
// Saves a new card to the user's Magicfolio collection
function addCard() {
	//cardName
	var cardName = $("#modal-card-name").text();
	//cardPrice
    var cardPrice = $("#modal-card-price").text();
	//amountCards
    var amountCards = $("#modal-amount-cards").val();
	//totalValue
    var totalValue = (parseFloat(cardPrice) * parseInt(amountCards)).toFixed(2);

	$.ajax({
		type: "POST",
		url: "include/add_coins_db.php",
		data: {
			card_name: cardName,
			//cardPrice
			card_price: cardPrice,
			//amountCards
			amount_cards: amountCards,
			//totalValue
			total_value: totalValue
		},
		success: function (data) {
			alert("Card added to Magicfolio successfully!");
			// Close modal if using Bootstrap modal
			$("#card-wallet-modal").modal("hide");
			// Reload the portfolio to show new card
			getAllCardsPortfolio();
		},
		error: function(err){
			console.error("Error adding card:", err);
			alert("Failed to add card. Please try again.");
		}
	})
}

// LOAD PORTFOLIO FROM DATABASE
// Fetches and displays all cards in user's Magicfolio
function getAllCardsPortfolio(){
	$.ajax({
		type: "GET",
		url: "include/get_coins_db.php",
		dataType: "json",
		success: function (data) {
	    var template = $("#cards-magicfolio-template").html();
        // Render template with data
        var rendered = Mustache.render(template, data);
        // Append to table
        $("#magic-folio-table tbody").html(rendered);
		}
	})
}

// SAVE CARD CHANGES TO DATABASE
// Updates the amount of cards for an existing portfolio entry
function saveCard(button){
    var row = $(button).closest("tr");
    var cardId = $(button).val();
    var amountCards = row.find(".amount-input").val();
    var cardPrice = parseFloat(row.find("td:nth-child(4)").text());
    var totalValue = (cardPrice * amountCards).toFixed(2);

    $.ajax({
        type: "POST",
        url: "include/save_coin_db.php", // changed to save_coin.php
        data: {
            card_id: cardId,
            amount_cards: amountCards,
            total_value: totalValue,
            card_price: cardPrice 
        },
        success: function(response){
            console.log(response);
            row.find(".price-total").text(totalValue);
            alert("Card updated successfully!");
        },
        error: function(err){
            console.error("Error saving card:", err);
        }
    });
}

// DELETE CARD FROM PORTFOLIO
// Removes a card from the user's Magicfolio collection
function deleteCard(getDeleteButton){ 
    var cardId = $(getDeleteButton).val();
    var row = $(getDeleteButton).closest("tr");
    $.ajax({
        type: "POST",
        url: "include/delete_card_db.php",
        data: { id: cardId },
        success: function(response){
            console.log(response);
            row.remove();
        },
        error: function(err){
            console.error("Error deleting card:", err);
        }
    });
}

// GET EXCHANGE RATE
// Fetches current BTC exchange rate (API key needed)
function getExchange(){

    $.ajax({
        type: "GET",
        dataType: "json",
        type: "GET",
        url: "https://rest.coinapi.io/v3/exchangerate/BTC?<YOUR-API-KEY>",
        success: function(data) {
            console.log(data);
        },
        error: function(err) {
            console.error("Error fetching exchange rate:", err);
        }
    });
      
}

// LOAD CRYPTO NEWS
// Fetches and displays cryptocurrency news articles
function loadNews() {
    $.ajax({
        type: "GET",
        dataType: "json",
        type: "GET",
        url: "proxy-news.php",
        success: function (response) {
            //TRANSFORM DATA INTO A FORMAT MUSTACHE UNDERSTANDS 
            let model = {
                data: response.data.map(item => ({
                    title: item.title,
                    description: item.description,
                    url: item.url,
                    image_url: item.image_url
                }))
            };
            let template = $("#news-template").html();
            let html = Mustache.render(template, model);
            $("#news-container").html(html);
        },
        error: function (err) {
            console.error("News error:", err);
        }
    });
}

// LOAD CRYPTO EXCHANGES
// Fetches and displays list of cryptocurrency exchanges
function getAllExchanges() {
    if ($("#exchanges-list").length === 0) {
        return;
    }
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://rest.coincap.io/v3/exchanges",
        success: function (response) {
            var exchanges = response.data || [];

            exchanges = exchanges.map(function (exchange) {
                exchange.volumeUsd = exchange.volumeUsd
                    ? Number(exchange.volumeUsd).toLocaleString(undefined, {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                      })
                    : "N/A";
                return exchange;
            });

            var template = $("#exchange-card-template").html();
            var renderTemplate = Mustache.render(template, { data: exchanges });

            $("#exchanges-list").html(renderTemplate);
            $("#exchange-loading").hide();
        },
        error: function () {
            $("#exchange-loading").hide();
            $("#exchange-error").removeClass("d-none");
        },
    });
}

// DOCUMENT READY - INITIALIZE APP
// Sets up all event handlers and loads initial data when page loads
$(document).ready(function () {
    // Load default card set on page load
    getAllFFCards(); 

    // Load user's Magicfolio cards
	getAllCardsPortfolio();

    // Load cryptocurrency exchange rates
    getExchange();

    // Load crypto news
    loadNews();

    // Load crypto exchanges list
    getAllExchanges();

    // EVENT HANDLERS
    
    // Show detailed card information when info button clicked
    $("#cards-table").on("click", ".card-info-btn", function () {    
        getCard(this); 
    });

    // Add card to portfolio when modal button clicked
	$(document).on("click", "#js-add-coin-btn", function () {
		addCard();
	});
	
    // Save card amount changes in portfolio
	$(document).on("click", ".save-card-btn", function () {
		saveCard(this);
	});   
    
    // Open add-to-portfolio modal
	$(document).on("click", ".btn-open-modal-magicfolio", function () {
		getCardInfo(this);
	});

    // Update total value in modal as user changes amount
    $(document).on("input", "#modal-amount-cards", function() {
        var amount = parseInt($(this).val()) || 0;
        var price = parseFloat($("#modal-card-price").text()) || 0;
        var total = (amount * price).toFixed(2);
        $("#modal-total-value").text(total);
    });

    // Update total value in portfolio table as user changes amount
    $(document).on("input", ".amount-input", function(){
        var row = $(this).closest("tr");
        var cardPrice = parseFloat(row.find("td:nth-child(4)").text());
        var amount = parseInt($(this).val()) || 0;
        var total = (cardPrice * amount).toFixed(2);
        row.find(".price-total").text(total);
    });

    // Delete card from portfolio
    $(document).on("click", ".btn-danger", function(){
        var cardId = $(this).val(); // get card ID from button value
        var row = $(this).closest("tr"); // reference the row to remove it later

        $.ajax({
            type: "POST",
            url: "include/delete_card_db.php", 
            data: { id: cardId },
            success: function(response){
                console.log(response);
                row.remove(); // remove row from table immediately
            },
            error: function(err){
                console.error("Error deleting card:", err);
            }
        });
    });
})