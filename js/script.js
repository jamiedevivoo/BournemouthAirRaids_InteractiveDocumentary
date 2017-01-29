	$(document).ready(function(){ 
	"use strict";
		
		
		
		
		
		
		
			
	// Global Variables and Functions ********************************************************
	
		var i = 0;
		var arrayLoop = [];

		var winHeight = $(window).height();
		var docHeight = $(document).height();
			
		var delayTime = 500;
		var introEnabled = 1;
		var displayContinue = true;
		var storyReturn = false;
		var firstStory = true;
		
		var posterActive = true;

		
		function addToDelay(t) {
			delayTime += t;
		}
		$('.backgroundMap').fadeIn(1000, addToDelay(1000));
		$('h1').delay(delayTime).fadeIn(500, addToDelay(500));
		$('.prompt').delay(delayTime).fadeIn(500, addToDelay(500));

		function fadeInPlayerArray(i) {
			$(i).delay(delayTime).animate({'opacity':'1'},1000,addToDelay(600));
		}
		
		var loadPlayerArray = $( ".loadPlayer" ).toArray();
		
		$(loadPlayerArray[0]).css({'top':'20%','left':'28%'});
		$(loadPlayerArray[1]).css({'top':'40%','left':'72%'});
		$(loadPlayerArray[2]).css({'top':'60%','left':'28%'});
		$(loadPlayerArray[3]).css({'top':'80%','left':'72%'});
		for ( i = 0, loadPlayerArray; i < loadPlayerArray.length; i++ ) { // Find all elements with the class 'fact' and cycle through them.
			setTimeout(fadeInPlayerArray(loadPlayerArray[i]),3000);	// Fade in and out each fact
			}
		
		document.addEventListener("visibilitychange", function() {
			if ( document.hasFocus() ) {
  			} 	else {
  			}	
		});


		function fraction(x,y) {
			return (x / y);
		}		

		function togglePausePlay(story, state) {
			var player = $(story+' .player');
			if (state === 0) {
				player[0].pause();
				$(story + ' .toggleState').html('&#9658;');
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
	
		var hideTimelineTimeout;
		function hideTimeline() {
			hideTimelineTimeout = setTimeout(function() {
				$('.timeline').css({'width':'10px'});
				$('.poi').addClass('noBorder');
				$('.scrubed').css({'width':'100%s'});
				$('.toggleState').css({'border-top-right-radius':'20px'});
				$('.currentTime, .totalTime').hide();
				$('.timeIndicator').css({'margin-left':'-40px'});
			}, 2000);
		}
		function showTimeline() {
			clearTimeout(hideTimelineTimeout);
			$('.timeline').css({'width':'50px','left':'0'});
			$('.poi').removeClass('noBorder');
			$('.scrubed').css({'width':'100%'});
			$('.toggleState').css({'border-top-right-radius':'0px'});
			$('.currentTime, .totalTime').show();
			$('.timeIndicator').css({'margin-left':'0px'});
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
		
						
		
		function showContinue() {
			$('.continue').css({'opacity':'1'});
		}
		

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
							$('.timetravel h2').fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500, function() {
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
		
		/*
		var scrollStart = 50;
		var scrollEnd = 2000;
		
		var scrollEnabled = true;
		
		$(window).on('scroll', function () {
					
			scrollTop = $(window).scrollTop();	
			
			if (scrollEnabled) {
				
				$('body').css({'height':(winHeight + scrollEnd)});
				$('.new_map').css({'opacity': 1});				// Map Transition
				var sProgress = (scrollTop - scrollStart) / (scrollEnd - scrollStart);
							
				if (sProgress > 1) { sProgress = 1; }
				else if (sProgress < 0) { sProgress = 0; }
				
				$('.new_map').css({'opacity': sProgress});

				if (sProgress > 0.01) {
					$('span.2day').fadeOut(timeShort);	
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
			
			
			
			*/
			
			
	// INTRO ********************************************************
		/*
		$('h1').delay(delayTime).fadeIn(timeMed, function() { 			// TITLE
			addtoDelay(timeMed+500);
		
		// Intro Text	
			for ( i = 0, arrayLoop = $( "p.fact" ).toArray(); i < arrayLoop.length; i++ ) { // Find all elements with the class 'fact' and cycle through them.
				setTimeout(fadeInOut(arrayLoop[i]),delayTime);	// Fade in and out each fact
			}	
		});
		
			fadeInMap();
		function fadeInMap() {
			// Map Intro	
			$('.old_map').before("<div class=\"map large_map new_map\"></div>");
			
			$('.new_map').delay(delayTime).fadeIn(5000, function(){ 
				$('.old_map').fadeIn(100);
				$('p.date').text(today).fadeIn(timeShort, function() { addtoDelay(timeShort);}); // TITLE (DATE)	
				addtoDelay(timeLong + timeShort); 
			});
		}
	
		
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





		
		
	// MEDIA PLAYER ********************************************************
	function mediaPlayer(x) {
		
		firstStory = false;
		$('section, .timeline, .toggleState').hide();
		
		var story = "#" + $(x).data('story');
		var player = $(story+' .player');
		var playerDuration =  player[0].duration;
		var playerCurrent = 0;
		var	playerProgress = "0%";
		player[0].currentTime = 0;	
		$(story+' .currentTime').html('00:00');
		displayContinue = true;
		
		docHeight = 0;
		$(story + ' .storySection').each(function() {
			docHeight += $(this).outerHeight(true);
		});

		$('#container').css({'height':'100vh'});
				
		


		if ($(x).attr("data-timeAnchor")) {
			player[0].currentTime = $(x).attr("data-timeAnchor");									
			playerCurrent = $(x).attr("data-timeAnchor");
		}

		
		$(story+' .storyPOI span').html(" ");
			
		var poiCat = $( story + " .poi" ).toArray();
		
		function introduceTimeline() {
			$('.timeline').show().css({'transition':'1s','left':'0px'});
			$('.toggleState').show().css({'transition':'1s','left':'0px'});
		}
		setTimeout(introduceTimeline, 1500);
		
		// Display
		$(story).css({'display':'block'});
		$(story).find('.storySection').first().css({'display':'block'}).hide().fadeIn();
		$(story+' .timeline .scrubed').css({'height':'0'});
		
		$('#intro').css({'display':'none'});
		
		setTimeout(showContinue, 3000);
		setTimeout(introduceTimeline, 1500);
		$(story+' .poster').hide();
		function showPoster() { $(story+' .poster').fadeIn(500); }
		$(story+' .poster')[0].play();
		showPoster();
				
		
		
		for ( i = 0, arrayLoop = $(story+ " .poi_expand" ).toArray(); i < arrayLoop.length; i++ ) { 
			var thisItem = arrayLoop[i];
			var thisSelector = i + 1;
			
			$('<div class="storyPOIx"></div>').appendTo(story+' .storyPOI span');
			
			var poiTargetStory = $(thisItem).parent().data('story');
			var poiAnchorTime = $(thisItem).parent().attr('data-timeanchor');
			var poiTargetTime = $(thisItem).parent().attr('data-target');
									
						
			var poiTitle = $(thisItem).find('h5').clone().css({'font-size':'30px'});
			var poiTimed = "Mentioned at: ";
			var poiTime = formatTime(poiAnchorTime);
			
			var poiText = $(thisItem).find('p:first-of-type').clone().css({'font-size':'18px','text-align':'center'});
			
			var poiLink = $(thisItem).find('p:nth-of-type(2)').clone().css({'padding':'0','padding-top':'10px','height':'auto','background-color':'transparent','color':'rgba(0,0,0,1)','position':'relative','text-decoration':'underline','font-size':'15px','text-align':'center'});
			
			$(story+' .storyPOIx:nth-of-type('+thisSelector+')').append(poiTitle).append(poiTimed).append(poiTime).append(poiText).append(poiLink);
			$(story+' .storyPOIx:nth-of-type('+thisSelector+')').data({story:poiTargetStory,targetTime:poiTargetTime});
						
			$('</div>').appendTo('.storyPOI');
			$('.storyPOI a').css({'display':'none'});
		}
			
		$('.storyPOIx').click(function() {
				togglePausePlay(story,0);
				storyReturn = true;
				$('.story').css({'display':'none'});
				mediaPlayer(this);
		});
			
			
		
		
		
		$("<p>Photo Copyright Bournemouth Echo</p>").insertAfter( $('.cnotice span'));
		$('.storyMedia p').css({'position':'absolute','right':'0','color':'rgba(255,255,255,1)','background-color':'rgba(0,0,0,0.5)','padding':'10px','font-size':'8px'});
		
		
	
		// Update docHeight
		
		
		
		
		function formatTime(s) {

			var indicatorMinutes = Math.floor(s / 60);
			var indicatorSeconds = Math.floor(s - (60 * indicatorMinutes));

			var time = function() {
				
							newCurrent = fraction(offsetScroll(x),$(story+' .timeline').height()) * playerDuration;

				if (indicatorMinutes < 10) { indicatorMinutes = "0" + indicatorMinutes; }
				if (indicatorSeconds < 10) { indicatorSeconds = "0" + indicatorSeconds; }
				return indicatorMinutes + ":" + indicatorSeconds;
			};
			return time;
		}
			$(story+' .totalTime').css({'padding-bottom':'30px'}).text(formatTime(player[0].duration)).show();
		// Define Player Duration
		player.on('loadedmetadata', function() {
			playerDuration = player[0].duration;
			$(story+' .totalTime').text(formatTime(playerDuration)).show();
		});
		
		
		//FUNCTIONS -----------------------------------------------------------------------
				
																			//CalculateTime
		
		function offsetScroll(x) {
			// window position		
			x = (x - ($(story+' .timeline').offset().top)); 
			return x;
		}
		
		function timelineRatio(x) {
			var commonRatio = fraction(offsetScroll(x),$(story+' .timeline').height());
			return commonRatio;
		}
																			//updatePlayer
		function updatePlayer(commonRatio) {
			//Update progress bar and video currenttime
			player[0].currentTime = commonRatio * playerDuration;									
		}		
		
		var autoExpand;
		
		// When player Updates Time, if value is parsed to it - it will be used to update timeline, otherwise the current time will be calculated
		function updateTimeline(newCurrent) { 
			
			if (typeof t !== 'undefined') {
				playerProgress = (newCurrent / playerDuration) * $(story+' .timeline').height();
			} else {
				playerCurrent = player[0].currentTime;
				var timeFraction = (playerCurrent / playerDuration);
				playerProgress = timeFraction * ($(story+' .timeline').height() / 100);
				
				// Every time the player updates, loop through all POI's  
				for ( i = 0; i < poiCat.length; i++ ) { 
					var thisPOI = poiCat[i];
					
					// Establish the range of each POI		
					var poiRange = [
						(parseInt($(thisPOI).attr("data-timeAnchor")) - ((33 / winHeight) * 100)), 
						(parseInt($(thisPOI).attr("data-timeAnchor")) + ((35 / winHeight) * 100))
					];
					
					// If current time is within range, activate POI, otherwise hide it
					if (playerCurrent >= poiRange[0] && playerCurrent <= poiRange[1] && !timeDrag && !poiActive && !$(thisPOI).hasClass('poi_viewed')) {
						expandPOI(thisPOI);
						autoExpand = true;
					} else if (autoExpand && playerCurrent < poiRange[0] && playerCurrent > poiRange[1]) {
							contractPOI(thisPOI);
							contractPOI($(thisPOI));
							$(thisPOI).hide();
					}
				} // End FOR

				if (!scrubbing) {updateScrub(timeFraction*$(story+' .timeline').height());}
					$(story+' .scrubed').css({'height': ((timeFraction*$(story+' .timeline').height()) + "px")});	
			}
		
			$(story+' .currentTime').html(formatTime(player[0].currentTime));

					
		} // END updateTimeline Function
		
		
		
		function updateIndicator(y) {
			if (y === 0) {
				$(story+' .timeIndicator').fadeOut(200).css({'top':'0','transition':'0.1s'});
			} else {
				if (!lockIndicator) {
					var playerProgress = offsetScroll(y);
					
					if (playerProgress < 20) { playerProgress = 20; } 
					else if (($(story+' .timeline').height() - playerProgress) < 20) { playerProgress = $(story+' .timeline').height() - 20; }
					
					$(story+' .timeIndicator').fadeIn(200).css({'transition':'0s','top':playerProgress+"px"});
				

					var indicatorTime = formatTime(((offsetScroll(y)/$(story+' .timeline').height())*playerDuration) + 1);					
					$(story+' .timeIndicator').find('p').text(indicatorTime());			
				}
			}
		}
			
		function updateScrub(p) {
			if (p < 20) { p = 0; }
			else if (($(story+' .timeline').height() - p) < 20) {
				p = $(story+' .timeline').height() - ($(story+' .scrubHead').height() / 2);
			}
			$(story+' .scrubHead').css({'top':p+'px'});
		}
		
		//Expand POI Function
		function expandPOI(thisPOI) {
			$('.poi').removeClass('poi_active').find('.poi_expand').fadeOut(500);
			if ($(thisPOI).find('.poi_expand').height() > (winHeight - $(thisPOI).offset().top)) {
				$(thisPOI).find('.poi_expand').css({'bottom':'0','transform':'translateY(-60%)'});
			}
			$(thisPOI).addClass('poi_active');
			$(thisPOI).find('.poi_expand').fadeIn(500);
			
			lockIndicator = true;
			poiActive = true;
		}
		
		//Contract POI Function
		function contractPOI(thisPOI) {
			$('.poi').removeClass('poi_active');
			$(thisPOI).addClass('poi_viewed').find('.poi_expand').fadeOut(500);			
			
			lockIndicator = false;
			poiActive = false;
			autoExpand = false;
		}
		
		
		function playVideoRemovePoster() {
			if (posterActive) {
				$(story+' .playVideo').css({'display': 'none'});
				$(story+' .video_player video.poster').fadeOut(500).css({'display':'none'});
				$(story+' h3').css({'display': 'none'});
				$(story+' .player').fadeIn(500).css({'display': 'block'});
				posterActive = false;
			}
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
		

		$(story+' .video_player video.poster').fadeIn(500).css({'display':'block'});
		$(story+' h3').css({'display': 'block'});
		$(story+' .player').fadeOut(500).css({'display': 'none'});
		
		posterActive = true;
		
		var poiActive = false;
		
		$('.storyIntermission .returnMap').click(function() {
			window.location.href = "main.html";
		});
		
		$('.storyIntermission .continueStory').click(function() {
			$(story+' .transcript,'+story+' .storyMedia').css({'display':'block'}).fadeIn(500);
			$('html, body').animate({
					scrollTop: ($(story+' .storyIntermission').offset().top + 300)
				}, 1000);		
			$(story+' .reminder').fadeOut(500);
			$(story+' .continueStory').css({'display':'none'}).fadeOut(500);
			$(story+' .storyIntermission .returnMap').css({'margin-left':'50%','transform':'translateX(-50%)'});	
		});
		
		$('.reminder').click(function() {
			$(story+' .transcript,'+story+' .storyMedia').css({'display':'block'}).fadeIn(500);
			$(story+' .continueStory').css({'display':'none'}).fadeOut(500);
			$(story+' .storyIntermission .returnMap').css({'margin-left':'50%','transform':'translateX(-50%)'});			
			$('html, body').animate({
					scrollTop: ($(story+' .storyIntermission').offset().top + 300)
				}, 1000);		
			$(story+' .reminder').fadeOut(500);
		});
		
		
		
		// ---------ON CLICK -------------
		// Mouse Down, set timeDrag to true, updatePlayer
		$(story+' .timeline').mousedown(function(e) {
						
			if ($(e.target).hasClass('poi')||$(e.target).hasClass('poi_expand')) {return;}
				
			timeDrag = true;
			updateIndicator(e.pageY);

			togglePausePlay(story, 1); // 0 = make pause, 1 = make play, other = toggle
			
			playVideoRemovePoster();
			
		});
		
		
		// Mouse Up, set timeDrag to false, updatePlayer
		$(story+' .timeline').mouseup(function(e) {
						
			if ($(e.target).hasClass('timeline')&&$(e.target).hasClass('poi_expand')) {
				if(timeDrag) {
						timeDrag = false;
						updateIndicator(0);
						updatePlayer(timelineRatio(e.pageY));	
						updateTimeline(timelineRatio(e.pageY));
					}
			} else {
				return;
			}
		});
		
		
		
			
		// ---------ON DRAG -------------
		// On drag, updatePlayer, double check target is target, update scrub head, indicator and time.
		$(story + ' .timeline').mousemove(function(e) {
			if(timeDrag) {
				if (!$(e.target).hasClass('poi_expand')||!$(e.target).hasClass('toggleState')) {
						updateTimeline(timelineRatio(e.pageY));
						updatePlayer(timelineRatio(e.pageY));
				} else { return;}
			}
			
			if ($(e.target).hasClass('poi_expand')) {return;}
				scrubbing = true;
				$(story+' .scrubHead').addClass('active');
				updateIndicator(e.pageY);
				updateScrub(offsetScroll(e.pageY));	
				showTimeline();
		});
		
		
		
		
		
		
		
		
		
		// ---------ON HOVER -------------
		// mouse leave, Set scrub_head back to current time, fade out indicator time 
		$($(story+' .timeline')).mouseleave(function() {
			$(story+' .scrubHead').removeClass('active');
			scrubbing = false;
			timeDrag = false;
			updateTimeline();
			updateIndicator(0);
			hideTimeline();
		});
		
		
		
		//MOUSEENTER: POI
		$('.poi').mouseenter(function() {
			timeDrag = false;
			$(story+' .timeIndicator').css({top:$(this).css('top')});
			$(story+' .timeIndicator').css({'background-color':'rgba(158,146,0,1.00)'});
			$(story+' .scrubHead').addClass('overPOI');
			lockIndicator = true;
		});
		$('.poi').mouseleave(function() {
			timeDrag = false;
			updateIndicator();
			$(story+' .timeIndicator').css({'background-color':'rgba(193,34,36,1.00)'});
			$(story+' .scrubHead').removeClass('overPOI');
			lockIndicator = false;
		});
		
		$('<div class="hoverArea" style="z-index:8; position:fixed; width:50px; left: 0; top: 0; height: 100%"></div>').insertAfter($('.timeline'));

		$('.hoverArea').hover(function() {
				showTimeline();
		});
		

		
	//MOUSEENTER: POI_EXPAND
		$('.poi_expand, .time_indicator').mouseenter(function() {
			timeDrag = false;
		});
		
		
		// CLICK: POI
		//
		$('.poi').click(function(e) {
			if ($(e.target).hasClass('poi')&&!$(e.target).hasClass('poi_expand')) {
				if (!timeDrag) { 
						if ( $(this).hasClass('poi_active')) {
							contractPOI($(e.target));
						} else {
							lockIndicator = true;
							if ( ($(this).height() / 2) > parseInt($(this).css("top")) ) {} else {}
							expandPOI(this);
						}
				} else {
					return;}
				}
			});
		
		
		//CLICK: POI_EXPAND
		//
		$('.noAction').click(function(e) {
			$(e.target).parent().hide();
		});
		$('.poi_expand').click(function(e) {
			
			if ($(e.target).hasClass('poi_expand')&&!$(e.target).hasClass('noAction')&&!$(e.target).hasClass('clickable')) {
				updateTimeline(timelineRatio($(e.target).parent().offset().top));
				updatePlayer(timelineRatio($(e.target).parent().offset().top));	
			} else { return;}
		});
			
		$('.poi_expand').click(function(e) {
			if ($(e.target).hasClass('clickable')&&!$(e.target).hasClass('noAction')&&!$(e.target).closest('a').length) {
				togglePausePlay(story,0);
				contractPOI($(e.target).parent());
				
				
			} else if ($(e.target).hasClass('noAction')){
				contractPOI($(e.target).parent());
				
				return;
			}
		});
		
		
		
		
		
				
		$(story).find('.continue').click(function() {
			$(story+' .storySummary,'+story+' .storyIntermission,'+story+' .storyPOI,'+story+' .storyFooter').css({'display':'block'}).fadeIn(500);
			$(this).remove();
			$('html, body').animate({
				scrollTop: $(story+' .storySummary').offset().top
			}, 1000);
		});
		
		$(window).on('scroll', function () {
			if (displayContinue) {
				displayContinue = false;
				$(story+' .storySummary,'+story+' .storyIntermission,'+story+' .storyPOI,'+story+' .storyFooter').css({'display':'block'}).fadeIn(500);
				$(story).find('.continue').remove();	
				$('html, body').animate({
					scrollTop: $(story+' .storySummary').offset().top
				}, 1000);	
			}
			
			// Timeline Scroll Position
			var scrollPosition = (($(story+' .timeline').offset().top * ($(story+' .timeline').height()) / (docHeight - winHeight) )) - 2;
			$(story+' .scrollPosition').css({'top': scrollPosition + 'px'});
		
		});			
		
	
		// MEDIA CONTROLS
				
		$(story+' .toggleState').click(function() {
			togglePausePlay(story, 2); // 0 = make pause, 1 = make play, other = toggle
			playVideoRemovePoster();
		});
		
		$('.playVideo').click(function() {
			$(story+' .playVideo').css({'display': 'none'});
			$(story+' .video_player video.poster').fadeOut(500).css({'display':'none'});
			$(story+' h3').css({'display': 'none'});
			$(story+' .player').fadeIn(500).css({'display': 'block'});
		});
		
		player.onended = function() {
			$(story+' .playVideo').css({'display': 'block'});
			$(story+' video .poster').fadeIn(500).css({'display':'none'});
			$(story+' h3').css({'display': 'block'});
			$(story+' .player').fadeOut(500).css({'display': 'block'});
		};

	
	} // END mediaPlayer Function
		
		$('.poi_expand').click(function(e) {
			if ($(e.target).hasClass('clickable')&&!$(e.target).hasClass('noAction')&&!$(e.target).closest('a').length) {
				var poiRef = $(this).parent();
				storyReturn = true;
				$('.story').css({'display':'none'});
				mediaPlayer(poiRef);
			} else {return;}
		});
	
	//CLICK: LOADPLAYER - INITIATE MEDIAPLAYER
	$('.loadPlayer').click(function() {	
		if ($(this).attr("data-story") === "home") {
			$('.story').css({'display':'none'});
			$('.backgroundMap').css({'transition':'ease-in-out all 1s','transform':'scale(1)','opacity':'1'});
			$('.loadPlayer').fadeIn(500);
		} else {
			$('.backgroundMap').css({'transition':'ease-in-out all 1s','transform':'scale(5)','opacity':'0'});
			$('.loadPlayer').fadeOut(500);
			setTimeout(hideTimeline, 2000);
			$('.backgroundMap').delay(5000).remove();
			$('#container .prompt').remove();
			$('#container').css({'overflow': 'visible'});
			mediaPlayer(this);
		}
	});

		
	// DOCUMENT READY
	});
	