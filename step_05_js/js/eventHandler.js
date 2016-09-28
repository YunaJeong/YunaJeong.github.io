// eventHandler.js

// event : .addEventListener()
var body = document.body;
var logo = document.getElementsByTagName('h1')[0];
// var logo = document.querySelectro('h1');
var pa = document.getElementsByTagName('p')[0];

// step01---------------------------------------
// logo.addEventListener('click', function(){
// 	body.style.backgroundColor = '#0af';
// });

// console.dir(pa);
// pa.style.color = '#f00';

// step02---------------------------------------
logo.addEventListener('click', bodyStyle);
function bodyStyle(){
	body.style.backgroundColor = '#0af';
};