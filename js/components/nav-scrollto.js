$(function(){
		
	var navHeight = $('.top-bar').height();
	
	$(window).resize(function(){
		console.log(navHeight);
	});
	
	$('.top-bar li').on('click', 'a', function () {
		var el = $(this);

		$(".active").removeClass("active");

		el.addClass("active");

		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

			var $target = $(this.hash);

			$target = $target.length && $target || $('[href=' + this.hash.slice(1) + ']');

			if ($target.length) {
				var targetOffset = $target.offset().top;

				//console.log(targetOffset, $target);


				$('html,body').animate({
					scrollTop: targetOffset - navHeight
				}, 500);

				return false;
			}
		}
	});

});