// This is where all the authentication happens
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const {
	promisify
} = require('util');

const genSalt = promisify(bcrypt.genSalt);
const hash = promisify(bcrypt.hash);
const compare = promisify(bcrypt.compare);

const {
	emailValidate,
	modelAct
} = require('../configs/helpers');
const userModel = require('../models/userModel');

passport.use(new LocalStrategy({
	usernameField: 'id'
}, async (username, password, done) => {
	let userQuery = {
		_id: username
	};
	try {
		const user = await modelAct(userModel, userQuery, 'findOne');
		const compared = await compare(password, user.password);
		if (compared && !user.is_signed_in) {
			const opt = {
				query: {
					_id: user._id
				},
				data: {
					$set: {
						is_signed_in: true
					}
				}
			};
			await modelAct(userModel, opt, 'updateOne');
			return done(null, user);
		} else {
			return done(null, false);
		}
	} catch (e){
		return done(null, null);
	}
}));

passport.use('local-register', new LocalStrategy({
	passReqToCallback: true,
	usernameField: 'id'
}, async (req, username, password, done) => {
	const id = (typeof req.body.id == 'string' && req.body.id.length > 5 && req.body.id.length < 15) ? req.body.id : false;
	const name = (typeof req.body.name == 'string' && req.body.name.length > 0) ? req.body.name : false;
	const email = await emailValidate(req.body.email) ? req.body.email : false;
	password = (typeof req.body.password == 'string' && req.body.password.length >= 8) ? req.body.password : false;

	if (id && name && email && password) {
		const query = {
			_id: username
		};
		const user = await modelAct(userModel, query, 'findOne');
		if (user) {
			return done(null, false);
		} else {
			try {
				const salt = await genSalt(10);
				password = await hash(password, salt);
				const userObject = new userModel({
					_id: id,
					name: name,
					email: email,
					password: password,
					is_admin: false,
					is_signed_in: false
				});
				await modelAct(undefined, userObject, 'save');
				return done(null, userObject);
			} catch (e){
				return done(null, false);
			}
		}
	} else {
		done(null, false);
	}
}));


passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	userModel.findById(id, function(err, user) {
		done(err, user);
	});
});
