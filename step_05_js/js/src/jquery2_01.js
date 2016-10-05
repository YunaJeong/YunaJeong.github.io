// $(function(){
// 	var box = $('div');
// 	// box.on('mouseenter',function(){
// 	// 	$(this).animate({height: '+=10px'});
// 	// }).on('mouseleave',function(){
// 	// 	$(this).animate({height: '-=10px'})
// 	// });//method체인 형식

// 	// $('div').hover(function(){
// 	// 	//마우스 올렸을경우
// 	// 	$(this).animate({height: '+=15px'});
// 	// },function(){
// 	// 	//마우스 벗어날경우
// 	// 	$(this).animate({height: '-=15px'});
// 	// });
// 	//$('div:nth-child(1)').css({color:'#333', borderRadius:'1rem'});
// 	$('div:even').css({color:'#333', borderRadius:'1rem'});
// 	$('div:odd').css({color:'#f0f', borderRadius:'50%'});
// 	//$('div').first().css({backgroundColor:'#fca'});
// 	$('div:first').css({backgroundColor:'#fac'});
// 	$('div:contains("yellow")').css({borderStyle:'solid', borderWeight:'2px', borderColor:'#333'});

// 	$('#ck').on('click',function(){
// 		if($('#ck:checked')){
// 			$('#blue').css({display:'none'});
// 		}else{
// 			$('#blue').css({display:'block'});
// 		}
// 	});
// });

$(function(){
	var box = $('div');

	$('#red').on('click',function(){
		$(this).next().animate({width:'100px', padding:'1rem'});
	});//show, fadeIn, slideDown
	$('#blue').on('click',function(){
		$(this).animate({width:0, padding:0, overflow:'hidden'});
	});//hide, fadeOut, slideUp
	$('#yellow').on('click',function(){
		var blue = $(this).prev();
		var yWidth = blue.width();
		if(yWidth === 0){
			blue.animate({width:'100px', padding:'1rem'});
		}else{
			blue.animate({width:0, padding:0, overflow:'hidden'});
		}
	});//toggle, fadeToggle, slideToggle
});