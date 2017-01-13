	// JavaScript Document
	
	$(document).ready(function(){  	
	"use strict";
			
	// Global Variables and Functions ------------------------------
	
		var i;
		var arrayLoop;
		var poiCat;
		
		var playerCurrent;

		var winHeight = $(window).height();
		var docHeight = $(document).height();
			
		var delayTime = 500;
		var timeIns = 500; // element fade ins
		var timeShort = 2000; // element fade ins
		var timeMed = 3000; // text fade out, map fade in
		var timeLong = 5000; // text fade in
		
		var introEnabled = 1;

					
		document.addEventListener("visibilitychange", function() {
			if ( document.hasFocus() ) {
    			console.log("YES");
  			} 	else {
    			console.log("NO");
  			}	
		});
		
		function checkIntroEnabled() {
			if (introEnabled === 1) { return true; }
			else { return false; }
		}
		
		function addtoDelay(t) {
			delayTime = delayTime + (t); 
		}
		
		function removeHidden(e) {
			$(e).removeClass('hidden');
		}
		
		function fadeInOut(e) {	
			$(e).delay(delayTime).css({'opacity':'0'}).animate({'margin-top':'-4px','font-size':'29px','opacity':'0.9'},timeLong, 'linear', removeHidden(e));
			$(e).animate({'margin-top':'-8px','font-size':'28px','opacity':'0'},timeMed, 'linear', function() { $(e).css({'display':'none'}); });
			addtoDelay(timeLong+timeMed);
		}
		
		function fadeInElement(e) {
			$(e).delay(delayTime).css({'opacity':'0'}).animate({'margin-top':'-4px','font-size':'29px','opacity':'0.9', 'display':'block'},timeMed, 'linear', removeHidden(e));
			addtoDelay(timeMed);
		}
		
		function showStories() {
			for ( i = 0, arrayLoop = $( ".story").toArray(); i < arrayLoop.length; i++ ) {
				setTimeout(fadeInElement(arrayLoop[i]), delayTime);
				addtoDelay(500);
			}
		}
		
		function randomNum(upper, lower) {
			return Math.floor(Math.random() * upper) + lower;	
		}
		
		// Get Today's Date
		
		var d = new Date();
		var date = d.getDate();
		var day = d.getDay();
		var month = d.getMonth();
		var year = d.getFullYear();
	
		switch (day) {
			case 0: day = "Sunday"; break;
			case 1: day = "Monday"; break;
			case 2: day = "Tuesday"; break;
			case 3: day = "Wednesday"; break;
			case 4: day = "Thursday"; break;
			case 5: day = "Friday"; break;
			case 6: day = "Saturday"; break;
		}
		
		switch (month) {
			case 0: month = "January"; break;
			case 1: month = "February"; break;
			case 2: month = "March"; break;
			case 3: month = "April"; break;
			case 4: month = "May"; break;
			case 5: month = "June"; break;
			case 6: month = "July"; break;
			case 7: month = "August"; break;
			case 8: month = "September"; break;
			case 9: month = "October"; break;
			case 10: month = "November"; break;
			case 11: month = "December"; break;
		}
		
		if (date === 1 || date === 21 || date === 31) {
			date = date+"st";
		} else if (date === 2 || date === 22) {
			date = date+"nd";
		} else if (date === 3 || date === 23) {
			date = date+"rd";
		} else {
			date = date+"th";
		}
		
		var today = day + " " + date + " " + month + " " + year;
			
	// INTRO -------------------------------------------------------------------------
		
		$('h1').delay(delayTime).fadeIn(timeMed, function() { 			// TITLE
			$(this).removeClass('hidden'); addtoDelay(timeMed+500); 	
		
		
		
		}); 
		
		// Intro Text	
		for ( i = 0, arrayLoop = $( "p.fact" ).toArray(); i < arrayLoop.length; i++ ) { // Find all elements with the class 'fact' and cycle through them.
			setTimeout(fadeInOut(arrayLoop[i]),delayTime);	// Fade in and out each fact
		}	
	
		// Map Intro	
		$('.old_map').before("<div class=\"map large_map new_map\"></div>");
		$('.new_map').delay(delayTime).fadeIn(5000, function(){ 
			$('.old_map').fadeIn(100);
			$('p.date').text(today).fadeIn(timeShort, function() { $(this).removeClass('hidden'); addtoDelay(timeShort);}); // TITLE (DATE)	
			addtoDelay(timeLong + timeShort); 
		});
	
		/*
		
		$('.old_map').css({"display":"block"}, function() {
				$({ numberValue: $('h1 span').text() }).animate({ numberValue: 1942 }, {
					duration: timeMapTransition, easing: 'swing', step: function() { 
						// $('h1').text(todaysDate);
						// console.log(todaysDate);
						$('h1 span').text(Math.ceil(this.numberValue));
					}
				});  
			});
		});
	
		*/
	
	// LARGE_MAP / MINI_MAP TRANSITION ---------------------
	
		function mapTransition(e) {
			console.log("clicked");
			if ( $('.map').hasClass('large_map') ) {
				$('.story').find('h3').fadeOut(timeIns);
				$(e).find('.storycontent').removeClass('hidden').queue(function(next) {
					$('.map').addClass('mini_map');
					$('.map').removeClass('large_map');
					next();
				});
			} else  {
				$('.map').removeClass('mini_map').addClass('large_map').queue(function(next) {
					$(e).find('.storycontent').addClass('hidden');
					next();
				});
				$('.story h3').fadeIn(timeIns);
			}
		}
			
		$('.story h3, .mini_map').click(function() {
			mapTransition(this);
		});
		
	// STORIES --------------------------------------
	
	
	// MEDIA PLAYER
	
	var player = $('.player');
	var playerDuration =  player[0].duration;
	
	player.on('loadedmetadata', function() {
    	playerDuration = player[0].duration;
	});
	
	player.on('timeupdate', function() {
    	var playerCurrent = player[0].currentTime;
		var playerProgress = ((playerCurrent / playerDuration) * 100) + "%";
				
		$('.scrub_head').css({'top': playerProgress});
		$('.scrub_head span').css({'height': playerProgress});
		
	
		for ( i = 0, poiCat = $( ".poi" ).toArray(); i < poiCat.length; i++ ) { 
			e = poiCat[i];
									
			var poiRange = [
				(parseInt($(e).attr("data-timeAnchor")) - ((33 / winHeight) * 100)), 
				(parseInt($(e).attr("data-timeAnchor")) + ((35 / winHeight) * 100))
			];
			
			if (playerCurrent >= poiRange[0] && playerCurrent <= poiRange[1]) {
				$(e).addClass('poi_active');
				$(e).children().fadeIn(500);
			} else  {
				$(e).removeClass('poi_active');
				$(e).children().fadeOut(500);			
			}
		}
	});
	
	
	// LOAD POINTS OF INTEREST
	
	for ( i = 0, poiCat = $( ".poi" ).toArray(); i < poiCat.length; i++ ) { 
		var e = poiCat[i];
				
		var timeAnchor = $(e).attr("data-timeAnchor");
				
		var timelinePercentage = (timeAnchor / playerDuration) * 100 + "%";
				
		$(e).css({'top': timelinePercentage});
			
	}
		
	// TIMELINE
		$('.poi').click(function() {
			
			if ($(this).hasClass('poi_active')) {
				$(this).removeClass('poi_active');
				$(this).children().fadeOut(500);
			} else {
				$('.poi').removeClass('poi_active');
				$(this).addClass('poi_active');
				$(this).children().fadeIn(500);			
			}
		});
		$('.poi .poi_expand .p.a').click(function() {
			$('.poi').removeClass('poi_active');
		});
		
	// SEEKING 
		var timeDrag = false;   /* Drag status */
		
		$('.timeline').mousedown(function(e) {
			timeDrag = true;
			updatebar(e.pageY);
		});
		
		$(document).mouseup(function(e) {
			if(timeDrag) {
				timeDrag = false;
				updatebar(e.pageY);
			}
		});
		$(document).mousemove(function(e) {
			if(timeDrag) {
				updatebar(e.pageY);
			}
		});
		 
		//Seeking
		var updatebar = function(x) {
			
			var position = x - offset.top;
			var timeline = $('.timeline');
			
			var offset = $(winHeight).offset();
			
			var percentage = 100 * position / timeline.height();
		 
			//Update progress bar and video currenttime
			$('.timeBar').css('width', percentage+'%');
			player[0].currentTime = playerDuration * percentage / 100;
		};
	
	
	// ANIMATIONS ------------------------------------
		
		var scrollStart = 0;
		var scrollEnd = 1000;	
		var scrollEnabled = 1;
		
		$('body').css({'height':(winHeight + scrollEnd)});
		
		$(window).on('scroll', function () {
		var scrollTop = $(this).scrollTop();	
				
			// Map Transition
			var sProgress = (scrollTop - scrollStart) / (scrollEnd - scrollStart);
						
			if (sProgress > 1) { sProgress = 1; }
			else if (sProgress < 0) { sProgress = 0; }
			
			/*
			if (sProgress > 0.01) {
				$('span.2day').fadeOut(timeShort);	
			}
			*/
			
			if (scrollEnabled === 1) {
				$('.old_map').css({'opacity': sProgress});
			}
					
			if (sProgress === 1) {
					$('.new_map').remove();	
					$('.date').fadeOut(timeShort);
					$('body').css({'height':'auto'});
					scrollEnabled = 0;
					showStories();
			}
			
			// Timeline Scroll Position
			
			var scrollPosition = ((scrollTop / (docHeight - winHeight + 10)) * 100) + "%";
			console.log(scrollPosition, scrollTop, docHeight, winHeight);
			$('.scroll_position').css({'top': scrollPosition});
			
			
			
		});

	// DOCUMENT READY
	});