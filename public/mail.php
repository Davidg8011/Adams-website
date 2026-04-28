<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Try to get JSON input first
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if ($data) {
        $fullName = $data['fullName'] ?? '';
        $emailAddress = $data['emailAddress'] ?? '';
        $serviceLocation = $data['serviceLocation'] ?? '';
        $projectDetails = $data['projectDetails'] ?? '';
    } else {
        // Fallback to standard POST data
        $fullName = $_POST['fullName'] ?? '';
        $emailAddress = $_POST['emailAddress'] ?? '';
        $serviceLocation = $_POST['serviceLocation'] ?? '';
        $projectDetails = $_POST['projectDetails'] ?? '';
    }

    $to = "info@advanced-earthworks.com";
    $subject = "New Contact Form Submission from " . $fullName;
    
    $message = "You have received a new message from your website contact form.\n\n";
    $message .= "Here are the details:\n";
    $message .= "Name: $fullName\n";
    $message .= "Email: $emailAddress\n";
    $message .= "Service Location: $serviceLocation\n";
    $message .= "Project Details:\n$projectDetails\n";
    
    // Make sure we have a valid from email format for Hostinger
    $domain = $_SERVER['SERVER_NAME'];
    if ($domain === 'localhost' || empty($domain)) {
        $domain = "advanced-earthworks.com";
    }
    
    $headers = "From: noreply@" . $domain . "\r\n";
    $headers .= "Reply-To: $emailAddress\r\n";
    
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true, "message" => "Email sent successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Failed to send email"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
}
?>
