// jquery_05.js

$(function(){
	var pa = $('p');
	$('.show').on('click', function(){
		pa.slideDown(500);
	});
	$('.hide').on('click', function(){
		pa.slideUp(500);
	});
	$('.toggle').on('click', function(){
		pa.stop().slideToggle(500);
	});
});