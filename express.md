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

## flash

* app.js

```
	app.use(flash());
	app.use(express.session({ secret: 'SECRET' }));
	app.use(function (req, res, next) {
		/*
		 Notification:
		 1. show notice in this render -> render('template', {notice: {info/success/error/warning: 'value', title: 'option'}})
		 2. show notice in next redirect -> req.flash('info/success/error/warning'), req.flash('title', 'value')
		 */
		res.locals.notice = req.session.flash;
		next();
	})

```

* ejs template: 

```
	$(document).ready(function () {
		var notice = <%- typeof notice != 'undefined' ? JSON.stringify(notice):"{}" %>;
		notice.info && toastr.info(notice.info, notice.title || undefined);
		notice.error && toastr.error(notice.error, notice.title || undefined);
		notice.warning && toastr.warning(notice.warning, notice.title || undefined);
		notice.success && toastr.success(notice.success, notice.title || undefined);
	});


```

##add max-age for static file

```
app.use(express.static(__dirname + '/public', { maxAge: oneYear }));


```


## upload picture

* HTML: 

```
<form enctype="multipart/form-data">
		<input type="file" name="image" onchange="previewImage(event,this)">
</form>

```
* express:

```
app.use(express.bodyParser({ keepExtensions: true, uploadDir: '/my/files' }));



req.files.image

{ size: 74643,
  path: '/tmp/8ef9c52abe857867fd0a4e9a819d1876',
  name: 'edge.png',
  type: 'image/png',
  hash: false,
  lastModifiedDate: Thu Aug 09 2012 20:07:51 GMT-0700 (PDT),
  _writeStream: 
   { path: '/tmp/8ef9c52abe857867fd0a4e9a819d1876',
     fd: 13,
     writable: false,
     flags: 'w',
     encoding: 'binary',
     mode: 438,
     bytesWritten: 74643,
     busy: false,
     _queue: [],
     _open: [Function],
     drainable: true },
  length: [Getter],
  filename: [Getter],
  mime: [Getter] }
  

```
* refer <http://expressjs.com/api.html#req.files>
