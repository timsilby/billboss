const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({

	title: {
		type: String,
		required: true,
		trim: true
	},
	note: {
		type: String,
		trim: true
	},
	dueDate: {
		type: Date,
		default: Date.now,
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
	billset: Schema.ObjectId,
	fireUid: {
		type: String,
		required: true
	}

});

const Bill = mongoose.model("Bill", billSchema);

module.exports = Bill;
