<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>contact email</title>
</head>
<body>
    <h2>You have recieved an email</h2>
    <p>Name: {{ $mailData['name'] ?? 'N/A' }}</p>
    <p>Email: {{ $mailData['email'] ?? 'N/A' }}</p>
    <p>Phone: {{ $mailData['phone'] ?? 'N/A' }}</p>
    <p>Subject: {{ $mailData['subject'] ?? 'N/A' }}</p>
    <p>message:</p>
    <p>Message: {{ $mailData['message'] ?? 'N/A' }}</p>

    <p>thanks</p>
</body>
</html>