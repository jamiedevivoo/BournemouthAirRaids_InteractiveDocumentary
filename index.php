<?php
    ini_set('display_startup_errors', 1);
    ini_set('display_errors', 1);
    error_reporting(-1);

    require_once 'core/init.php';

    $pagetitle = "Stories";

    require 'includes/head.php';
?>		

<h1 class="headerPrompt">What topic do you want to explore?</h1>
            <div class="selectBoxContainer">

<? 
    $topics = DB::getInstance()->query('SELECT * FROM topic');

    if(!$topics->count()) {
        echo 'Error';
    } else {
        foreach($topics->results() as $topic) {
?>
            <div class="selectBox">
                <a href="topic.php?id=<? print($topic->id); ?>">
                    <img class="cardImage" src="<? print('uploads/media/photo/topic_' . $topic->id . '.jpeg') ?>">
                    <h2><? print($topic->title); ?></h2>
                    <p><? print($topic->desc); ?></p>
                </a>        
            </div>
<?
        }
    }
?>
</div>

<?php include 'includes/foot.php'; ?>