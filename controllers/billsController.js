const db = require("../models/Bill");

// Function to search bills collection. Query is passed in (req.query)
function getBills(req, res) {

	console.log("getBills function");
	res.json(res);

}

module.exports = {
	getBills
}
