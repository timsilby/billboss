const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fundSchema = new Schema({

	startBalance: {
		type: Number,
		required: true
	},
	fireUid: {
		type: String,
		required: true
	}

});

const Fund = mongoose.model("Fund", fundSchema);

module.exports = Fund;
