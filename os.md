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