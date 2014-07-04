
## How using yun npm registry


```
npm set registry http://registry.example.com/

```


## How access yun private registry

```
/> npm set always-auth true
/> npm login

Username: user
Password: 123456789
Email: npm@npm.com

```

## How to publish private registry

* first make `package.json`
* `npm publish`

### for example:

```
user@server:~# mkdir yun-test
user@server:~/yun-test# npm init 
user@server:~/yun-test# npm publish

```
