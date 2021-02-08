const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({

	title: {
		type: String,
		required: true,
		trim: true
	},
	notes: {
		type: String,
		trim: true
	},
	date: {
		type: Date,
		required: true
	},
	amount: {
		type: Number,
		required: true
	},
	paid: {
		type: Boolean,
		default: false
	},
	isAutomatic: {
		type: Boolean,
		required: true,
		default: false
	},
	isRecurring: {
		type: Boolean,
		required: true,
		default: false
	},
	billset: Schema.ObjectId,
	fireUid: {
		type: String,
		required: true
	}

});

const Bill = mongoose.model("Bill", billSchema);

module.exports = Bill;
