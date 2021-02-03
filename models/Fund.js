const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({

	startBalance: {
		type: Number,
		required: true
	},
	fireUid: {
		type: String,
		required: true
	}

});

const Fund = mongoose.model("Account", accountSchema);

module.exports = Fund;
