<?php require_once dirname(__DIR__,2).'/Includes/Bootstrap.php'; ?>
<?php 
    $hasUser = isset($_SESSION['user']);
    if(!$hasUser){
        http_response_code(401);
        exit;
    }
?>
<?php 
    unset($_SESSION['user']);
?>