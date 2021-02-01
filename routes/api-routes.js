const router = require("express").Router();
const controller = require("../controllers/db-controller");

// These routes are imported into all-routes.js.
// Req and res are automatically passed through to the handlers in most cases.
// :dbcollection is used by the controller to decide which collection to access.
// :fireid (optional) is used to decide which user's documents to use.
router.route("/api/:dbcollection/:fireid?")

	// First check for currentUser in the request. If not there the request hasn't been through
	// the authorization process.
	.all(function (req, res, next) {
		if (req.currentUser) {
			console.log("Authenticated");
			next();
		}
		else {
			return res.status(403).send("Not authorized")
		}
	})

	// If ?id= query is present this is the document id.
	.get(function (req, res) {
		if (req.query.id) { controller.getDocumentById(req, res) }
		else { controller.getDocuments(req, res) }
	})

	.post(controller.createDocument)
	.put(controller.updateDocument)
	.delete(controller.deleteDocument);


module.exports = router;
