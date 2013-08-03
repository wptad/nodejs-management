#gist

##Array - max 


```
var arr[1,2,3]
Math.max.apply(Math, arr);

result:3
```
* max/min <http://javascriptrules.com/2009/09/23/fast-minmax-in-arrays/>
##Array - sum 


```
var arr[1,2,3]
arr.reduce(function (a, b) {return a + b});

result:6
```
* Reduce<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce>
##.filter(Boolean)

```
b=a.filter(Boolean);
```
等价于:

```
b=a.filter(function (x) { return Boolean(x); });

```

* <http://www.devign.me/javascript-tip-remove-falsy-items-out-of-an-array/>

##Boolean

```

Boolean(0); // false
Boolean(true); // true
Boolean(1); // true
Boolean(""); // false
Boolean("false"); // true. "false" is a regular, non-empty string

```


