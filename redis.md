
## Redis hash client

```
var HashRing = require('hashring');
var redisClient = require("redis");

var redisClients = {
	'1': redisClient.createClient(1402, '10.10.3.3'),
	'2': redisClient.createClient(1403, '10.10.3.3'),
	'3': redisClient.createClient(1402, '10.10.3.4'),
	'4': redisClient.createClient(1403, '10.10.3.4')
};

var ring = new HashRing({'1': {weight: 1}, '2': {weight: 1}, '3': {weight: 1}});

function getClient(key) {
	console.log(ring.get(key), key);
	return redisClients[ring.get(key)];
}
```