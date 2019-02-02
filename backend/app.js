const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const RedisStore = require('connect-redis')(session);

const usersRouter = require('./routes/users');

const config = require('./configs/config');
const cache = require('./configs/cache');

const app = express();

mongoose.connect(config.database, {
	useNewUrlParser: true
});
const db = mongoose.connection;

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use('/public', express.static(__dirname + '/public'));

//
app.use(logger('dev'))
	.use(express.json())
	.use(express.urlencoded({
		extended: false
	}))
	.use(cookieParser());

require('./configs/passport');

// Redis Session
app
	.use(session({
		store: new RedisStore(),
		secret: config.sessionSecret,
		resave: false,
		saveUninitialized: false
	}))
	.use(passport.initialize())
	.use(passport.session());

// All the routes
app
	.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404));
});

// error handler
app.use((err, req, res) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.sendStatus(err.status || 500);
});

module.exports = app;
