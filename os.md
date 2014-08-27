#os 


## get ips
```
var os= require('os');
var interfaces= os.networkInterfaces();
var ips= '';
for(var nic in interfaces){
	for(var section in interfaces[nic])
		ips+= ',' + interfaces[nic][section].address;
}

```


* example

```
function getLocalIP(prefix) {
	var interfaces = require('os').networkInterfaces();
	var ips = [];
	for (var nic in interfaces) {
		for (var section in interfaces[nic]) {
			var addInfo = interfaces[nic][section];
			if (!addInfo.internal && addInfo.family === 'IPv4') {
				if (prefix) {
					if (new RegExp('^' + prefix).test(addInfo.address)) {
						ips.push(addInfo.address);
					}
				} else {
					ips.push(addInfo.address);
				}
			}
		}
	}
	return ips;
}

var a = getLocalIP('10.10.');
console.log(a);

```