const router = require("express").Router();
const billsController = require("../../controllers/billsets-controller");

// These routes match /api/billsets. Imported into api-routes.js.
// Req and res are automatically passed through to the handlers in most cases.
router.route("/")
	.get(function (req, res) {
		if (req.query.id) {billsController.getBillsetById(req, res)}
		else {billsController.getBillsets(req, res)}
	})
	.post(billsController.createBillset)
	.put(billsController.updateBillset);


module.exports = router;
