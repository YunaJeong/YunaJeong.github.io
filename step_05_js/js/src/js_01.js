/*js_01.js*/
//문자.length;
//문자[순번n];
//문자.slice(앞글자, 이후 자를글자);
console.log('abcdefg'.length);

var school = '그린컴퓨터 아트학원 수원점';
console.log('school', school.length);
console.log('school', school[0]);

var sec1, sec2, sec3, sec4;
sec1="지도";
sec2="희망";
sec3="가계";
sec4="잠자리";
var result = sec1[1] + sec2[1] + sec3[0] + sec4[1];
console.log(result);

console.log(school.slice(2,5) + school.slice(11,-1));

//.toUpperCase : 대문자로 바꾸기
//.toLowerCase : 소문자로 바꾸기
var green = 'Green Computer ART School SUWON Place';
var first_upper = green.slice(0,1).toUpperCase();
var all_upper = green.slice(1).toLowerCase();

console.log('대문자', green.toUpperCase() );
console.log('소문자', green.toLowerCase() );
console.log(first_upper + all_upper);