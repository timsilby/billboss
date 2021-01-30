const db = require("../models/Transaction");

// Function to search Transactions collection.
function getTransactions(req, res) {

	const body = JSON.stringify(req.body);
	const result = `getTransactions function | ${body}`
	res.send(result);

}

function createTransaction(req, res) {

	const body = JSON.stringify(req.body);
	const result = `createTransaction function | ${body}`
	res.send(result);

}

function updateTransaction(req, res) {

	const body = JSON.stringify(req.body);
	const result = `updateTransaction function | ${body} | ${req.query.id}`
	res.send(result);

}

function getTransactionById(req, res) {

	const body = JSON.stringify(req.body);
	const result = `getTransactionById function | ${body} | ${req.query.id}`
	res.send(result);

}

function deleteTransaction(req, res) {

	const body = JSON.stringify(req.body);
	const result = `deleteTransaction function | ${body} | ${req.query.id}`
	res.send(result);

}

module.exports = {
	getTransactions,
	createTransaction,
	updateTransaction,
	getTransactionById,
	deleteTransaction
}
