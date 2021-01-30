const db = require("../models/Bill");

// Function to search bills collection.
function getBillsets(req, res) {

	const body = JSON.stringify(req.body);
	const result = `getBillsets function | ${body}`
	res.send(result);

}

function createBillset(req, res) {

	const body = JSON.stringify(req.body);
	const result = `createBillset function | ${body}`
	res.send(result);

}

function updateBillset(req, res) {

	const body = JSON.stringify(req.body);
	const result = `updateBillset function | ${body} | ${req.query.id}`
	res.send(result);

}

function getBillsetById(req, res) {

	const body = JSON.stringify(req.body);
	const result = `getBillsetById function | ${body} | ${req.query.id}`
	res.send(result);

}

function deleteBillset(req, res) {

	const body = JSON.stringify(req.body);
	const result = `deleteBillset function | ${body} | ${req.query.id}`
	res.send(result);

}

module.exports = {
	getBillsets,
	createBillset,
	updateBillset,
	getBillsetById,
	deleteBillset
}
