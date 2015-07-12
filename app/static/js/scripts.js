
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
        $('.chart.programmation').each(function(){
	        $(this).easyPieChart({
	                size:100,
	                animate: 2000,
	                lineCap:'butt',
	                scaleColor: false,
	                barColor: '#FF5252',
	                trackColor: false,
	                lineWidth: 15
	            });
	        });
        $('.chart.web').each(function(){
	        $(this).easyPieChart({
	                size:100,
	                animate: 2000,
	                lineCap:'butt',
	                scaleColor: false,
	                barColor: '#5484ff',
	                trackColor: false,
	                lineWidth: 15
	            });
	        });
        $('.chart.frameworks').each(function(){
	        $(this).easyPieChart({
	                size:100,
	                animate: 2000,
	                lineCap:'butt',
	                scaleColor: false,
	                barColor: '#5dff54',
	                trackColor: false,
	                lineWidth: 15
	            });
	        });
        $('.chart.outils').each(function(){
	        $(this).easyPieChart({
	                size:100,
	                animate: 2000,
	                lineCap:'butt',
	                scaleColor: false,
	                barColor: '#ff9054',
	                trackColor: false,
	                lineWidth: 15
	            });
	        });
        $('.chart.OS').each(function(){
	        $(this).easyPieChart({
	                size:100,
	                animate: 2000,
	                lineCap:'butt',
	                scaleColor: false,
	                barColor: '#d454ff',
	                trackColor: false,
	                lineWidth: 15
	            });
	        });
    },{offset:'80%'});
		$('.category h3').click(function(){
			$(this).children().toggleClass('fa-minus').toggleClass('fa-plus');
			$(this).parent().find('.col-sm-3').slideToggle();
		});
		$('.portfolio-slider').slick({
			//prevArrow: '<a href="btn-prev" class="btn-prev">Prev</a>',
			//nextArrow: '<a href="btn-next" class="btn-next">Next</a>',
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 992,
					settings: {slidesToShow: 2}
				},
				{
					breakpoint: 768,
					settings: {slidesToShow: 1}
				}
			]
		});

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