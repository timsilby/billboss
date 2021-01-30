const db = require("../models/User");

function getUsers(req, res) {

	console.log("getUsers function");
	console.log(req.body);
	res.end();

}

function createUser(req, res) {

	console.log("createUser function");
	console.log(req.body);
	res.end();

}

function getUserById(req, res) {

	console.log("getUserById function");
	console.log(req.query.id);
	res.end();

}

module.exports = {
	getUsers,
	createUser,
	getUserById
}
