	// JavaScript Document
	
	$(document).ready(function(){ 
	"use strict";
			
	// Global Variables and Functions ********************************************************
	
		var i = 0;
		var arrayLoop = [];

		var winHeight = $(window).height();
		var docHeight = $(document).height();
		var scrollTop = 0;
		
		$(window).on('scroll', function () {
			scrollTop = $(window).scrollTop();	
		});
			
		var delayTime = 500;
		var timeIns = 500; // element fade ins
		var timeShort = 2000; // element fade ins
		var timeMed = 3000; // text fade out, map fade in
		var timeLong = 5000; // text fade in
		
		var introEnabled = 1;

					
		document.addEventListener("visibilitychange", function() {
			if ( document.hasFocus() ) {
  			} 	else {
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
		
		function togglePausePlay(player, state) {
			if (state === 0) {
				player[0].pause();
			} else if (state === 1) {
				player[0].play();
			} else {
				if(player[0].paused) {
					player[0].play();
				} else {
					player[0].pause();
				}
				 return false;
			}
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
			
	// INTRO ********************************************************
		
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
	
	// LARGE_MAP / MINI_MAP TRANSITION ********************************************************
	
		function mapTransition(e) {
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
		
	// STORIES ********************************************************
		
		
	// MEDIA PLAYER ********************************************************
	function mediaPlayer(x) {
		
		if (typeof story !== 'undefined') {
			togglePausePlay(player, 0); // 0 = make pause, 1 = make play, other = toggle
		}
		var story = "#" + $(x).attr("data-story");

		var player = $(story+' .player');
		var playerDuration =  player[0].duration;
		
		var playerCurrent = 0;
		var	playerProgress = "";
		var timeline = $(story+' .timeline');
		
		var poiCat = $( story + " .poi" ).toArray();
		
		// Define Player Duration
		player.on('loadedmetadata', function() {
			playerDuration = player[0].duration;
		});
		
		// Display
		$('.story').css({'display':'none'});
		$(story).css({'display':'block'});
		
		// Update docHeight now that section is displayed
		
		docHeight = $(document).height();
		
		//FUNCTIONS ----------------------------
		
		// Every time player updates
		function timelineUpdate(t) { 
			playerCurrent = player[0].currentTime;
			
			if (typeof t !== 'undefined') {
				playerProgress = t;
			} else {
				playerProgress = ((playerCurrent / playerDuration) * 100) + "%";

				timeline.find('.scrub_head').css({'top': playerProgress});
				timeline.find('.scrub_head span').css({'height': playerProgress});
				
				// Every time the player updates, loop through all POI's  
				for ( i = 0; i < poiCat.length; i++ ) { 
					var thisPOI = poiCat[i];
					
					// Establish the range of each POI		
					var poiRange = [
						(parseInt($(thisPOI).attr("data-timeAnchor")) - ((33 / winHeight) * 100)), 
						(parseInt($(thisPOI).attr("data-timeAnchor")) + ((35 / winHeight) * 100))
					];
					
					// If current time is within range, activate POI, otherwise hide it
					if (playerCurrent >= poiRange[0] && playerCurrent <= poiRange[1] && timeDrag !== true && !$(thisPOI).hasClass('poi_viewed')) {
						$(thisPOI).addClass('poi_active');
						$(thisPOI).children().fadeIn(500);
					} else {
						$(thisPOI).removeClass('poi_active');
						$(thisPOI).children().fadeOut(500);			
					}
				} // End FOR			
			}
			timeline.find('.scrub_head').css({'top': playerProgress});
			timeline.find('.scrub_head span').css({'height': playerProgress});	
					
		} // END timelineUpdate Function
		
		//CalculateTime
		function playerTime(x) {
	
			// window position		
			x = (x - scrollTop);  
			// Y position of click on timeline, fraction
			var timelineClick = x / timeline.height();
			
			//usable percentage can be applied to css attributes
			newProgress = Math.floor(100 * timelineClick) + "%";
			
			// newCurrent time
			newCurrent = timelineClick * playerDuration;
			return newCurrent;
		}
		
		//updatePlayer
		function updatePlayer(x,y) {

			scrollTop = $(window).scrollTop();	
		
			//Update progress bar and video currenttime
			timelineUpdate(newProgress);
			player[0].currentTime = newCurrent;	
		}
		
		
		// TIME UPDATE
		
		// Define and update current time
		player.on('timeupdate', function() {
			timelineUpdate();
		});
		
		// LOAD POINTS OF INTEREST --------------------------------------------------
		
		for ( i = 0; i < poiCat.length; i++ ) { 
		
			var timeAnchor = $(poiCat[i]).attr("data-timeAnchor");
					
			var timelinePercentage = (timeAnchor / playerDuration) * 100 + "%";
					
			$(poiCat[i]).css({'top': timelinePercentage});
							
		}
							
		// SEEKING / TIMELINE INTERACTION ****************************************************************
		var timeDrag = false;
		var newProgress = 0;
		var newCurrent = 0;
		
		
		
		
		// ---------ON CLICK -------------
		// Mouse Down, set timeDrag to true, updatePlayer
		$(story + ' .timeline,' + story + ' .timeline span').mousedown(function(e) {
/**/		if (e.target !== this) return;
				timeDrag = true;
				updatePlayer(e.pageY);
		});
		
		
		// Mouse Up, set timeDrag to false, updatePlayer
		$(story + ' .timeline,' + story + ' .timeline span').mouseup(function(e) {
			if(timeDrag) {
				timeDrag = false;
				updatePlayer(e.pageY);
			}
		});
		
		
		
		
		// ---------ON DRAG -------------
		// On drag, updatePlayer, double check target is target, update scrub head, indicator and time.
		$(story + ' .timeline,' + story + ' .timeline span').mousemove(function(e) {
		
		
		if(timeDrag) {
				updatePlayer(e.pageY);
			}			
			
/**/		if (e.target !== this) return;
			
			
			// Update scrub
			timeline.find('.scrub_head').css({'top':e.pageY});
			timeline.find('.time_indicator').css({'top':newProgress});	
			
			
			// Format Time
			var indicatorMinutes = Math.floor(playerTime(e.pageY) / 60);
			var indicatorSeconds = Math.floor(playerTime(e.pageY) - (60 * indicatorMinutes));
			var indicatorTime = function() {
				if (indicatorMinutes < 10) { indicatorMinutes = "0" + indicatorMinutes; }
				if (indicatorSeconds < 10) { indicatorSeconds = "0" + indicatorSeconds; }
				return indicatorMinutes + ":" + indicatorSeconds;
			};
			timeline.find('.time_indicator p').text(indicatorTime());
		});
		
		
		
		
		// ---------ON HOVER -------------
		// mouseover check target is target, format scrub_head, and fade in indicator Time.
		timeline.mouseenter(function(e) {
/**/		if (e.target !== this) return;
				timeline.find('.scrub_head').css({'top':e.pageY});
				timeline.find('.scrub_head').css({'top':newProgress});
				timeline.find('.indicator_time').fadeIn(1000);
		});
		
		
		// mouse leave, Set scrub_head back to current time, fade out indicator time 
		timeline.mouseleave(function() {
			timeDrag = false;
			timelineUpdate();
			timeline.find('.indicator_time').fadeOut(200);
			
		});
		
		
		$('.poi').css({'opacity':'1'}).hover(function() {
			timeline.find('scrub_head').css({'opacity':'0'});
		});
		
		
		//MOUSEENTER: POI_EXPAND
		$('.poi, .poi_expand, .time_indicator, p').mouseenter(function() {
			timeDrag = false;
		});
		
		
		// CLICK: POI
		//
		function expandPOI(thisPOI) {
			$(timeline).find('.time_indicator').css({
				'border-bottom-left-radius':'0',
				'transition':'0.5s',
				'background-color':'rgba(225,229,202,1.00)',
				'top':(parseInt($(thisPOI).css('top')) - ($(thisPOI).find('.poi_expand').height() / 2) - 50),'color':'rgba(255,255,255,1)'
			}).queue(function(next) {
				$(thisPOI).addClass('poi_active').children().fadeIn(500);
				next();
			});	
			$(thisPOI).find('.poi_expand').css({'border-top-left-radius':'0'});
		}
		
		function contractPOI(thisPOI) {
			$('.poi').removeClass('poi_active').children().fadeOut(500, function() {
				$(thisPOI).find('.poi_expand').css({'border-top-left-radius':'20px'});
				$(timeline).find('.time_indicator').css({'border-bottom-left-radius':'20px','transition':'0.5s', 'background-color':'rgba(0,0,0,0.35)', 'top':parseInt($(thisPOI).css('top'))});
			});
		}
		
		
		$('.poi').click(function(e) {
			var thisPOI = this;
			if (timeDrag !== true) { 			
/**/			if (e.target !== this) return; // Only continue if click element is exact element (no children)

					if ( $(thisPOI).hasClass('poi_active')) {
						contractPOI(thisPOI);						
					} else {
						$('.poi').removeClass('poi_active').children().fadeOut(500);
							
						if ( (($(thisPOI).find('.poi_expand').height() / 2) + 50	) > parseInt($(this).css('top')) ) {
							
							$(thisPOI).find('.poi_expand').css({'top': '20px'});
							expandPOI(thisPOI);
							
						} else if ( (($(this).find('.poi_expand').height() / 2) + 50) > ( winHeight - parseInt($(this).css('top'))) ) {
							
							$(thisPOI).find('.poi_expand').css({'top':(winHeight - $(this).height() - 20)+"px"});
							expandPOI(thisPOI);	
													
						} else {
							expandPOI(thisPOI);
						}
						
					}
			}
		});
		
		
		//CLICK: POI_EXPAND
		//
		$('.poi_expand').click(function(e) {
			if (e.target === $('.poi_expand p a')) {
				$('.poi').removeClass('poi_active').children().fadeOut(500);
				return;
			} else {
				newProgress =  parseInt($(this).parent().css('top'), 10) / winHeight;
				newCurrent = Math.floor( (playerDuration * newProgress) );
				
				timelineUpdate(newProgress);
				player[0].currentTime = newCurrent;
				
				$(this).parent().removeClass('poi_active').addClass('poi_viewed').find('.poi_expand').fadeOut(500);
			}
		});
	
	} // END mediaPlayer Function
	
	
	//CLICK: LOADPLAYER - INITIATE MEDIAPLAYER
	$('.loadPlayer').click(function() {		
		if ($(this).attr("data-story") === "home") {
			$('.story').css({'display':'none'});
		} else {
			mediaPlayer(this);
		}
	});
	
	// ANIMATIONS ------------------------------------
		
		var scrollStart = 0;
		var scrollEnd = 1000;	
		var scrollEnabled = 0;
		
		if (scrollEnabled === 1) {
			$('body').css({'height':(winHeight + scrollEnd)});
		}
		
		$(window).on('scroll', function () {
				
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
			var scrollPosition = scrollTop / (docHeight - winHeight + 9);
			var scrollProgress = 100 * (scrollPosition) + "%";
			$('.scroll_position').css({'top': scrollProgress});
			
			
			
		});

	// DOCUMENT READY
	});