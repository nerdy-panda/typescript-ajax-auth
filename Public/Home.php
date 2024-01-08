<?php require_once dirname(__DIR__)."/Includes/Bootstrap.php"; ?>
<?php 
    $hasUserId = isset($_SESSION['user']['id']);
    if($hasUserId)
        header('Location:panel.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
    <link rel="stylesheet" href="Css/Pages/Home.css" type="text/css">
    <script src="Js/Pages/Home/launcher.js" type="module"></script>
</head>
<body>
    <section id="notification-container"></section>
    <form action="">
        <section class="field-row">
            <label for="email">email :</label>
            <input type="text" id="email">
        </section>
        <section class="field-row">
            <label for="password">password :</label>
            <input type="text" id="password">
        </section>
        <section>
            <button type="submit" id="login-button">login</button>
            <button type="reset">reset</button>
        </section>
        <section id="loading">
            <img src="img/loading.svg" alt="loading">
        </section>
    </form>
</body>
</html>