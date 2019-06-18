$(document).ready(function(){

	$('.services_slider').slick({
		infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
    	 appendDots: $(".slide-m-dots_develop"),
    prevArrow: $(".slick-prev_develop"),
    nextArrow: $(".slick-next_develop")
	});


			$(".info-wrapper .collapse").on('show.bs.collapse', function() {
      $(this).closest(".info-wrapper").find(".burger-menu").addClass("menu-on");
    });
			$(".info-wrapper .collapse").on('hide.bs.collapse', function() {
      $(this).closest(".info-wrapper").find(".burger-menu").removeClass("menu-on");
    });


	// $('.info-btn').click(function(){
	// 	$('.burger-menu').toggleClass('menu-on');

	// });


});

