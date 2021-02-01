const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billsetSchema = new Schema({

	title: {
		type: String,
		required: true,
		trim: true
	},
	startDate: {
		type: Date,
		default: Date.now,
		required: true
	},
	recurEvery: {
		type: Number,
		required: true,
		default: 1
	},
	recurringUnit: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		enum: ["day(s)", "week(s)", "month(s)", "year(s)"]
	},
	amount: {
		type: Number,
		required: true
	},
	paid: {
		type: Boolean,
		default: false
	},
	active: {
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
