<?
    ini_set('display_startup_errors', 1);
    ini_set('display_errors', 1);
    error_reporting(-1);

    require_once 'core/init.php';
    $pagetitle = "Stories";
    require 'includes/head.php';
?>
<!-- CONTENT --------------------------------------------------------------------------------------------------------------------------------------------->
    <?
        $story_teller = $_GET["id"];
        $story = DB::getInstance()->query("SELECT * FROM story WHERE story_teller_id = '$story_teller'");
        $story = $story->results()[0];
        $media = DB::getInstance()->query("SELECT * FROM media WHERE story_id = '$story->id' AND poster = 0");
        $media = $media->results()[0];
    ?>

<div class="storyContainer" style="width: 1000px; margin: 0 auto;">
            <h1 class="headerPrompt"><? print($story->title); ?></h1>
                <? if ($media->media_type == 1) { ?>
					<video poster="uploads/media/photo/story_<? print($story->id); ?>.jpeg" width="540" height="360" controls style="margin: 0 auto; display: block; padding-bottom: 20px;">
						<source src="uploads/media/video/<? print($media->id); ?>.mp4" type="video/mp4" />
					</video>
                <? } else { ?>
                    <img width="400" src="uploads/media/photo/story_<? print($story->id); ?>.jpeg" style="margin:0 auto; display:block;"><br>
                    <audio controls style="margin: 20px auto; display: block;">
						<source src="uploads/media/audio/<? print($media->id); ?>.wav" type="audio/wav" />
					</audio>
                <? } ?>
            <p><? print($story->summary); ?></p><hr>
        <h3 style="text-align:center">Bookmarks</h3>
                <div class="selectBoxContainer">
                <? 
                    $bookmarks = DB::getInstance()->query("SELECT * FROM bookmark WHERE media_id = '$media->id'");
                    if($bookmarks->count()) { foreach($bookmarks->results() as $bookmark) {
                ?>
                        <a onclick="loadBookmark(
                                                <? print($bookmark->target_media_id); ?>,
                                                <? print($bookmark->target_bookmark_time); ?>,
                                                <? print($bookmark->bookmark_length); ?>
                                           )"
                       href="#" >
                            <div class="selectBox" class="poi" data-timeanchor="<? print($bookmark->bookmark_time); ?>" >
                                    <h2><? print($bookmark->bookmark_quote); ?></h2>
                                    <p><? print($bookmark->bookmark_desc); ?></p>
                                    <p class="clickable">Click here to learn more about this in another Story.</p>
                            </div>
                        </a>
                <? } } ?>
              </div>
</div>

<div id="bookmarkPlayerContainer">
</div>
<? require 'includes/foot.php'; ?>