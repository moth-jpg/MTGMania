<!DOCTYPE html>
<html>
<head>

	<meta charset="UTF-8">

	<title>CryptoMania - Workshop - API</title>

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>

	<div class="container">
		<table class="table" id="cards-table">
			<thead>
				<tr>
					<th>Image</th>
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
	        <div id="card-details">
	          <!-- Populated dynamically -->
	        </div>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
	      </div>
	    </div>
	  </div>
	</div>


	<!-- jQuery -->
	<script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
	
	<!-- Bootstrap -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <!-- Custom js  -->
    <script src="js/main.js"></script>
</body>
</html>