// grammar_01.ja
/*
*javascript 문법
*조건문(if문, 삼항연산자)
*반복문(for문, while문)

*/
//조건문(if-어떠한 조건을 주고, 조건에 부합되면 작동되게 만드는 기능)
// step01
// if(조건 형태){
// 	참이면 현재위치가 실행
// };
// var num=10;
// if(num < 11){
// 	console.log('변수 num은 11보다 작습니다.');
// }

// step02
// if(조건 형태){
// 	조건이 참이면 현재 위치 실행
// } else{
// 	조건이 거짓이면 현재 위치 실행
// };
// var num=10;
// if(num > 11){
// 	console.log('변수 num은 11보다 큽니다.');
// } else{
// 	console.log('변수 num은 11보다 작거나 같습니다..');
// }

// step03
// if(조건1){
// 	조건1이 참이면 실행
// } else if(조건2){
// 	조건2가 참이면 실행
// } else if(조건3){
// 	조건3이 참이면 실행
// } else {
// 	조건 1,2,3에 해당되지 않으면 실행
// }
var subject = 'mathMathics';
var subLength = subject.length;

if(subLength < 2){
	console.log('작은수');
} else if(subLength <= 5){
	console.log('다섯글자보다 작거나 같은수');
} else if(subLength <= 10){
	console.log('열글자보다 작거나 같은수');
} else{
	console.log('열글자보다 많은수');
}
console.log('subLenght의 실제 글자수', subLength);

// 삼항연산자
// (조건) ? 참이면 실행:거짓이면 실행;\
var thr = 3;

(thr < 4) ? console.log('4보다 작다') : console.log('크다');

// 스위치문
// switch(조건){
// 	case 조건결과1:
// 		조건 결과1이 참일경우 실행;
// 	break;
// 	case 조건결과2:
// 		조건 결과2이 참일경우 실행;
// 	break;
// 	case 조건결과3:
// 		조건 결과3이 참일경우 실행;
// 	break;
// 	case 조건결과4:
// 		조건 결과4이 참일경우 실행;
// 	break;
// 	default:
// 		조건이 부합되지 않는 경우 실행;
// }
var numberN = prompt('원하는 숫자를 입력하세요!');
switch(numberN%4){
	case 1:
		console.log('numberN을 4로 나누면 1이 남는다');
	break;
	case 2:
		console.log('numberN을 4로 나누면 2이 남는다');
	break;
	case 3:
		console.log('numberN을 4로 나누면 3이 남는다');
	break;
	default:
		console.log('남는것이 없다');
}