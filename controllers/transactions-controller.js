const db = require("../models/Transaction");

// Function to search Transactions collection.
function getTransactions(req, res) {

	console.log("getTransactions function");
	console.log(req.body);
	res.end();

}

function createTransaction(req, res) {

	console.log("createTransaction function");
	console.log(req.body);
	res.end();

}

function updateTransaction(req, res) {

	console.log("updateTransaction function");
	console.log(req.query.id);
	res.end();

}

function getTransactionById(req, res) {

	console.log("getTransactionById function");
	console.log(req.query.id);
	res.end();

}

module.exports = {
	getTransactions,
	createTransaction,
	updateTransaction,
	getTransactionById
}
