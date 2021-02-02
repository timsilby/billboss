const dbModels = require("../models/dbModels");

// db query functions

// Get requests have had the firebase uid added to req.query before they
// get here so searches will only return documents matching the user's id.
function getDocuments(req, res) {

	dbModels[req.params.dbcollection]
		.find(req.query)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));

}

function getDocumentById(req, res) {

	dbModels[req.params.dbcollection]
		.findById(req.query.id)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));

}

// Post requests have had firebase uid added to req.body so it will be saved with the document.
function createDocument(req, res) {

	dbModels[req.params.dbcollection]
		.create(req.body)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));

}

function updateDocument(req, res) {

	dbModels[req.params.dbcollection]
		.findOneAndUpdate({ _id: req.query.id }, req.body, { new: true })
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));

}

async function deleteDocument(req, res) {

	dbModels[req.params.dbcollection]
		.deleteOne({ _id: req.query.id })
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));

}

module.exports = {
	getDocuments,
	getDocumentById,
	createDocument,
	updateDocument,
	deleteDocument
}
