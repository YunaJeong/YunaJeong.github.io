/*js_02.js*/

//&&
//||
//!

var thu, meeting, diner, go;
//토요일에 업체와 미팅, 저녁, 가야?

thu = true;
meeting = true;
diner = false;
go = !!thu && meeting || !!diner;

console.log(go);