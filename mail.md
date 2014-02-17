mail
=========

<http://www.nodemailer.com/>

```
var nodemailer = require("nodemailer");

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
//	service: "Gmail",
	auth: {
		user: "noreply@example.com",
		pass: "password"
	},
	host: 'mx.example.com',
	port: 587
});

// setup e-mail data with unicode symbols
var mailOptions = {
	from: "example Service <noreply@example.com>", // sender address
	to: "wptad@126.com", // list of receivers: bar@blurdybloop.com, baz@blurdybloop.com
	subject: "Hello ", // Subject line
	text: "Hello world ", // plaintext body
	html: "<b>Hello world </b>" // html body
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
	if(error){
		console.log(error);
	}else{
		console.log("Message sent: " + response.message);
	}
	// if you don't want to use this transport object anymore, uncomment following line
	//smtpTransport.close(); // shut down the connection pool, no more messages
});

```



SMTP Server
===========
* <https://github.com/baudehlo/Haraka>
* <http://haraka.github.io/manual.html>
* How set outbound <http://haraka.github.io/manual/tutorials/SettingUpOutbound.html>
* Flat auth file <http://haraka.github.io/manual/plugins/auth/flat_file.html>


TEST TOOL:

```
 swaks -f noreply@example -t wptad@126.com -s localhost   -p 587 -au account -ap password
```