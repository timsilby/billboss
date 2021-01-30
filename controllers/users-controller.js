const db = require("../models/User");

function createUser(req, res) {

	// const body = JSON.stringify(req.body);
	// const result = `createUser function | ${body}`
	// res.send(result);

	db.create(req.body)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err))

}

function updateUser(req, res) {

	const body = JSON.stringify(req.body);
	const result = `updateUser function | ${body} | ${req.query.id}`
	res.send(result);

}

function getUserById(req, res) {

	const body = JSON.stringify(req.body);
	const result = `getUserById function | ${body} | ${req.query.id}`
	res.send(result);

}

function deleteUser(req, res) {

	const body = JSON.stringify(req.body);
	const result = `deleteUser function | ${body} | ${req.query.id}`
	res.send(result);

}

module.exports = {
	createUser,
	updateUser,
	getUserById,
	deleteUser
}
