		// JavaScript Document
$(document).ready(function(){  // Makes sure nothing is done until the 'DOM' (Document Object Model) has loaded

	// ------------------------------------------------------------------------------  FUNCTIONS
	
					
		function fadeUi() {
			$('.ui').fadeIn(1000);									// Fade user interface in
			$('.story').each(function(index) {						// For each instance of the class '.story'
				$(this).delay(1500*index).fadeIn(1500);				// Fade in after a delay of 1500 multiplied by whatever instance of the class it is in the DOM flow (so they fade in one after another)
			});	
			$('.story h3').each(function(index) {	
				$(this).delay(1500*index).fadeIn(1500);
			});	
			return false;
		}
		
		function intro() {
			$('.intro h1, .intro h2, .intro h3').fadeIn(1000, function() {
				$('.intro p').fadeIn(1000);
			});
		}
			
		function pulsing() {					
			$('.intro p').delay(1000).fadeOut(1500).fadeIn(1500);	// New function that holds .intro p on screen for 1s, fades out (1.5s) and fades back in (1.5s)
		}
		
		var eachImage = 0; 					// Start eachImage at 0;
	
		function introImages() {
			eachImage ++;					// Every time function is run increment eachImage;
			if (eachImage > 4) {			// if eachImage is over 4, start again.
				eachImage = 0;
			} else {												
				var posX = Math.floor(Math.random() * 50) + 1;		// Choose random position between 1 and 80w/60h.
				var posY = Math.floor(Math.random() * 10) + 1;
				
				$('.introImage').css('left', posX + "vw");			// move image to that position
				$('.introImage').css('top', posY + "vh");
				$('.introImage').css('background-image','url(images/' + eachImage + '.jpg)');		// Chane background-image to next image (using 'eachImage')
				
				$('.introImage').fadeIn(1500, function() {			// Fade image in (1s), hold (1s), fade out (1s)
					$('.introImage').delay(1000).fadeOut(1500);
				});			
			}
		} 									// Will get repeated until 
			
		function fadeStories() {
			$('.oldmap').fadeIn(1000, function() {
				fadeUi();
			});			
		}
	
	
	// ------------------------------------------------------------------------------  INTRO
		
		
		pulsing();
		var pulsingInterval = setInterval(pulsing, 4000);
		
		introImages();
		var introImagesInterval = setInterval(introImages, 4100);


		$('.intro').delay(15000).fadeOut(1000, function () {
			clearInterval(pulsingInterval);
			clearInterval(introImagesInterval);
			
			$('a.skipIntro').css('background-color','rgba(0,0,0,0.5');
			$('a.skipIntro').hover(function() {
				$(this).css('background-color','rgba(0,0,0,0.9');
			}, function(){
				$(this).css("background-color", 'rgba(0,0,0,0.5'); 
			});
			
			$('.newmap').fadeIn(3000, function(){
				$('.oldmap').css('display','block');
				$('.timetravel h2').fadeIn(1000, function() {
					$('.timetravel h3').fadeIn(1500, function() {
						$({numberValue: $('.timetravel h2').text() }).animate({numberValue: 1942}, {
							duration: 8000, easing: 'linear', step: function() { 
								$('.timetravel h2').text(Math.ceil(this.numberValue)); 
							}
						});
						$('.newmap').delay(1000).fadeOut(8000, function(){
							$('.timetravel h2').fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeOut(500, function() {
								window.location.replace("main.html");
								$('.timetravel, a.skipIntro').fadeOut(800, function() {
									$('.newmap').addClass('animate');
									$('.oldmap').addClass('animate');
									fadeUi();
								});									
							});
						});
					});		
				});
			});
		});	
		intro();
		
	// ------------------------------------------------------------------------------  SKIP INTRO BUTTON
				
			
    	$("a.skipIntro").click(function(){
        	$('*').finish().finish().finish().finish();
			$('.oldmap').css('display', 'none');
			$('.ui').css('display', 'none');
			
			$("a.skipIntro").fadeOut(500, fadeStories());
    	});

		
	// ------------------------------------------------------------------------------  MAP ZOOM ANIMATION
	
		var zoomed = 0; 
	
		$(".story h3").click(function() {
			
			$('.tip').fadeOut(500);
				
			if  (zoomed === 0) {
				
				var percX = event.pageX / $('.oldmap').width() * 100;
				var percY = event.pageY / $('.oldmap').height() * 100;
				
				$('.story h3').css('display','none');
				$('.oldmap').css("box-shadow", "0px 0px 0px #000 inset,0px 0px 0px #000 inset");
				$('.oldmap').css("background-position", percX+"% " + percY + "% ");
				$('.oldmap').css("background-size", "200% 200%");
				$(this).siblings(".fullStory").fadeIn(500);
				zoomed = 1;
				
			} else {
				$(this).siblings(".fullStory").fadeOut(500);
				$('.oldmap').css("background-position", "100% 50%");
				$('.oldmap').css("background-size", "100% 100%");
				$('.oldmap').css("box-shadow", "40px 40px 80px #000 inset,-40px -40px 80px #000 inset");
				$('.story h3').fadeIn(100);
				zoomed = 0;
			}
		});
		
		$('a.back2Map').click(function() {
			$(".fullStory").fadeOut(500);
			$('.oldmap').css("background-position", "100% 50%");
			$('.oldmap').css("background-size", "100% 100%");
			$('.oldmap').css("box-shadow", "40px 40px 80px #000 inset,-40px -40px 80px #000 inset");
			$('.story h3').fadeIn(500);
			zoomed = 0;				
		});
		
	// ------------------------------------------------------------------------------  SCROLL FUNCTIONS
	
		$(document).scroll(function () {					// When user scrolls
			var scrollPosition = $("body").scrollTop();		// Save scroll position as 'scrollPosition'
				// Do Something	 (e.g. output scroll position)
		});

});