#gist

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
