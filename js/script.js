// JavaScript Document

$(document).ready(function(){  								// Makes sure nothing is done until the 'DOM' (Document Object Model) has loaded
"use strict";
	
// GENERAL FUNCTIONS ------------------
	
	
//	function randomNum(upper, lower) {								// Function to return random number, upper is the highest random number desired, lower is the lowest number desired.
//		return Math.floor(Math.random() * upper) + lower;	
//	}
	
// INTRO ------------------------------

	var i;
	var arrayLoop;
	
	var delayTime = 500;
	var timeIns = 500; // element fade ins
	var timeShort = 2000; // element fade ins
	var timeMed = 3000; // text fade out, map fade in
	var timeLong = 5000; // text fade in
	var timeMapTransition = 10000; // map transition

	function addtoDelay(t) {
		console.log("addtoDelay - " + t);
		delayTime = delayTime + t; 
	}
	
	function removeHidden(e) {
		console.log("removeHidden - " + e);
		$(e).removeClass('hidden');
	}
	
	function fadeInOut(e) {	
		console.log("fadeInOut - " + e);
		$(e).delay(delayTime).css({'opacity':'0'}).animate({'margin-top':'-4px','font-size':'29px','opacity':'0.9'},timeLong, 'linear', removeHidden(e));
		$(e).animate({'margin-top':'-8px','font-size':'28px','opacity':'0'},timeMed, 'linear', function() { $(e).css({'display':'none'}); });
		addtoDelay(timeLong+timeMed);
	}
	
	function fadeInElement(e) {
		console.log("fadeInElement - " + e);
		$(e).delay(delayTime).css({'opacity':'0'}).animate({'margin-top':'-4px','font-size':'29px','opacity':'0.9', 'display':'block'},timeMed, 'linear', removeHidden(e));
		addtoDelay(timeMed);
	}
	
	
	// Intro Text
	
	for ( i = 0, arrayLoop = $( "p.intro" ).toArray(); i < arrayLoop.length; i++ ) {
    	setTimeout(fadeInOut(arrayLoop[i]),delayTime);
  	}
	

	// Loading, Bournemouth and Title Intro
	
	$('p.title').delay(delayTime).fadeIn(timeShort, function() { $(this).removeClass('hidden'); addtoDelay(timeShort+500);}); // LOADING
	$('h1 span').text('2016');
	$('h1').delay(delayTime).fadeIn(timeShort, function() { $(this).removeClass('hidden'); addtoDelay(timeShort);}); // TITLE (DATE)
			
			
	// Map Intro
	
	var day;
	var month;

	switch (new Date().getDay()) {
		case 0:
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
		case 5:
			day = "Friday";
			break;
		case 6:
			day = "Saturday";
	}
	
	switch (new Date().getMonth()) {
		case 0:
			month = "January";
			break;
		case 1:
			month = "February";
			break;
		case 2:
			month = "March";
			break;
		case 3:
			month = "April";
			break;
		case 4:
			month = "May";
			break;
		case 5:
			month = "June";
			break;
		case 6:
			month = "July";
			break;
		case 7:
			month = "August";
			break;
		case 8:
			month = "September";
			break;
		case 9:
			month = "October";
			break;
		case 10:
			month = "November";
			break;
		case 11:
			month = "December";
			break;
	}
	
	var date;
	
	if (Date.getMonth === 1 || 11 || 21 || 31) {
		date = "st";
	} else if (Date.getMonth === 2 || 12 || 22) {
		date = "nd";
	} else if (Date.getMonth === 3 || 13 || 23) {
		date = "rd";
	} else {
		date = "th";
	}
	
	date = Date().getMonth() + date;
	
	console.log(date);
	
	var todaysDate = day + " " + date + " " + month;
			
	$('.old_map').prepend("<div class='hidden map large_map new_map'></div");
	
	$('.new_map').delay(delayTime).fadeIn(timeLong, function() { 
		addtoDelay(timeLong); 
		
		$('.old_map').css({"display":"block"}, function() {
			
			$({ numberValue: $('h1 span').text() }).animate({ numberValue: 1942 }, {
				duration: timeMapTransition, easing: 'swing', step: function() { 
					$('h1').text(todaysDate);
					console.log(todaysDate);
					$('h1 span').text(Math.ceil(this.numberValue));
				}
			});  
			
			$('.new_map').fadeOut(timeMapTransition, 'swing', function() {
				$('.new_map').remove();		
			});
			
		});
	});

		
	// Make Stories Appear
	
	for ( i = 0, arrayLoop = $( ".story").toArray(); i < arrayLoop.length; i++ ) {
    	setTimeout(fadeInElement(arrayLoop[i]), delayTime);
		addtoDelay(500);
  	}


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




});