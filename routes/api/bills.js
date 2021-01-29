const router = require("express").Router();
const billsController = require("../../controllers/billsController");

// These routes match /api/bills. Imported into api-routes.js.

// Generic get route. Req should contain the mongoose query object passed from the axios call.
router.get("/", function(req, res) {
	billsController.getBills(req, res);
});

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
