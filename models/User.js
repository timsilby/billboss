const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

	displayName: {
		type: String,
		trim: true,
		required: true,
	},
	email: {
		type: String,
		trim: true,
		required: true
	},
	fireUid: {
		type: String,
		required: true
	}

});

const User = mongoose.model("User", userSchema);

module.exports = User;
