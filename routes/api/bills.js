const router = require("express").Router();
const billsController = require("../../controllers/bills-controller");

// These routes match /api/bills. Imported into api-routes.js.
// Req and res are automatically passed through to the handlers in most cases.
router.route("/")
	.all(function (req, res, next) {
		if (req.currentUser) {
			console.log('authenticated!', req.currentUser);
			next();
		}
		else {
			return res.status(403).send('Not authorized')
		}
	})
	.get(function (req, res) {
		if (req.query.id) { billsController.getBillById(req, res) }
		else { billsController.getBills(req, res) }
	})
	.post(billsController.createBill)
	.put(billsController.updateBill)
	.delete(billsController.deleteBill);


module.exports = router;
