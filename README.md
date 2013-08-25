#Nodejs stuff



<http://www.slideshare.net/sh1mmer/writing-robust-nodejs-applications>

# debug

```
console.log()
console.error()
console.warn()
console.trace()

```

#node-inspector

* install 
 ` npm install -g node-inspector `
 
```
node --debug server.js 

- stop at first line when app start

node --debug-brk  app.js

node-inspector
   info  - socket.io started
visit http://0.0.0.0:8080/debug?port=5858 to start debugging
```

* <http://blog.mostlystatic.com/2012/07/debugging-nodejs-with-node-inspector.html>




#Forever Service


* Running a Node.js Server as a Service Using Forever <http://www.exratione.com/2011/07/running-a-nodejs-server-as-a-service-using-forever/>

* Set Memory HEAP using Forever. (If 'no such file or directory' please try to upgrate forever version)


```
sudo forever start -a -l /tmp/log.log -e /tmp/err.log -c '/usr/local/bin/node --max-old-space-size=16384' /nodejs/server.js

```





