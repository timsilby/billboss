const { json } = require("express");
const db = require("../models/Account");

function getAccountById(req, res) {

	const body = JSON.stringify(req.body);
	const result = `getAccountById function | ${body} | ${req.query.id}`
	res.send(result);

}

function createAccount(req, res) {

	const body = JSON.stringify(req.body);
	const result = `createAccount function | ${body}`
	res.send(result);

}

function updateAccount(req, res) {

	const body = JSON.stringify(req.body);
	const result = `updateAccount function | ${body} | ${req.query.id}`
	res.send(result);

}

function deleteAccount(req, res) {

	const body = JSON.stringify(req.body);
	const result = `deleteAccount function | ${body} | ${req.query.id}`
	res.send(result);

}

module.exports = {
	createAccount,
	updateAccount,
	getAccountById,
	deleteAccount
}
