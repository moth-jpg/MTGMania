//LOGIC FOR CHANGING TABS AND LOADING CARDS
$('.nav-link').on('click', function (e) {
    e.preventDefault();
    const tab = $(this).data('tab');
    // switch active class
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    // clear table
    $("#cards-table tbody").empty();

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

// GET ALL Lowryn Eclipsed CARDS
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

// GET SINGLE CARD
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
function getChartInfo(singleCard) {
           // ----------------------------
            // GET CHART DATA
            // ----------------------------
           const currentPrice = parseFloat(singleCard.prices.eur) || 1;
            // generate fake history (last 30 days)
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

// DOCUMENT READY
$(document).ready(function () {
    getAllFFCards(); // ONLY load one set by default
    $("#cards-table").on("click", ".card-info-btn", function () {    
        getCard(this); 
    });
})