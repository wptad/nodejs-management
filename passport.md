

```
app.use(cookieParser());
app.use(cookieSession({secret: 'SU4UMj9v0zCm4VV'}));
app.use(passport.initialize());
app.use(passport.session());

var passport = require('passport');


require('./module/passportProcess');
router.post('/login', passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login'
}));


```

* module

```
/**
 * Module dependencies.
 */
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	user = require('./user');

/**
 * LocalStrategy
 *
 * This strategy is used to authenticate users based on a userName and password.
 * Anytime a request is made to authorize an application, we must ensure that
 * a user is logged in before asking them to approve the request.
 */
passport.use(new LocalStrategy({
		usernameField: 'mobile',
		passwordField: 'password'
	},
	function (mobile, password, done) {
		user.checkPassword(mobile, password, function (err, user) {

			if (err) {
				return done(err, false, {message: '内部错误，请稍后重试'});
			}

			console.log(user);
			if (user) {
				return done(null, user, {message: "登录成功！"});
			} else {
				return done(null, false, {message: '账号与密码不一致，请重试'});
			}
		})
	}
));

passport.serializeUser(function (user, done) {
	if (user && user.userID) {
		done(null, user.userID);
	}
	else {
		console.error('ERROR: invalid userInfo when serializeUser', console.stack);
		done('invalid userInfo');
	}
});

passport.deserializeUser(function (userID, done) {
	user.getUser(userID, function (err, user) {
		done(err, user);
	});
});




```