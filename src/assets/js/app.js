//What input
//jQuery
//Bootstrap
; (($) => {
	'use strict';
	$(window).on('load', function () {

		var slidesCounts = $('#contact-slider .ba-slide').length;
		$('#contact-slider').slick({
			slide: '.ba-slide',
			slidesToScroll: 1,
 

			prevArrow: '#contact-slider .ba-slider__arrow--left',
			nextArrow: '#contact-slider .ba-slider__arrow--right',
		});
	});
})(jQuery);
