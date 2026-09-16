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

<body class="d-flex flex-column min-vh-100">
    <!-- TEMPLATE FOR SHOWING ALL EXCHANGE DATA -->
    <main class="flex-grow-1 container py-4">
        <h1 class="mb-4">Cryptocurrency Exchanges</h1>
        <div id="exchange-loading" class="text-center my-5">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading exchanges...</span>
            </div>
        </div>
        <div id="exchange-error" class="alert alert-danger d-none" role="alert">
            Unable to load exchanges. Please try again later.
        </div>
        <div id="exchanges-list" class="row g-4"></div>
    </main>

	<!-- TEMPLATE FOR SHOWING ALL EXCHANGE DATA -->
    <template id="exchange-card-template">
        {{#data}}
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">{{rank}}. {{name}}</h5>
                    <p class="card-text mb-1"><strong>Volume USD:</strong> {{volumeUsd}}</p>
                    <p class="card-text mb-3"><strong>Website:</strong> <a href="{{exchangeUrl}}" target="_blank" rel="noopener noreferrer">{{exchangeUrl}}</a></p>
                    <div class="mt-auto">
                        <a class="btn btn-outline-primary btn-sm" href="{{exchangeUrl}}" target="_blank" rel="noopener noreferrer">Visit official website</a>
                    </div>
                </div>
            </div>
        </div>
        {{/data}}
    </template>

    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.1.min.js"
        integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>

    <!-- Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>

    <!-- Mustache -->
    <script src="https://unpkg.com/mustache@latest/mustache.min.js"></script>

    <!-- Custom js -->
    <script src="main.js"></script>
</body>

</html>