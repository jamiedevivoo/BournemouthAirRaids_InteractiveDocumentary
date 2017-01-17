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
		
		function fraction(x,y) {
			return (x / y);
		}		
		
		function percentage(x,y) {
			return Math.floor((x / y) * 100) + "%";
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
		
		function togglePausePlay(story, player, state) {
			if (state === 0) {
				player[0].pause();
				$(story + ' .toggleState').html('&#9208;');
			} else if (state === 1) {
				player[0].play();
				$(story + ' .toggleState').html('||');
			} else {
				if(player[0].paused) {
					player[0].play();
					$(story + ' .toggleState').html('||');
				} else {
					player[0].pause();
					$(story + ' .toggleState').html('&#9658;');
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
		










		
		
	// MEDIA PLAYER ********************************************************
	function mediaPlayer(x) {
		
		if (typeof story !== 'undefined') {
			togglePausePlay(story, player, 0); // 0 = make pause, 1 = make play, other = toggle
		}
		
		var story = "#" + $(x).attr("data-story");
		var player = $(story+' .player');
			var playerDuration =  player[0].duration;
			var playerCurrent = 0;
			var	playerProgress = "0%";
			
		var toggleState = $(story+' .toggleState');
		var timeline = $(story+' .timeline');
		var scrubHead = $(story+' .timeline .scrubHead');
		var scrubed = $(story+' .timeline .scrubed');
		var timeIndicator = $(story+' .timeline .timeIndicator');
		var scrollIndicator = $(story+' .scrollPosition');
		var poiCat = $( story + " .poi" ).toArray();
	
		
		// Display
		$('.story').css({'display':'none'});
		$(story).css({'display':'block'});
		$(story).find('.storySection').first().css({'display':'block'}).hide().fadeIn();
		
		$(story).find('.continue').click(function() {
			$('.storySection').css({'display':'block'});
			/*
			$(this).parent('.storySection').next('.storySection').css({'display':'block'}).next('.storySection').css({'display':'block'});
			*/
			$(this).remove();
		});
		
		$(window).on('scroll', function () {
			$('.storySection').css({'display':'block'});
			/*
			$(this).parent('.storySection').next('.storySection').css({'display':'block'}).next('.storySection').css({'display':'block'});
			*/
			$(story).find('.continue').remove();		
		});
		
		
		// Update docHeight
		
		docHeight = 0;
		$(story + ' .storySection').each(function() {
			docHeight += $(this).outerHeight(true);
		});
		
		
		function formatTime(s) {

			var indicatorMinutes = Math.floor((playerTime(s)) / 60);
			var indicatorSeconds = Math.floor((playerTime(s)) - (60 * indicatorMinutes));

			var time = function() {
				if (indicatorMinutes < 10) { indicatorMinutes = "0" + indicatorMinutes; }
				if (indicatorSeconds < 10) { indicatorSeconds = "0" + indicatorSeconds; }
				return indicatorMinutes + ":" + indicatorSeconds;
			};
			return time;
		}
		
		// Define Player Duration
		player.on('loadedmetadata', function() {
			playerDuration = player[0].duration;
			$(story+' .totalTime').html(formatTime(player[0].duration));
		});
		
		
		//FUNCTIONS -----------------------------------------------------------------------
				
																			//CalculateTime
		
		function offsetScroll(x) {
			// window position		
			x = (x - ($(timeline).offset().top)); 
			return x;
		}
		function playerTime(x) {
			newCurrent = fraction(offsetScroll(x),$(timeline).height()) * playerDuration;
			updateTimeline(newCurrent);
			return newCurrent;
		}
		

																			//updatePlayer
		function updatePlayer(newCurrent) {
			//Update progress bar and video currenttime
			player[0].currentTime = newCurrent;
									
		}		
		
		
		
		// When player Updates Time, if value is parsed to it - it will be used to update timeline, otherwise the current time will be calculated
		function updateTimeline(newCurrent) { 
			
			if (typeof t !== 'undefined') {
				playerProgress = (newCurrent / playerDuration) * $(timeline).height();
			} else {
				playerCurrent = player[0].currentTime;
				var timeFraction = (playerCurrent / playerDuration);
				playerProgress = timeFraction * ($(timeline).height() / 100);
				
				// Every time the player updates, loop through all POI's  
				for ( i = 0; i < poiCat.length; i++ ) { 
					var thisPOI = poiCat[i];
					
					// Establish the range of each POI		
					var poiRange = [
						(parseInt($(thisPOI).attr("data-timeAnchor")) - (($(thisPOI).height / 2) + 5)), 
						(parseInt($(thisPOI).attr("data-timeAnchor")) + (($(thisPOI).height / 2) + 5))
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
				if (!scrubbing) {updateScrub(playerProgress);}
				$(scrubed).css({'height': playerProgress + "px"});	
			}
		
			$(story+' .currentTime').html(formatTime(player[0].currentTime));

					
		} // END updateTimeline Function
		
		
		
		function updateIndicator(y) {
			if (y === 0) {
				$(timeIndicator).fadeOut(200);
			} else {
				if (!lockIndicator) {
					
					var indicatorTime = formatTime(y);					
					
					var playerProgress = offsetScroll(y);
					
					if (playerProgress < 20) { playerProgress = 20; } 
					else if (($(timeline).height() - playerProgress) < 20) { playerProgress = $(timeline).height() - 20; }
					
					$(timeIndicator).fadeIn(200).css({'top':playerProgress+"px"});
				

					
					$(timeIndicator).find('p').text(indicatorTime());			
				}
			}
		}
			
		function updateScrub(p) {
			if (p < 20) { p = 0; }
			else if (($(timeline).height() - p) < 20) {
				p = $(timeline).height() - ($(scrubHead).height() / 2);
			}
			$(scrubHead).css({'top':p+'px'});
		}
		
		//Expand POI Function
		function expandPOI(thisPOI) {
			$(timeline).find('.time_indicator').addClass('activePOI');
			$(timeline).find('.time_indicator').css({'top':(parseInt($(thisPOI).css('top')) - $(thisPOI).find('.poi_expand').height() / 2),'color':'rgba(255,255,255,1)'}).queue(function(next) {
				$(thisPOI).addClass('poi_active').children().fadeIn(500);
				next();
			});	
			$(thisPOI).find('.poi_expand').css({'border-top-left-radius':'0'});
			lockIndicator = true;
		}
		
		//Contract POI Function
		function contractPOI(thisPOI) {
			$('.poi').removeClass('poi_active').children().fadeOut(500, function() {
				$(thisPOI).find('.poi_expand').css({'border-top-left-radius':'20px'});
				$(timeIndicator).removeClass('activePOI');
				$(timeIndicator).css({'top':parseInt($(thisPOI).css('top'))});
			});
			lockIndicator = false;
		}
		
						
		
		
		
		
		
		
		// TIME UPDATE
		
		// Define and update current time
		player.on('timeupdate', function() {
			updateTimeline();			
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
		var lockIndicator = false;	
		var scrubbing = false;	
		
		
		
		
		
		
		
		
		// ---------ON CLICK -------------
		// Mouse Down, set timeDrag to true, updatePlayer
		$(timeline).mousedown(function(e) {
/**/		if (e.target !== this) return;
				timeDrag = true;
				updateIndicator(e.pageY);
		});
		
		
		// Mouse Up, set timeDrag to false, updatePlayer
		$(timeline, story + ' .timeline div').mouseup(function(e) {
			if(timeDrag) {
				timeDrag = false;
				updateIndicator(0);
				updatePlayer(playerTime(e.pageY));	
			}
		});
		
		
			
		// ---------ON DRAG -------------
		// On drag, updatePlayer, double check target is target, update scrub head, indicator and time.
		$(timeline, story + ' .timeline div').mousemove(function(e) {
		
		if(timeDrag) {
				updateTimeline(	playerTime(e.pageY));
				updatePlayer(playerTime(e.pageY));	
			}			
						
			// Update scrub
			
			updateScrub(offsetScroll(e.pageY));
			updateIndicator(e.pageY);
		});
		
		
		
		
		
		
		
		
		
		// ---------ON HOVER -------------
		// mouseover check target is target, format scrub_head, and fade in indicator Time.
		$('.timeline, .scrubHead, .scrub').mousemove(function(e) {
			scrubbing = true;
			$(scrubHead).addClass('active');
			updateIndicator(e.pageY);
			updateScrub(offsetScroll(e.pageY));	
		});
		// mouse leave, Set scrub_head back to current time, fade out indicator time 
		$($(timeline)).mouseleave(function() {
			$(scrubHead).removeClass('active');
			scrubbing = false;
			timeDrag = false;
			updateTimeline();
			updateIndicator(0);
		});
		
		//MOUSEENTER: POI
		$('.poi').mouseenter(function() {
			timeDrag = false;
			$(timeIndicator).css({top:$(this).css('top')});
			$(timeIndicator).css({'background-color':'rgba(158,146,0,1.00)'});
			$(scrubHead).addClass('overPOI');
			lockIndicator = true;
		});
		$('.poi').mouseleave(function() {
			timeDrag = false;
			updateIndicator();
			$(timeIndicator).css({'background-color':'rgba(193,34,36,1.00)'});
			$(scrubHead).removeClass('overPOI');
			lockIndicator = false;
		});
		
		
		
		
		
		
		
		// CLICK: POI
		// On Click
		$('.poi').click(function(e) {
			var thisPOI = this;
			if (timeDrag !== true) { 			
/**/			if (e.target !== this) return; // Only continue if click element is exact element (no children)
					
					//Is POI already expanded?
					if ( $(thisPOI).hasClass('poi_active')) {
						
						// If so, contract it
						contractPOI(thisPOI);						
					} else {
						
						//Otherwise expand it
						$('.poi').removeClass('poi_active').children().fadeOut(500);
						
						//If there isn't enough room above POI
						if ( (($(thisPOI).find('.poi_expand').height() / 2) + 50	) > parseInt($(this).css('top')) ) {
							
							//Push POI to 20px below top
							$(thisPOI).find('.poi_expand').css({'top': '20px'});
							expandPOI(thisPOI);

						//If there isn't enough room below POI
						} else if ( (($(this).find('.poi_expand').height() / 2) + 50) > ( winHeight - parseInt($(this).css('top'))) ) {
							
							//Push POI to 20px above bottom
							$(thisPOI).find('.poi_expand').css({'top':(winHeight - $(this).height() - 20)+"px"});
							expandPOI(thisPOI);	
													
						} else {
							
							//If there is enough space, expand POI.
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
				
				updateTimeline(newProgress);
				player[0].currentTime = newCurrent;
				
				$(this).parent().removeClass('poi_active').addClass('poi_viewed').find('.poi_expand').fadeOut(500);
			}
		});
		
		$(window).on('scroll', function () {
		
			// Timeline Scroll Position
			var scrollPosition = (($(timeline).offset().top * ($(timeline).height()) / (docHeight - winHeight) )) - 2;
			$(scrollIndicator).css({'top': scrollPosition});
		});
	
		// MEDIA CONTROLS
		
		$(toggleState).click(function() {
			togglePausePlay(story, player); // 0 = make pause, 1 = make play, other = toggle
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
		var scrollEnd = 10000;
		var scrollEnabled = 0;
		
		$(window).on('scroll', function () {
	
			if (scrollEnabled === 1) {
				$('body').css({'height':(winHeight + scrollEnd)});
								
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
			}
			
		});

			
			
			
	// DOCUMENT READY
	});
	