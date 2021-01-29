const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

	firstName: {
		type: String,
		trim: true,
		required: true,
	},
	lastName: {
		type: String,
		trim: true
	},
	fullName: String,
	email: {
		type: String,
		trim: true,
		required: true
	}

});

const User = mongoose.model("User", userSchema);

module.exports = User;
