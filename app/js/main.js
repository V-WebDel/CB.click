$(function() {

	// Smooth scroll for anchor link
	$(".top__btn-bottom").on("click", function (event) {
		
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top + 50}, 1200);

	});

	// Select open
	$('.select__current').click(function(evt) {
		$(this).parent('.select').toggleClass('select_open');
		$(this).next('.select__list').toggleClass('select__list_open');
		$(this).closest('.select').children('.select__arrow').toggleClass('select__arrow_open');
		evt.preventDefault();
	});

	$('.select__link').click(function() {
		var current_flag = $(this).html();
		$(this).closest('.select').children('.select__current').html(current_flag);
		$(this).closest('.select').children('.select__arrow').removeClass('select__arrow_open');
		$(this).closest('.select').removeClass('select_open');
		$(this).closest('.select__list').removeClass('select__list_open');
	});

	$(document).mouseup(function (e) {
		var container = $(".select");
		if (container.has(e.target).length === 0){
			$('.select').children('.select__arrow').removeClass('select__arrow_open');
			$('.select').removeClass('select_open');
			$('.select__list').removeClass('select__list_open');
		}
	});

	//Parallax 'clicks'
	$('.top').mousemove(function(e){    
		var pos = $(this).offset(),
			elem_left = pos.left,
			elem_top = pos.top,
			elem_width = $(this).width(),
			elem_height = $(this).height(),
			x_center,
			y_center;  

		x_center = ( elem_width / 2 ) - ( e.pageX - elem_left );
		y_center = ( elem_height / 2 ) - ( e.pageY - elem_top );

		$('.top__cursor, .marketing__cursor').each(function(){

			var speed = $(this).attr('data-speed'),     
				xPos = Math.round(-1*x_center/20*speed),
				yPos = Math.round(y_center/20*speed);

			

			$(this).css('transform', 'translate('+xPos+'px, '+yPos+'px)');

       });
	});
	
	// Buttom Top
    $(function() {
    
		$(window).scroll(function() {
			if($(this).scrollTop() > 1000) { 
				$('.btn-top').fadeIn();
			} else {
				$('.btn-top').fadeOut();
			}
    	});
		$('.btn-top').click(function() {
			$('body,html').animate({
				scrollTop:0}, 1500);
			return false;
		});
	});


	// Count animation
	var show = true;
    var countbox = ".marketing__list";
    $(window).on("scroll load resize", function () {
        if (!show) return false;
        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;
        var w_height = $(window).height();
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight();
        if (w_top + 600 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
		
		$('.marketing__count').spincrement({
			thousandSeparator: "",
			duration: 3000
		});
		show = false;
        }
	});
	
	// WOW
	var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       150,
			mobile:       false,
			live:         true,
			callback:     function(box) {

			},
			scrollContainer: null 
		}
	);
	wow.init();

	// Animate.css
	$('.advantages__item').addClass('animated fadeInUp');
	$('.top__title, .link-btn, .promo__btn').addClass('animated zoomIn');
	$('.title-text').addClass('animated flipInX');
	$('.targeting__image, .control__image').addClass('animated zoomIn');
	$('.left').addClass('animated fadeInLeft');
	$('.right').addClass('animated fadeInRight');



});

