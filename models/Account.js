const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({

	startBalance: {
		type: Number,
		required: true
	},
	currentBalance: {
		type: String,
		required: true
	},
	fireUid: {
		type: String,
		required: true
	}

});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
