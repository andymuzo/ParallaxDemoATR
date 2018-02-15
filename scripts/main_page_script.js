$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	$(".crowd1").css({
		'transform' : 'translate(0px, ' + wScroll/20 + '%)'
	})

	$(".atrlogo").css({
		'transform' : 'translate(0px, ' + wScroll/1.5 + 'px)'
	})

	$(".crowd2").css({
		'transform' : 'translate(0px, -' + wScroll/30 + '%)'
	})

});