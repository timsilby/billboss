const router = require("express").Router();
const transactionsController = require("../../controllers/transactions-controller");

router.route("/")
	.get(function (req, res) {
		if (req.query.id) {transactionsController.getTransactionById(req, res)}
		else {transactionsController.getTransactions(req, res)}
	})
	.post(transactionsController.createTransaction)
	.put(transactionsController.updateTransaction)
	.delete(transactionsController.deleteTransaction);


module.exports = router;
