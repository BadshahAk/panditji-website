<?php
// Check if the form is submitted using POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize the data
    $name = htmlspecialchars(trim($_POST['name']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $email = htmlspecialchars(trim($_POST['email']));
    $service = htmlspecialchars(trim($_POST['service']));
    $date = htmlspecialchars(trim($_POST['date']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate required fields
    if (empty($name) || empty($phone) || empty($email) || empty($service) || empty($date)) {
        echo "Please fill in all required fields.";
        exit();
    }

    // Basic email validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Please enter a valid email address.";
        exit();
    }

    // Send email to admin
    $to = "andyak1294@gmail.com";  // Your email address
    $subject = "New Booking Submission";
    $body = "You have received a new booking submission.\n\n";
    $body .= "Name: $name\n";
    $body .= "Phone: $phone\n";
    $body .= "Email: $email\n";
    $body .= "Service: $service\n";
    $body .= "Date: $date\n";
    $body .= "Message: $message\n";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        // Send confirmation email to user
        $confirmation_subject = "Booking Confirmation";
        $confirmation_body = "Dear $name,\n\n";
        $confirmation_body .= "Thank you for your booking. Here are the details:\n\n";
        $confirmation_body .= "Service: $service\n";
        $confirmation_body .= "Date: $date\n\n";
        $confirmation_body .= "We will get back to you shortly.\n\n";
        $confirmation_body .= "Regards,\nPanditji Website Team";
        mail($email, $confirmation_subject, $confirmation_body, $headers);

        // Success message
        echo "<h1>Booking Submitted Successfully!</h1>";
        echo "<p>A confirmation email has been sent to you.</p>";
    } else {
        echo "<h1>Error</h1>";
        echo "<p>There was an error while submitting your booking. Please try again later.</p>";
    }
} else {
    echo "Invalid request method.";
}
?>