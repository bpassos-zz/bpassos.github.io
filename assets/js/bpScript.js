$(document).ready(function() {

	// scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
	
	$(".twitter").click(function() {
		window.open('http://www.twitter.com/brunopassos');
	});

	$(".facebook").click(function() {
		window.open('http://www.twitter.com/brunopassos');
	});

	$(".dribbble").click(function() {
		window.open('http://www.twitter.com/brunopassos');
	});

	$(".github").click(function() {
		window.open('http://www.twitter.com/brunopassos');
	});

	$(".mail").click(function() {
		window.open('http://www.twitter.com/brunopassos');
	});


});

