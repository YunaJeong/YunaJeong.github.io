// jquery_02.js

//버튼을 클릭하면, .view 를 사라지게 해라!

//$('선택자').on('이벤트');
//이벤트: 클릭, 드레그, 키보드누름, 휠이동, 마우스를 띄는것, 더블클릭, 링크이동....
//click, dblclick, wheel, mouseenter, mouseleave...

$('button').on('click', function(){
	$('.view').css({'backgroundColor':'#f08'});
});

//무엇을(선택)
//어떻게(행동)
