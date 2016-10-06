// jquery_02.js
$(function(){
	// $('body').css({backgroundColor:#'fa0'});
	$('h1>a').attr({'href':'http://naver.com', 'title':'네이버로 이동','target':'_blank'});
	$('#btn').val('버튼');//$('#btn').attr({'value':'버튼입니다.'});	주어진 속성 변경
	$('h1>a').html('<span>');	//html코드 삽입(기존의 내용은 사라짐)
	//코드내의 텍스트 삽입
	$('h1 span').text('내용이 바뀌었습니다.');
	//body뒤에 p태그 삽입
	$('body').append('<p>');

	$('body').prepend('<p>앞에 삽입되었습니다.</p>');
	
	// $('p').next('p').html('<p>또다른 내용</p>');
	$('body>p:last').text('내용이 변경 삽입되었습니다.');
	
	$('body').addClass('box');
	//$('body').attr({'class':'box'});
	$('.box').css({backgroundColor:'#fa0', color:'#fff'});

	$('body').append('<div class="box">');
});