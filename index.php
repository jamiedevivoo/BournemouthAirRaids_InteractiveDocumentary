<?php
    ini_set('display_startup_errors', 1);
    ini_set('display_errors', 1);
    error_reporting(-1);

    require_once 'core/init.php';

    $pagetitle = "Stories";

    require 'includes/head.php';
?>		


<? 
    $topics = DB::getInstance()->query('SELECT * FROM topic');

    if(!$topics->count()) {
        echo 'Error';
    } else {
        foreach($topics->results() as $topic) {
?>
            <a href="topic.php?id=<? print($topic->id); ?>">
                <div class="selectBox">
                    <img src="<? print($topic->cover_photo); ?>">
                    <h2><? print($topic->title); ?></h2>
                    <p><? print($topic->desc); ?></p>
                </div>
            </a>
<?
        }
    }
?>

	
<?php include 'includes/foot.php'; ?>