$(document).ready(function() {
	$('.menu-toggle').click(function() {
		$(this).toggleClass('active');
		$('.menu-nav ').toggleClass('active-nav');
		$("body").toggleClass("over");
	});
	$('.menu-nav li').click(function() {
		$('.menu-nav ').removeClass('active-nav');
		$('.menu-toggle').removeClass('active');
		$("body").toggleClass("over");
	});
	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 150) {
			$('.full-menu').css({ 'background-color': '#212121' });
		} else {
			$('.full-menu').css({ 'background-color': 'transparent' });
		}
	});

	$('.name-inp').on('input', function() {
		if (/\d/.test($.trim($('.name-inp').val()))) {
			$('.name-inp').val($.trim($('.name-inp').val().replace(/\d/g, '')));
		}
	});

	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	var date = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

	$('form').on('submit', function(e) {
		e.preventDefault();

		if ($.trim($('.name-inp').val())) {
			$('.name-inp').css({
				background : 'green'
			});
		} else {
			$('.name-inp').css({
				background : 'red'
			});
		}
		if (re.test($('.email-inp').val())) {
			$('.email-inp').css({
				background : 'green'
			});
		} else {
			$('.email-inp').css({
				background : 'red'
			});
		}
		if (date.test($('.date').val())) {
			$('.date').css({
				background : 'green'
			});
		} else {
			$('.date').css({
				background : 'red'
			});
		}
		if ($('.sel').val() != 0) {
			$('.sel').css({
				background : 'green'
			});
		} else{
			$('.sel').css({
				background : 'red'
			});
		}
		if ($.trim($('.name-inp').val()) && re.test($('.email-inp').val()) && date.test($('.date').val()) && ($('.sel').val() != 0)) {
			$(this)[0].submit();
		} else {
			return;
		}
	});

	$(window).on('scroll', function() {
		if ($(window).scrollTop() > $('.main-section').offset().top - 150) {
			$('.about').css({ color: 'yellow' });
		} else {
			$('.about').css({ color: '#fff' });
		}
		if ($(window).scrollTop() > $('.section').offset().top - 150) {
			$('.about').css({ color: '#fff' });
			$('.ingredients').css({ color: 'yellow' });
		} else {
			$('.ingredients').css({ color: '#fff' });
		}
		if ($(window).scrollTop() > $('.section-1').offset().top - 150) {
			$('.ingredients').css({ color: '#fff' });
			$('.mu').css({ color: 'yellow' });
		} else {
			$('.mu').css({ color: '#fff' });
		}
		if ($(window).scrollTop() > $('.section-2').offset().top - 150) {
			$('.mu').css({ color: '#fff' });
			$('.rev').css({ color: 'yellow' });
		} else {
			$('.rev').css({ color: '#fff' });
		}
		if ($(window).scrollTop() > $('.section-3').offset().top - 150) {
			$('.rev').css({ color: '#fff' });
			$('.rv').css({ color: 'yellow' });
		} else {
			$('.rv').css({ color: '#fff' });
		}
	});

	$(".menu-nav li").on("click", function(e){
		e.preventDefault();
		var tg = $(e.target).attr("data-id");
		var t = "#" + tg;
		var ofs = $(t).offset().top;
		$("html, body").animate({scrollTop: ofs - 70},500)
	})

});
