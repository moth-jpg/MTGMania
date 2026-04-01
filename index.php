<!DOCTYPE html>
<html>
<head>

	<meta charset="UTF-8">

	<title>MagicMania</title>

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>

	<div class="card col-md-8 mx-auto">
		<ul class="nav nav-tabs">
			<li class="nav-item">
				<a class="nav-link active" aria-current="page" data-tab="finalfantasy">Final Fantasy</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" data-tab="lowryn">Lowryn Eclipsed</a>
					</li>
						<li class="nav-item">
						<a class="nav-link" data-tab="EdgeOfEternities">Edge of Eternities</a>
					</li>
						<li class="nav-item">
						<a class="nav-link" data-tab="BloomBurrow">Bloom Burrow</a>
					</li>
					</li>
						<li class="nav-item">
						<a class="nav-link" data-tab="StrixHaven">Strixhaven</a>
					</li>
						<li class="nav-item">
						<a class="nav-link" data-tab="Innistrad">Innistrad</a>
					</li>
					<li class="nav-item">
						<a  href="cryptoportfolio.php">Crypto portfolio</a>
					</li>
		</ul>
		<table class="table" id="cards-table">
			<thead>
				<tr>
					<th>Image</th>
					<th>Name</th>
					<th hidden>ID</th>
					<th>Price (EUR)</th>
					<th>Type</th>
					<th>More info</th>
					<th>Add to Wallet</th>
				</tr>
			</thead>
			<tbody>
			
			</tbody>
		</table>
	</div>

	<template id="card-row-template">
		{{#data}}
			<tr>						
				<td><img src="{{image_uris.small}}" alt="{{name}}" width="100"></td>
				<td class="card-name">{{name}}</td>
				<td hidden>{{id}}</td>
				<td class="card-price">{{prices.eur}}</td>
				<td>{{type_line}}</td>
				<td>   <button class="btn btn-primary card-info-btn" 
							data-bs-toggle="modal" 
							data-bs-target="#cardModal"
							data-card-id="{{id}}">
							More Info
					</button>
				</td>	
				<td>
					<button type="button" 
					class="btn btn-primary btn-open-modal-magicfolio" 
					data-bs-toggle="modal" 
					data-bs-target="#cardModalWallet">
					Add to wallet
				</button>
				</td>					
			</tr>	
		{{/data}}
	</template>

	<template id="cards-magicfolio-template">
		{{.}}
			<tr>
			<td>{{name}}</td>
			<td>{{card_price}}</td>
			<td>{{amount_cards}}</td>
			<td>{{total_value}}</td>
			<td>
				<button class="btn btn-danger delete-card-btn" value="{{id}}">Delete</button>
			</td>
			</tr>
		{{/.}}
	</template>



	<!-- Card details modal -->
	<div class="modal fade" id="cardModal" tabindex="-1" aria-labelledby="cardModalLabel" aria-hidden="true">
	  <div class="modal-dialog modal-lg">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="cardModalLabel">Card details</h5>
	        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<div id="card-title">
					<!-- Populated dynamically -->
				</div>
					<div id="card-image">
						<!-- Populated dynamically -->
					</div>
				</br>
					</div>
						<div id="card-type">
						<!-- Populated dynamically -->
					</div>
					<div id="card-details">
					<!-- Populated dynamically -->
					</div>
						</br>
					<canvas id="priceChart">
						<!-- Price history chart will be rendered here -->
					</canvas>
						</br>
					<div id="card-purchase-TCGplayer">
					<!-- Populated dynamically -->
					</div>
					<div id="card-purchase-Cardhoarder">
					<!-- Populated dynamically -->
					</div>
				</div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
	      </div>
	    </div>
	  </div>
	</div>


	<!-- Card details modal -->
	<div class="modal fade" id="cardModalWallet" tabindex="-1" aria-labelledby="cardModalLabel" aria-hidden="true">
	  <div class="modal-dialog modal-lg">
	    <div class="modal-content">
	      <div class="modal-header">
	
			</div>
			<div class="modal-body">
				<div id="card-wallet-modal-body"></div>
			</div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
	      </div>
	    </div>
	  </div>
	</div>

	<!-- Modal -->
	<template id="cryptofolio-modal-template">
		<div class="modal-header">
			<h5 class="modal-title">
				<span id="modal-card-name">{{cardName}}</span>
			</h5>
			<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		</div>
		<div class="modal-body">
			Current price $ <span id="modal-card-price">{{cardPrice}}</span>
			<br />
			Amount: <input type="number" id="modal-amount-cards" value="1">
			<br />
			Total: <span id="modal-total-value">{{cardPrice}}</span>
			<br />
			<button type="button" class="btn btn-primary" id="js-add-coin-btn">Add to cryptofolio</button>
		</div>
	</template>

	<!-- jQuery -->
	<script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
	
	<!-- Bootstrap -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
	
	<!-- Mustache.js for templating -->
	<script src="https://cdn.jsdelivr.net/npm/mustache@4.1.0/mustache.min.js"></script>
	
	<!-- Chart.js for price history charts -->
	<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <!-- Custom js  -->
    <script src="main.js"></script>
</body>
</html>