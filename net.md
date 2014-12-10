# net

## server with stream example

```
var queueList = [];

var server = net.createServer(function (c) {
	var temBuf = '';
	c.setEncoding('utf8');
	c.on('readable', function () {
		var chunk = c.read();
		if (!chunk) {
			return;
		}
		var data = temBuf + chunk;
		var offset = chunk.lastIndexOf('\n');
		if (offset < 0) {
			temBuf = data;
		} else {
			var length = temBuf.length + offset;
			temBuf = data.slice(length);
			queueList.push(data.slice(0, length));
		}
	});
	console.log('client connected at ' + new Date());
});

```