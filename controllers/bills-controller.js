const db = require("../models/Bill");

// Function to search bills collection. Query is passed in (req.query)
function getBills(req, res) {

	console.log("getBills function");
	console.log(req.body);
	res.end();

}

function createBill(req, res) {

	console.log("createBill function");
	console.log(req.body);
	res.end();

}

function updateBill(req, res) {

	console.log("updateBill function");
	console.log(req.query.id);
	res.end();

}

function getBillById(req, res) {

	console.log("getBillById function");
	console.log(req.query.id);
	res.end();

}

function deleteBill(req, res) {

	console.log("deleteBill function");
	console.log(req.query.id);
	res.end();

}

module.exports = {
	getBills,
	createBill,
	updateBill,
	getBillById,
	deleteBill
}
