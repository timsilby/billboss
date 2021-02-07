const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billsetSchema = new Schema({

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
	recursEvery: {
		type: Number,
		required: true,
		default: 1
	},
	recurringPeriod: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		enum: ["day", "week", "month", "year"]
	},
	amount: {
		type: Number,
		required: true
	},
	isAutomatic: {
		type: Boolean,
		required: true,
		default: false
	},
	isActive: {
		type: Boolean,
		default: true,
		required: true
	},
	fireUid: {
		type: String,
		required: true
	}

});

const Billset = mongoose.model("Billset", billsetSchema);

module.exports = Billset;
