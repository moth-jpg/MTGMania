<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Crypto News</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
<div class="card col-md-8 mx-auto">
    <ul class="nav nav-tabs">
		<li class="nav-item">
			<a class="nav-link" href="index.php">Home</a>
		</li>
		<li class="nav-item">
			<a class="nav-link active" href="cryptoNews.php">Crypto News</a>
		</li>
	</ul>
</div>
<div class="container py-4">
    <h1 class="text-center mb-4">Latest Crypto News</h1>
    <div id="news-container" class="row"></div>

</div>

    <!-- MUSTACHE TEMPLATE -->
    <script id="news-template" type="x-tmpl-mustache">
    {{#data}}
        <div class="col-md-4 mb-3">
        <div class="card h-100 shadow-sm">

            <img src="{{image_url}}" class="card-img-top" style="height:180px; object-fit:cover;">

            <div class="card-body">

            <h5>{{title}}</h5>

            <p>{{description}}</p>

            <a href="{{url}}" target="_blank" class="btn btn-primary btn-sm">
                Read more
            </a>

            </div>

        </div>
        </div>
    {{/data}}
    </script>

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