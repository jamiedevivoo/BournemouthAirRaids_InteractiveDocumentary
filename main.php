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
			<ul>
                
                <? 
                    $stories = DB::getInstance()->query('SELECT * FROM story WHERE topic = 1');

                    if($stories->count()) {
                        foreach($stories->results() as $story) {
                ?>
                            <li><a href="#" class="loadPlayer"><? print($story->story_title); ?></a></li>
                <?
                        }
                    }
                ?>
			</ul>
		
			<div class="backgroundMap"></div>
			<h1>Bombing of Bournemouth | Sunday 23rd May 1943</h1>
			<p class="prompt">Pick a Story to learn more.</p>
	</div>

<? require 'includes/foot.php'; ?>