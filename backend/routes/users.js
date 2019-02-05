const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const {
	promisify
} = require('util');
const cors = require('cors');

const genSalt = promisify(bcrypt.genSalt);
const hash = promisify(bcrypt.hash);

const {
	emailValidate,
	modelAct
} = require('../configs/helpers');
const userModel = require('../models/userModel');
const cache = require('../configs/cache');

const router = express.Router();
router.use(cors());

// POST / create user
router.post('/', (req, res, next) => {
	passport.authenticate('local-register', {
		session: false
	}, (err, user, info) => {
		console.log(err, user, info);
		if (user) {
			res.sendStatus(200);
		} else {
			res.sendStatus(400);
		}
	})({'Authorization':{email:'test@gmail.com', password:'Hello', name:'Test'}}, res, next);
});

// PUT / edit user
router.put('/', async (req, res) => {
	// Make sure the user is logged in
	if (req.session.passport !== undefined) {
		const email = await emailValidate(req.body.email) ? req.body.email : false;
		const name = (typeof req.body.name == 'string' && req.body.name.length > 0) ? req.body.name : false;
		let password = (typeof req.body.password == 'string' && req.body.password.length >= 8) ? req.body.password : false;

		const userQuery = {
			_id: req.session.passport.user
		};
		const user = await modelAct(userModel, userQuery, 'findOne');
		const salt = await genSalt(10);
		const opt = {
			query: {
				_id: user._id
			},
			data: {
				$set: {
					name: name ? name : user.name,
					email: email ? email : user.email,
					password: password ? await hash(password, salt) : user.password
				}
			}
		};
		await modelAct(userModel, opt, 'updateOne');
		res.sendStatus(200);
	} else {
		res.sendStatus(401);
	}
});

// POST / login
router.post('/login', (req, res, next) => {
	passport.authenticate('local', (err, user, info) => {
		if (!user || err) {
			console.log(user);
			return res.sendStatus(400);
		}
		req.login(user, {
			session: true
		}, (err) => {
			if (err) {
				return res.sendStatus(400);
			}
			return res.sendStatus(200);
		});
	})(req, res, next);
});

// Logout route
router.get('/logout', async (req, res) => {
	if (req.session.passport !== undefined) {
		const user = await modelAct(userModel, {
			_id: req.session.passport.user
		}, 'findOne');
		req.session.destroy(async err => {
			const opt = {
				query: {
					_id: user._id
				},
				data: {
					$set: {
						is_signed_in: false
					}
				}
			};
			await modelAct(userModel, opt, 'updateOne');
			res.sendStatus(200);
		});
	} else {
		res.sendStatus(400);
	}
});

// Check if user is not available
router.get('/checkname/:id', async (req, res) => {
	const query = {
		_id: req.params.id
	};
	const data = await modelAct(userModel, query, 'findOne');
	if (!data) {
		res.sendStatus(200);
	} else {
		res.sendStatus(400);
	}
});

module.exports = router;
