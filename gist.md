#gist

## Convert to base64

```
> var a = new Buffer('key1=value1&key2=value2').toString('base64');
undefined
> a
'a2V5MT12YWx1ZTEma2V5Mj12YWx1ZTI='
> new Buffer(a, 'base64').toString()
'key1=value1&key2=value2'

```


## is port taken


```
var isPortTaken = function(PORT, callback) {
  var net = require('net')
  var tester = net.createServer()
  tester.once('error', function (err) {
    if (err.code == 'EADDRINUSE') {
      callback(null, true)
    } else {
      callback(err)
    }
  })
  tester.once('listening', function() {
    tester.once('close', function() {
      callback(null, false)
    })
    tester.close()
  })
  tester.listen(PORT)
}

```

##Array - max 


```
var arr[1,2,3]
Math.max.apply(Math, arr);

result:3
```
* max/min <http://javascriptrules.com/2009/09/23/fast-minmax-in-arrays/>
##Array - sum 


```
var arr[1,2,3]
arr.reduce(function (a, b) {return a + b});

result:6
```
* Reduce<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce>
##.filter(Boolean)

```
b=a.filter(Boolean);
```
等价于:

```
b=a.filter(function (x) { return Boolean(x); });

```

* <http://www.devign.me/javascript-tip-remove-falsy-items-out-of-an-array/>

##Boolean

```

Boolean(0); // false
Boolean(true); // true
Boolean(1); // true
Boolean(""); // false
Boolean("false"); // true. "false" is a regular, non-empty string

```


## Weighted/Biased Random Number Generation

```
var a=[0.5, 0.2, 0.2, 0.1]
var weightedChoiceSub = function (list) {
	var sum = list.reduce(function (a, b) {return a + b});
	var rnd = Math.random() * sum;
	for (var i in list) {
		rnd -= list[i];
		if (rnd < 0) return i;
	}
}
randomIndex = weightedChoiceSub(a);

```


