const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({

	date: {
		type: Date,
		default: Date.now,
	},
	startBalance: {
		type: Number,
		required: true
	},
	fireUid: {
		type: String,
		required: true
	}

});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
