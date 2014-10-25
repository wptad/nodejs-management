#Nodejs stuff


##install

* For Debian Wheezy, your best bet is to compile node by yourself:



```
 sudo apt-get install python g++ make checkinstall fakeroot
 src=$(mktemp -d) && cd $src
 wget -N http://nodejs.org/dist/node-latest.tar.gz
 tar xzvf node-latest.tar.gz && cd node-v*
 ./configure
 sudo fakeroot checkinstall -y --install=no --pkgversion $(echo $(pwd) | sed -n -re's/.+node-v(.+)$/\1/p') make -j$(($(nproc)+1)) install
 sudo dpkg -i node_*
```

```
sudo apt-get install python g++ make checkinstall
mkdir ~/src && cd $_
wget -N http://nodejs.org/dist/node-latest.tar.gz
tar xzvf node-latest.tar.gz && cd node-v*
./configure
checkinstall #(remove the "v" in front of the version number in the dialog)
sudo dpkg -i node_*

```



* Uninstall:

```
sudo dpkg -r node

```


* In case you get a permission denied on the node executable, an alternative path might be:


```
umask 0022
./configure
make
checkinstall -D --umask 0022 --reset-uids --install=no
dpkg -i node_*.deb

```

<https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager>


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





