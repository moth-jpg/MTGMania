<?php
// proxy-news.php
// Enable CORS for your frontend
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
 
// !!! IMPORTANT !!!
// Replace 'YOUR_API_TOKEN_HERE' with the actual API token from your TheNewsAPI dashboard.
$api_token = '4fnSJ4zoepIHAKkSyX5INWe9BllX4NDZ5CZ3iiL0';
 
// The News API endpoint for top stories, requesting English, general news.
$url = "https://api.thenewsapi.com/v1/news/all?api_token={$api_token}&search=crypto,bitcoin,ethereum,blockchain&language=en";
// Initialize cURL session
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // For local development
 
// Execute the request
$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);
 
// Check for cURL errors
if ($response === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to fetch news from API']);
    exit;
}
 
// Pass the response back to the client
http_response_code($http_code);
echo $response;
?>