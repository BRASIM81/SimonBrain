window.onload = function(){
	if(document.cookie.length != '0'){
		var cookieVal = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((acumulator, [key, value]) => ({
			...acumulator,
			[key.trim()]: decodeURIComponent(value)
		}), {});
		if (cookieVal.cookieacpt == 'yes') {
			$("#cookies").css({
				'opacity':'0',
				'transform':'translate(0,100%)'
			});
		}
	}
};
new WOW().init();
$(document).ready(function(){
	 var d = new Date();
	 var y = d.getFullYear();
	 document.getElementById('copy').innerHTML = "Simon Brain " + y;
	$("#cookie").on('click', function(e){
		document.cookie = "cookieacpt=yes;max-age=" + (60*60*24*30) + "; path=/";
		e.preventDefault();
		$("#cookies").css({
			'opacity':'0',
			'transform':'translate(0,100%)'
		});
	});
	 $('.home-nav').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			 scrollTop: 0
		},800);
		});
		$(window).on('scroll', function(){
				var wScroll = $(this).scrollTop();
				$('.head-logo>h1').css({
					'transform' : 'translate(0px, '+wScroll / 1.4+'%)'
				});
				$('.head-logo>h2').css({
					'transform' : 'translate(0px, '+wScroll / 1.2+'%)'
				});
				if(wScroll > $('.trigger').offset().top-($(window).height()/1.2)){
				$('.home-nav').css({
						'transform':'translate(0,0)',
						'opacity':'0.8'
				});
				} else {
				$('.home-nav').css({
						'transform':'translate(-100px,0)',
						'opacity':'0'
				});
				}
		});
});
