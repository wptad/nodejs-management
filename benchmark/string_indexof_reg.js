/*
indexOf is slower than reg or substring

 timecost_substring: 1006ms
 timecost_indexof: 1413ms
 timecost_reg: 970ms

 */


var pathName= '/stat/hjkl;hjklghjkls4567890-vghjklfghdjkslafds';
var pathName1= '22/stat/hjkl;hjklghjkls4567890-vghjklfghdjkslafds';


console.time('timecost_substring')

for(var i=0; i<10000000; i++){
	if(pathName.length > 7 && pathName.substring(0, 6) === "/stat/"){
//		console.log('true')
	}else{
//		console.log('false')
	}

	if(pathName1.length > 7 && pathName1.substring(0, 6) === "/stat/"){
//		console.log('true')
	}else{
//		console.log('false')
	}
}

console.timeEnd('timecost_substring')



console.time('timecost_indexof')

var val= '/stat/';

for(var i=0; i<10000000; i++){
	if(pathName.indexOf(val)==0){
//		console.log('true')
	}else{
//		console.log('false')
	}

	if(pathName1.indexOf(val)==0){
//		console.log('true')
	}else{
//		console.log('false')
	}
}

console.timeEnd('timecost_indexof')

console.time('timecost_reg')

var pathReg= new RegExp('^/stat/');

for(var i=0; i<10000000; i++){
	if(pathReg.test(pathName)){
//		console.log('true')
	}else{
//		console.log('false')
	}

	if(pathReg.test(pathName1)){
//		console.log('true')
	}else{
//		console.log('false')
	}
}

console.timeEnd('timecost_reg')


