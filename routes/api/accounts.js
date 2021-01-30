const router = require("express").Router();
const accountsController = require("../../controllers/accounts-controller");

// These routes match /api/Accounts. Imported into api-routes.js.
// Req and res are automatically passed through to the handlers in most cases.
router.route("/")
	.get(function (req, res) {
		if (req.query.id) {accountsController.getAccountById(req, res)}
		else {accountsController.getAccounts(req, res)}
	})
	.post(accountsController.createAccount)
	.put(accountsController.updateAccount);


module.exports = router;
