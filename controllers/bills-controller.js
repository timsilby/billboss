const db = require("../models/Bill");

// Function to search bills collection. Query is passed in (req.query)
function getBills(req, res) {

	const body = JSON.stringify(req.body);
	const result = `getBills function | ${body}`
	res.send(result);

}

function createBill(req, res) {

	const body = JSON.stringify(req.body);
	const result = `createBill function | ${body}`
	res.send(result);

}

function updateBill(req, res) {

	const body = JSON.stringify(req.body);
	const result = `updateBill function | ${body} | ${req.query.id}`
	res.send(result);

}

function getBillById(req, res) {

	const body = JSON.stringify(req.body);
	const result = `getBillById function | ${body} | ${req.query.id}`
	res.send(result);

}

function deleteBill(req, res) {

	const body = JSON.stringify(req.body);
	const result = `deleteBill function | ${body} | ${req.query.id}`
	res.send(result);

}

module.exports = {
	getBills,
	createBill,
	updateBill,
	getBillById,
	deleteBill
}
