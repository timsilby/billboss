const router = require("express").Router();
const accountsController = require("../../controllers/accounts-controller");

// These routes match /api/Accounts. Imported into api-routes.js.
// Req and res are automatically passed through to the handlers in most cases.
router.route("/")
	.get(accountsController.getAccountById)
	.post(accountsController.createAccount)
	.put(accountsController.updateAccount)
	.delete(accountsController.deleteAccount);


module.exports = router;
