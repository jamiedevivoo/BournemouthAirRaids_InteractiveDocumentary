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
				<li><a href="#" class="loadPlayer" data-story="story1">Vernon's Story</a></li>
				<li><a href="#" class="loadPlayer" data-story="story2">Ron and George's Story</a></li>
				<li><a href="#" class="loadPlayer" data-story="story3">Mike's Story</a></li>
				<li><a href="#" class="loadPlayer" data-story="story4">John's Story</a></li>
			</ul>
		
			<div class="backgroundMap"></div>
			<h1>Bombing of Bournemouth | Sunday 23rd May 1943</h1>
			<p class="prompt">Pick a Story to learn more.</p>
	</div>

<? require 'includes/foot.php'; ?>