#express

## API

<http://expressjs.com/api.html>

##Express session 模块的扩展
<http://www.cnblogs.com/straybird/archive/2013/05/25/3099251.html>

## connect

<http://www.senchalabs.org/connect/session.html>

## Express.js 中文入门指引手册

<http://www.csser.com/board/4f77e6f996ca600f78000936#/post/4f77e8db96ca600f780009f3>

## template

```
var express = require('express');
var app = express();

//for debug
app.use(express.logger());

app.configure(function(){
	app.use(express.compress());
	app.use(express.urlencoded());
	app.use(express.json());
	app.use(express.cookieParser());
	app.use(express.methodOverride());
});

app.use(express.static(__dirname + '/html', { maxAge: 86400 }));

var PORT= process.env.PORT|| 9213;
app.listen(PORT);

```


##add max-age for static file

```
app.use(express.static(__dirname + '/public', { maxAge: oneYear }));


```


