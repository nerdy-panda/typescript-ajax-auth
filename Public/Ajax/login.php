<?php require_once dirname(__DIR__,2).'/Includes/Bootstrap.php'; ?>
<?php /** @var PDO $connection */ ?>
<?php sleep(rand(2,6)); ?>
<?php
    $email = $_POST['email'];
    $password = $_POST['password'];
?>
<?php
    $query = 'select `id` from `users` where `email`=:email and `password` = sha1(:password) limit 1 ;';
    $statement = $connection->prepare($query);
    $statement->bindValue(':email',$email);
    $statement->bindValue(':password',$password);
    $executed = $statement->execute();
    $user = $statement->fetch();
    if(!$user){
        http_response_code(403);
        exit;
    }
    $_SESSION["user"]["id"] = $user->id;
