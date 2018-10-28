<? require_once 'core/init.php'; ?>
<!DOCTYPE html>
<html>
<body>
    
    <?
        $targetMedia = $_GET['id'];
        $timecode = $_GET['tc'];
        $duration = $_GET['d'];
        $endcode = $timecode + $duration;
    
        $media = DB::getInstance()->query("SELECT * FROM media WHERE id = '$targetMedia'");
        $media = $media->results()[0];
    
        $story = DB::getInstance()->query("SELECT * FROM story WHERE id = '$media->story_id'");
        $story = $story->results()[0];
        
    ?>
        <? if ($media->media_type == 1) { ?>
            <video poster="uploads/media/photo/story_<? print($story->id); ?>.jpeg" width="540" height="360" controls style="margin: 0 auto; display: block; padding-bottom: 20px;">
                <source src="uploads/media/video/<? print($media->id); ?>.mp4#t=<? print($timecode); ?>,<? print($endcode); ?>" type="video/mp4" />
            </video>
        <? } else { ?>
            <img width="300" src="uploads/media/photo/story_<? print($story->id); ?>.jpeg" style="margin-bottom: 20px;"><br>
            <audio controls>
                <source src="uploads/media/audio/<? print($media->id); ?>.wav#t=<? print($timecode); ?>,<? print($endcode); ?>" type="audio/wav" />
            </audio>
        <? } ?>
        <br>
        <a style="text-align:center; display:block;" href="story.php?id=<? print($story->id); ?>">Go to <? print($story->title); ?></a>
        <a style="text-align:center; display:block;" href="#" onclick="closeBookmark()">Close bookmark</a>
</body>
</html>