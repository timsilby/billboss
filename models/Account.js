const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({

	startBalance: {
		type: Number,
		required: true
	},
	userId: {
		type: Schema.ObjectId,
		required: true
	}

});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
