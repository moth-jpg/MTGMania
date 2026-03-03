<!DOCTYPE html>
<html>
<head>

	<meta charset="UTF-8">

	<title>CryptoMania - Workshop - API</title>

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
<div class="dropdown" data-bs-theme="light">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonLight" data-bs-toggle="dropdown" aria-expanded="false">
    Default dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonLight">
    <li><a class="dropdown-item active" href="#">Final Fantasy</a></li>
    <li><a class="dropdown-item" href="#">Lowryn Eclipsed</a></li>
  </ul>
</div>

	<div class="container">
		<table class="table" id="cards-table">
			<thead>
				<tr>
					<td>Image</th>
					<th>Name</th>
					<th>Price (EUR)</th>
					<th>Type</th>
					<th>More info</th>
				</tr>
			</thead>
			<tbody>
				
			</tbody>
		</table>
	</div>

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
				<canvas id="priceChart" width="400" height="200">
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
	<!-- Change page -->
	<div id="pagination" style="margin-top: 20px; text-align: center;">
		<button id="prev-page" class="btn btn-secondary" disabled>Previous</button>
		<span id="page-info">Page 1 of ?</span>
		<button id="next-page" class="btn btn-secondary">Next</button>
	</div>


	<!-- jQuery -->
	<script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
	
	<!-- Bootstrap -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <!-- Custom js  -->
    <script src="js/main.js"></script>
</body>
</html>