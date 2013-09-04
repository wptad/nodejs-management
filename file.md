#file


## read large file

```
var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('your/file');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
  // process line here
});

rl.on('close', function() {
  // do something on finish here
});

```


* Reference 
* <https://coderwall.com/p/ohjerg?&p=8&q=>
* <http://bassnutz.wordpress.com/2012/09/09/processing-large-files-with-nodejs/>


### line by line

<https://github.com/RustyMarvin/line-by-line>