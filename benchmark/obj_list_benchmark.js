var round= 1000;

console.time('using obj');
for(var j=0; j<round; j++){

	var adMap= {};
	var max = 1000;

	for ( var i = 0; i < max; i++ ) {
		adMap[i] = {_id: i, title: 'title here', text: ['text here', 'text here']};
	}

	for(var key in adMap){
		if ( (+key) % 2 == 0 ) {
			delete adMap[key]
		}
	}
}
console.timeEnd('using obj');



console.time('using list');
for(var j=0; j<round; j++){

	var adList= [];
	var max = 1000;

	for(var i=0; i<max;i++ ){
		adList.push({_id:i, title:'title here', text:['text here','text here']});
	}

	adList = adList.filter(function(item){
		if ( item._id % 2 == 0 )
			return true;
		else
			return false;
	})
}


console.timeEnd('using list');




