const router = require("express").Router();
const controller = require("../controllers/db-controller");

// These routes are imported into all-routes.js.
// Req and res are automatically passed through to the handlers in most cases.
// :dbcollection is used by the controller to decide which collection to access.
// :fireid (optional) is used to decide which user's documents to use.
router.route("/api/:dbcollection/:fireid?")

	// First check for currentUser in the request. If not there the request hasn't been through
	// the authorization process. If present, pass to the next route.
	.all(function (req, res, next) {
		if (req.currentUser) {
			console.log("Authenticated");
			next();
		}
		else {
			return res.status(403).send("Not authorized")
		}
	})

	// Inject the users firebase id into req.query so only own documents are returned.
	// If ?id= query is present this is the document id so call a different function.
	.get(function (req, res) {
		req.query.fireUid = req.currentUser.uid;
		if (req.query.id) {
			controller.getDocumentById(req, res);
		}
		else {
			controller.getDocuments(req, res);
		}
	})

	// Inject the users firebase id into req.body so this value will be added on creation.
	.post(function (req, res) {
		req.body.fireUid = req.currentUser.uid;
		controller.createDocument(req, res);
	})

	// The document id is passed to these so no need to do anything except call the functions.
	.put(controller.updateDocument)
	.delete(controller.deleteDocument);


module.exports = router;
