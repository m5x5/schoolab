const fs = require('fs');
const config = require('./config');
const path = require('path');

const templateDir = path.join(__dirname, '../views/');

const helpers = {};

helpers.createRandomString = async (length) => {
	return new Promise((resolve, reject) => {
		length = (typeof length == 'number' && length > 0) ? length : false;
		if (length) {
			const possibleCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
			let str = '';
			for (let i = 0; i < length; i++) {
				let randomChar = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
				str += randomChar;
				if (i == (length - 1)) {
					resolve(str);
				}
			}
		} else {
			reject();
		}
	});
};

helpers.modelAct = async (model, opt, method) => {
	return new Promise((resolve, reject) => {
		const availableMethods = ['findOne', 'find', 'save', 'updateOne', 'remove'];
		model = model instanceof Object ? model : undefined;
		method = (availableMethods.indexOf(method) > -1) ? method : null;
		switch (method) {
			case 'findOne':
				resolve(model.findOne(opt).exec());
				break;
			case 'find':
				resolve(model.find(opt).exec());
				break;
			case 'save':
				resolve(opt.save());
				break;
			case 'updateOne':
				resolve(model.updateOne(opt.query, opt.data).exec());
				break;
			case 'remove':
				resolve(model.remove(opt).exec());
				break;
			default:
				reject(new Error(400));
		}
	});
};

helpers.emailValidate = (email) => {
	return new Promise((resolve, reject) => {
		const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		try {
			email = regex.test(email);
			resolve(email);
		} catch (e) {
			resolve(false);
		}
	});
};

module.exports = helpers;
