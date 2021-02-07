const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const depositSchema = new Schema({

	title: {
		type: String,
		required: true,
		trim: true
	},
	date: {
		type: Date,
		required: true
	},
	notes: {
		type: String,
		trim: true
	},
	amount: {
		type: Number,
		required: true
	},
	paid: {
		type: Boolean,
		default: false
	},
	depositSet: Schema.ObjectId,
	fireUid: {
		type: String,
		required: true
	}

});

const Deposit = mongoose.model("Deposit", depositSchema);

module.exports = Deposit;
