# html

## input validation

* Email: 

```
<input type="email" pattern="[^ @]*@[^ @]*" placeholder="Enter your email">

```


## custom validation

* form

```
<form name="ValidationForm">
    Password: <input type="password" id="password1"/>
    Confirm Password:<input type="password" id="password2"/>
    <input type="submit" value="submit"/>
</form>
```

* javascript

```
window.onload = function () {
    document.getElementById("password1").onchange = validatePassword;
    document.getElementById("password2").onchange = validatePassword;
}
function validatePassword(){
var pass2=document.getElementById("password2").value;
var pass1=document.getElementById("password1").value;
if(pass1!=pass2)
    document.getElementById("password2").setCustomValidity("Passwords Don't Match");
else
    document.getElementById("password2").setCustomValidity('');  
//empty string means no validation error
}


```

## reference

* <http://www.the-art-of-web.com/html/html5-form-validation/>
* <http://www.sitepoint.com/using-the-html5-constraint-api-for-form-validation/>
