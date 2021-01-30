const db = require("../models/Account");

function createAccount(req, res) {

	console.log("createAccount function");
	console.log(req.body);
	res.end();

}

function updateAccount(req, res) {

	console.log("updateAccount function");
	console.log(req.query.id);
	res.end();

}

function getAccountById(req, res) {

	console.log("getAccountById function");
	console.log(req.query.id);
	res.end();

}

module.exports = {
	createAccount,
	updateAccount,
	getAccountById
}
