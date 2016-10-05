$(function(){
	var box = $('div');
	// box.on('mouseenter',function(){
	// 	$(this).animate({height: '+=10px'});
	// }).on('mouseleave',function(){
	// 	$(this).animate({height: '-=10px'})
	// });//method체인 형식

	// $('div').hover(function(){
	// 	//마우스 올렸을경우
	// 	$(this).animate({height: '+=15px'});
	// },function(){
	// 	//마우스 벗어날경우
	// 	$(this).animate({height: '-=15px'});
	// });
	$('div:nth-child(1)').css({color:'#333', borderRadius:'1rem'});
	$('div').eq(2).css({color:'#333', borderRadius:'1rem'});
});