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
    <p>Name: {{$mailData['name']}}</p>
    <p>email: {{$mailData['email']}}</p>
    <p>Phone: {{$mailData['phone']}}</p>
    <p>Subject: {{$mailData['subject']}}</p>
    <p>message:</p>
    <p>{{$mailData['message']}}</p>

    <p>thanks</p>
</body>
</html>