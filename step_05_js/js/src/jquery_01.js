// jquery_01.js

$(document).ready(function(){
	// .container{width: 960px; height: 1200px; margin: 0 auto; background-color:#cdcd7f;}
	var con = $('.container');

	//con.css('width':'960px')
	//	.css('height':'1200px')
	//	.css('backgroundColor':'#cdcd7f');

	con.css({
		'width':'960px',
		'height':'1200px',
		'backgroundColor':'#cdcd7f'
	});
});