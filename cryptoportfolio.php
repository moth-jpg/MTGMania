<!DOCTYPE>
<html>
<head>

	<meta charset="UTF-8">

	<title>CryptoMania</title>

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">


</head>
<body>
	<!-- NAVBAR TOP OF PAGE-->
	<div class="card col-md-8 mx-auto">
		<ul class="nav nav-tabs">
			<li class="nav-item">
				<a class="nav-link" href="index.php">Home</a>
			</li>
			<li class="nav-item">
				<a class="nav-link active" href="cryptoportfolio.php">Crypto portfolio</a>
			</li>
		</ul>
		<table class="table" id="magic-folio-table">
			<thead>
				<tr>
					<th>Id</th>
					<th>Bought on</th>
					<th>Name</th>
					<th>Price</th>
					<th>Amount</th>					
					<th>Total</th>
					<th>Save</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
			</tbody>
			<tfoot>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td id="total-value"></td>
					<td></td>
					<td></td>
				</tr>
			</tfoot>
		</table>
	</div>

	<template id="cards-magicfolio-template">
		{{#.}}
			<tr>
				<td>{{id}}</td>
				<td>{{bought_on}}</td>
				<td>{{name}}</td>
				<td >{{price}}</td>
				<td><input type="number" value="{{amount}}" class="amount-input" min="0" /></td>
				<td class="price-total">{{totalValue}}</td>
				<td><button type="button" class="btn btn-warning save-card-btn" value="{{id}}">Save</button></td>
				<td><button type="button" class="btn btn-danger" value="{{id}}">Delete</button></td>
			</tr>
		{{/.}}
	</template>


	<!-- jQuery -->
	<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

	<!-- Bootstrap -->
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.2/js/bootstrap.bundle.min.js" integrity="sha384-LtrjvnR4Twt/qOuYxE721u19sVFLVSA4hf/rRt6PrZTmiPltdZcI7q7PXQBYTKyf" crossorigin="anonymous"></script>	

	<!-- Mustache JS -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.3.0/mustache.js"></script>

	<!-- Chart JS -->
	<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    
    <!-- Custom js  -->
	<script src="main.js"></script>
</body>
</html>