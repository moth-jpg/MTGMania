// Global variables for pagination state
let currentPage = 1;
let totalPages = 1;
let nextPageUrl = null;
let prevPageUrls = [];  // Stack to go back

//get all cards
function getAllCards(selectedButton, pageUrl = null) {
    const url = pageUrl || "https://api.scryfall.com/cards/search?q=set:fin&order=set";
    $.ajax({
        type: "GET",
        dataType: "json",
        url: url,
        success: function (response) {
            // Update global pagination state
            nextPageUrl = response.has_more ? response.next_page : null;
            const pageSize = response.data ? response.data.length : 175; 
            totalPages = Math.ceil(response.total_cards / pageSize);  
            // Save current URL for "Previous"
            if (currentPage > 1 && !prevPageUrls.includes(url)) {
                prevPageUrls.push(url);
            }
            var tbody = $("#cards-table tbody");
            tbody.empty();  // Clear previous page
            $.each(response.data, function (list, card) {
                tbody.append(
                    "<tr>" +
                    "<td><img src='" + (card.image_uris?.small || '') + "' alt='Card Image'></td>" +
                    "<td>" + card.name + "</td>" +
                    "<td>" + (card.prices?.eur || 'N/A') + "</td>" +
                    "<td class='card-id'>" + card.id + "</td>" +
                    "<td>" + card.type_line + "</td>" +
                    "<td>" +
                    "<button class='btn btn-primary card-info-btn' data-bs-toggle='modal' data-bs-target='#cardModal'>More Info</button>" +
                    (selectedButton ? selectedButton : "") +
                    "</td>" +
                    "</tr>"
                );
            });
            // Update pagination UI
            $("#page-info").text(`Page ${currentPage} of ${totalPages}`);
            $("#prev-page").prop("disabled", currentPage === 1);
            $("#next-page").prop("disabled", !nextPageUrl);
        },
        error: function (xhr, status, error) {
            console.error("Error loading page:", status, error);
        }
    });
}

$(document).ready(function () {
    prevPageUrls = [];  // clear stack on page reload
    currentPage = 1;
    // Load first page immediately
    getAllCards();
    // SINGLE Next button handler
    $("#next-page").on("click", function () {
        if (nextPageUrl) {
            // Push CURRENT page URL before we change anything
            prevPageUrls.push(
                "https://api.scryfall.com/cards/search?q=set:fin&order=set&page=" + currentPage
            );
            // Now move forward
            currentPage++;
            // Polite small delay before next fetch
            setTimeout(function () {
                getAllCards(null, nextPageUrl);
            }, 200);  // ← 200 ms – safe and visible for testing; reduce to 100 later
        }
    });

    // SINGLE Previous button handler
    $("#prev-page").on("click", function () {
    if (currentPage > 1) {
        currentPage--;
        const backUrl = "https://api.scryfall.com/cards/search?q=set:fin&order=set&page=" + currentPage;
        setTimeout(function () {
            getAllCards(null, backUrl);
        }, 200);
    }
});
    // Card info button (unchanged)
    $("#cards-table").on("click", ".card-info-btn", function () {    
        getCard(this);
    });
});

//function to get a single card
function getCard(selectedButton) {
    var selectedCardId = $(selectedButton).closest("tr").find(".card-id").text();

    $.ajax({
        type: "GET",
        dataType: "json",
        type: "GET",
    	url: "https://api.scryfall.com/cards/" + selectedCardId,

        success: function (singleCard) {

            $("#card-title").html('' + singleCard.name + '' );
            $("#card-image").html('<img src="' + singleCard.image_uris.small + '" alt="Card Image">');
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


