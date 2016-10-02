// js_03.js	: array

var coffee = ['스타벅스', '커피빈', '커반', '이디아', '할리스', '투썸'];
//.push() : 뒤에추가
//.unshift() : 앞에추가
//.pop() : 뒤에빼기
//.shift() : 앞에빼기
//앞배열.concat(뒤배열) : 앞배열과, 뒤배열을 합치기
//.indexOf('항복이름') : 원하는 항목이름의 위치(순서)를 찾아가는 방법
//.join() : 배열화 되어잇는 형태를 문자로 나열하는 기능

//console.log(coffee.length);
//console.log(coffee[0]);
//console.log(coffee.push('이자카야'));
//console.log(coffee.unshift('coffee'));

var drink = ['블랙티', '공차', '밀크티', '마테차', '쟈스민']; //배열

var brand = coffee.concat(drink); //concat(변수명)을 하면 목록나열을 변수로함.
//console.log(brand); //배열이 아닌 목록나열.
//console.log(brand.slice(2,-4));
//console.log(brand[3]);
//console.log(brand.indexOf('커반')+1);
console.log(brand.join('-'));