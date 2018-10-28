<?
    ini_set('display_startup_errors', 1);
    ini_set('display_errors', 1);
    error_reporting(-1);


    require_once 'core/init.php';
    $pagetitle = "Stories";
    require 'includes/head.php';
?>
<!-- CONTENT --------------------------------------------------------------------------------------------------------------------------------------------->
    	<div id="container">
            <h1 class="headerPrompt">Who's story do you want to explore?</h1>
            <div class="selectBoxContainer">
                <? 
                    $topic = $_GET["id"];
                    $story_tellers = DB::getInstance()->query("SELECT * FROM story_teller WHERE topic_id = '$topic'");

                    if($story_tellers->count()) {
                        foreach($story_tellers->results() as $story_teller) {
                ?>
                            <div class="selectBox">
                                <a href="story.php?id=<? print($story_teller->id); ?>" class="loadPlayer">
                                    <img class="cardImage" src="<? print('uploads/media/photo/story_teller_' . $story_teller->id . '.jpeg') ?>">
                                    <h2><? print($story_teller->name); ?></h2>
                                    <p><? print($story_teller->desc); ?></p>
                                </a>        
                            </div>
                <?
                        }
                    }
                ?>
            </div>
		
			<div class="backgroundMap"></div>
	</div>

<? require 'includes/foot.php'; ?>