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
	email: {
		type: String,
		trim: true,
		required: true
	},
	fullName: {
		type: String,
		trim: true,
		default: function() {
			return `${this.firstName} ${this.lastName || ""}`
		}
	},
	fireUid: {
		type: String,
		required: true
	}

});

const User = mongoose.model("User", userSchema);

module.exports = User;
