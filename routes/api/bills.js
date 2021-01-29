const router = require("express").Router();
const billsController = require("../../controllers/billsController");

// These routes match /api/bills. Imported into api-routes.js.

// Generic get route. Req and res are automatically passed through to the handlers.
router.route("/")
	.get(function (req, res) {
		if (req.query.id) {billsController.getBillById(req, res)}
		else {billsController.getBills(req, res)}
	})
	.post(billsController.createBill)
	.put(billsController.updateBill);


// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
