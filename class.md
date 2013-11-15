# class

```

function Base(var1, var2)
{
    this.var1= var1;
    this.var2= var2;
}

Base.prototype.method= function()
{
}

function Sub(var1, var2 , var3, var4)
{
    Base.call(this, var1, var2);
    this.var3= var3;
    this.var4= var5;
}

require('util').inherits(Sub, Base);

Sub.prototype.method= function()
{
    Base.prototype.method.apply(this, [].slice.call(arguments));
}

```


```
Super.prototype.method.apply(this, [].slice.call(arguments));

```