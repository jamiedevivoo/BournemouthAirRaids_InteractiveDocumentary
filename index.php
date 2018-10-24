<?php
    ini_set('display_startup_errors', 1);
    ini_set('display_errors', 1);
    error_reporting(-1);

    require_once 'core/init.php';

    $pagetitle = "Stories";

    require 'includes/head.php';
?>		


<? 
    $stories = DB::getInstance()->query('SELECT * FROM topic');

    if(!$stories->count()) {
        echo 'Error';
    } else {
        foreach($stories->results() as $story) {
?>
            <a href="#">
                <div class="selectBox">
                    <img src="<? print($story->cover_photo); ?>">
                    <h2><? print($story->title); ?></h2>
                    <p><? print($story->desc); ?></p>
                </div>
            </a>
<?
        }
    }
?>

	
<?php include 'includes/foot.php'; ?>