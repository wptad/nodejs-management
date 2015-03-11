#gist

## getRemoteAddress

```
exports.getRemoteAddress = function (req) {
	return req.connection.remoteAddress || req.headers['x-real-ip'] || req.headers['x-forwarded-for'];
}
```

## nodestreams.com

* <http://nodestreams.com/>

## cartesianProductOf

```
function cartesianProductOf() {
    return _.reduce(arguments, function(a, b) {
        return _.flatten(_.map(a, function(x) {
            return _.map(b, function(y) {
                return x.concat([y]);
            });
        }), true);
    }, [ [] ]);
};
 
cartesianProductOf([1, 2], [3, 4], ['a', 'b'])); // [[1,3,"a"],[1,3,"b"],[1,4,"a"],[1,4,"b"],[2,3,"a"],[2,3,"b"],[2,4,"a"],[2,4,"b"]] 


```
REFER : <http://stackoverflow.com/questions/12303989/cartesian-product-of-multiple-arrays-in-javascript>

## user agent detect

```
var isMobile = {
    Android: function() {
        return /Android/i.test(navigator.userAgent);
    },
    BlackBerry: function() {
        return /BlackBerry/i.test(navigator.userAgent);
    },
    iOS: function() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    },
    Windows: function() {
        return /IEMobile/i.test(navigator.userAgent);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    }
};
```

## mkdirParent

```
function mkdirParent(dirPath, callback) {
	//Call the standard fs.mkdir
	fs.mkdir(dirPath, function (error) {
		//When it fail in this way, do the custom steps
		if (error && error.errno === 34) {
			//Create all the parents recursively
			mkdirParent(path.dirname(dirPath), callback);
			//And then the directory
			mkdirParent(dirPath, callback);
		}
		//Manually run the callback since we used our own callback to do all these
		callback && callback(error);
	});
};

```

## hello world

```
var http = require('http');
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});
server.listen(8000);
console.log("Server running at http://127.0.0.1:8000/");
```


## redirect 


* 5秒之后刷新本页面:

```
<meta http-equiv="refresh" content="5" />
```


* 5秒之后转到baidu首页:

```
<meta http-equiv="refresh" content="5; url=http://www.baidu.com/" />
```


## remote address

```
var remoteAddress = req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress;

```

## cross domain ajax with http basic auth

```
	$.ajax({
		type: "POST",
		url: "http://127.0.0.1:9217/upload",
		data: 'data=fdsfds',
 		crossDomain: true,
        beforeSend: function(xhr){
            xhr.setRequestHeader("Authorization",
            "Basic d3B0YWQ6Z295b290YWQxMjM=");
        }
	}).done(function (result) {
		if (result && result.status === 0) {
			callback();
		} else {
			callback(result.msg);
		}
	});
	

```

## ip2long long2ip

```
//convert IP to Long
exports.ip2Long = function(dot) {
	if (!dot)
		return 0;

	var d = dot.split('.');
	if (d.length === 4)
		return ((((((+d[0]) * 256) + (+d[1])) * 256) + (+d[2])) * 256) + (+d[3]);
	else
		return 0;
}

exports.long2ip = function(ip) {
	//  discuss at: http://phpjs.org/functions/long2ip/
	// original by: Waldo Malqui Silva
	//   example 1: long2ip( 3221234342 );
	//   returns 1: '192.0.34.166'

	if (!isFinite(ip))
		return false;

	return [ip >>> 24, ip >>> 16 & 0xFF, ip >>> 8 & 0xFF, ip & 0xFF].join('.');
}

```

## console with color

* <https://coderwall.com/p/yphywg>


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

## Random Integer

```

function getRandomInt (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

```

* <http://codetheory.in/weighted-biased-random-number-generation-with-javascript-based-on-probability/>
* <https://www.npmjs.org/package/random-weighted-choice>
* <http://codereview.stackexchange.com/questions/4264/javascript-weighted-random-generator>
* <http://erlycoder.com/105/javascript-weighted-random-value-from-array>


