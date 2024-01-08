<?php require_once dirname(__DIR__,1).'/Includes/Bootstrap.php'; ?>
<?php 
    if(!isset($_SESSION['user']))
        header("Location:Home.php");
?>
<?php
    $userId = $_SESSION['user']['id'];
    $query = 'select `name` from `users` where `id`=:id limit 1; ';
    $statement = $connection->prepare($query);
    $statement->bindValue(':id',$userId);
    $executed = $statement->execute();
    $user = $statement->fetch();
    if(!$user){
        unset($_SESSION['user']);
        header('Location:Home.php');
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="Css/Pages/Panel.css">
    <script type="module" src="Js/Pages/Panel/launcher.js"></script>
</head>
<body>
    <nav>
        <section id="welcome">
            <h2>welcome <?php echo $user->name ?></h2>
        </section>
        <section id="actions">
            <a id="logout-button" href="#">
                <i class="fa fa-sign-out"></i>
                logout
            </a>
        </section>
    </nav>
</body>
</html>