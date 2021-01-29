const db = require("../models/Bill");

// Function to search bills collection.
function getBillsets(req, res) {

	console.log("getBills function");
	console.log(req.body);
	res.end();

}

function createBillset(req, res) {

	console.log("createBill function");
	console.log(req.body);
	res.end();

}

function updateBillset(req, res) {

	console.log("updateBill function");
	console.log(req.query.id);
	res.end();

}

function getBillsetById(req, res) {

	console.log("getBillById function");
	console.log(req.query.id);
	res.end();

}

module.exports = {
	getBillsets,
	createBillset,
	updateBillset,
	getBillsetById
}
