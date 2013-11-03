/*
 obj test: 1114ms
 list test: 1059ms
 list forEach test: 570ms
 list foreach to filter test: 1205ms
 list pure filter test: 802ms


SO:
1. use forEach is faster than for( var a in {}/[])
2. using filter is faster than forEach
 */
var obj={};
for(var i=0;i<1000;i++){
	obj[i+'']={name:'name', a:'fdsafdsafdsa',b:'fdsafdsafdsafdsafds'};
}

var list=[];
for(var i=0;i<1000;i++){
	list.push({name:'name', a:'fdsafdsafdsa',b:'fdsafdsafdsafdsafds'});
}


var round = 10000;
console.time('obj test')

for(var i=0; i<round; i++){
	for(var key in obj){
		var a=obj[key];
	}
}
console.timeEnd('obj test')


console.time('list test')

for(var i=0; i<round; i++){
	for(var key in list){
		var a=list[key];
	}
}
console.timeEnd('list test')


console.time('list forEach test')
for(var i=0; i<round; i++){
	list.forEach(function(item){
		var a=item;
	})
}
console.timeEnd('list forEach test')



console.time('list foreach to filter test')
var a=[]
for(var i=0; i<round; i++){
	list.forEach(function(item){
		if(item.name)
			a.push(item.name);
	})
}
console.timeEnd('list foreach to filter test')


console.time('list pure filter test')
var a=[]
for(var i=0; i<round; i++){
	a= list.filter(function(item){
		if(item.name)
			return true;
	})
}
console.timeEnd('list pure filter test')