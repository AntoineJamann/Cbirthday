<!DOCTYPE html>
<html>
<head>
    <title>Joyeux Anniversaire - Tokamak</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }
        .container {
            position: relative;
            width: 400px;
            height: 400px;
        }
        #tokamak {
            width: 100%;
            height: auto;
            cursor: pointer;
        }
        #heart {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: red;
            font-size: 50px;
            cursor: pointer;
        }
        #message {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 0 20px rgba(0,0,0,0.3);
            text-align: center;
            font-size: 24px;
            z-index: 100;
        }
    </style>
</head>
<body>
    <div class="container">
        <img id="tokamak" src="https://www.eai.enea.it/images/3-2023/plastico-dtt_icona.jpg" alt="Tokamak" onclick="showMessage()">
        <div id="heart" onclick="showMessage()">❤️</div>
        <div id="message">
            <h1>Happy Birthday !</h1>
            <p>Have the best day !</p>
        </div>
    </div>

    <script>
        function showMessage() {
            document.getElementById('message').style.display = 'block';
        }
    </script>
</body>
</html>
