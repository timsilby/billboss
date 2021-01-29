const router = require("express").Router();
const billsController = require("../../controllers/billsController");

// These routes match /api/bills. Imported into api-routes.js.
// Req and res are automatically passed through to the handlers in most cases.
router.route("/")
	.get(function (req, res) {
		if (req.query.id) {billsController.getBillById(req, res)}
		else {billsController.getBills(req, res)}
	})
	.post(billsController.createBill)
	.put(billsController.updateBill);


module.exports = router;
