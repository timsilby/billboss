const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const depositSetSchema = new Schema({

	title: {
		type: String,
		required: true,
		trim: true
	},
	notes: {
		type: String,
		trim: true
	},
	depositDate: {
		type: String,
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

const Depositset = mongoose.model("Depositset", depositSetSchema);

module.exports = Depositset;
