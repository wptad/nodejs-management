#express


##add max-age for static file

```
app.use(express.static(__dirname + '/public', { maxAge: oneYear }));


```