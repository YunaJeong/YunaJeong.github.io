// grammar_02.js

// 반복문: 하나가 아닌 여러반복작업시에 진행하는 것을
// 간단하게 처리하는 방법
// for, for in, forEach, while, do while...
//for

// step01---------------------------------------

// for(기준; 기준의 방향(목표); 목표까지의 설정){
// 	조건이 참이면 실행
// }

// for(var i=0; i<=10; i++){
// 	console.log('i',i);
// }

// step02-----------------------------------------

// for 작성시 var기분은 꼭 for안에 들어갈 이유는 없다.
// var i = 0, j = 20;
// for(; 목표설정; 목표까지의 방향설정)
// var i=0, j=20;
// for(; i<j; i++){
// 	console.log('i값', i);
// }

// step03----------------------------------------
// 배열 또는 객체형식을 나열해서 사용하는 방법
// var box=['eunjin', 'jaeyoung', 'yein', 'yuna', 'eunyeong'];
var site=['naver.com', 'daum.net', 'google.com', 'w3schools.com', 'mozila.com'];
// console.log(box[3]);
// var i=0;
// for(; i < box.length; i++){
// 	console.log(box[i]);
// }

var i=0;
for(; i < site.length; i++){
	document.write('<a href="http://' + site[i] + '">' + site[i] + '</a><br />');
}

// step04-----------------------------------------
var i = 0, phone=[
	{'make' : 'samaung', 'phone' : 'galaxy'},
	{'make' : 'apple', 'phone' : 'iphone'},
	{'make' : 'lg', 'phone' : 'v'},
	{'make' : 'pentech', 'phone' : 'im100'}
];
var j = phone.length;
for(; i < j; i++){
	console.log('제조회사:'+phone[i].make +', 제품명:' + phone[i].phone);
}