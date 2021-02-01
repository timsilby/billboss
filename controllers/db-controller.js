const dbModels = require("../models/dbModels");

// Function to search bills collection. Query is passed in (req.query)
function getDocuments(req, res) {

	dbModels[req.params.dbcollection]
		.find({ fireUid: req.params.fireid})
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));

}

function getDocumentById(req, res) {

	dbModels[req.params.dbcollection]
		.findById(req.query.id)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));

}

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
