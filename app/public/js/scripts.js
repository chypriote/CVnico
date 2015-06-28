
$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
	});

$(document).ready(function() {
	 // Smooth scroll
		$('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});
		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

	// Navbar
		$('.header').sticky({topSpacing:0});
		$('body').scrollspy({target:'.navbar-custom', offset:70});
	// Fix for easycharts
    $('.skills').waypoint(function(){
        $('.chart').each(function(){
        $(this).easyPieChart({
                size:140,
                animate: 2000,
                lineCap:'butt',
                scaleColor: false,
                barColor: '#FF5252',
                trackColor: 'transparent',
                lineWidth: 10
            });
        });
    },{offset:'80%'});

  // Background home
		$(".screen-height").height($(window).height());
		$(window).resize(function(){$(".screen-height").height($(window).height());});
		// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		// 	$('#home').css({'background-attachment': 'scroll'});
		// } else {
		// 	$('#home').parallax('50%', 0.1);
		// }

	new WOW({mobile:false}).init();
});