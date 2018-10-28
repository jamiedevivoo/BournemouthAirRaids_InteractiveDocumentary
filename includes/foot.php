    </body>

	<link href="https://fonts.googleapis.com/css?family=Enriqueta|Gentium+Book+Basic:400i|Ramaraja" rel="stylesheet">      
    <!-- Bootstrap Scripts -->
    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/tether.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>

    <script type="text/javascript">
        
        function loadBookmark(targetMedia,timecode,duration) {
            var xhttp = new XMLHttpRequest();
            
            xhttp.onreadystatechange = function() {
            
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("bookmarkPlayerContainer").innerHTML = this.responseText;
                    $('.storyContainer').css({'opacity':0.2,'pointer-events':'none'});
                    $('#bookmarkPlayerContainer').css('display','block');
                }
            };
            
            xhttp.open("GET", "loadBookmark.php?id="+targetMedia+"&tc="+timecode+"&d="+duration, true);
            xhttp.send();
        }
        
        function closeBookmark() {
            $('.storyContainer').css({'opacity':1,'pointer-events':'unset'});
            $('#bookmarkPlayerContainer').css('display','none');
        }
        
</script>
    
    <!-- Custom Scripts -->
<!--    <script src="assets/js/script.js"></script>-->
</html>