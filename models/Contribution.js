const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contributionSchema = new Schema({

	depositDate: {
		type: Date,
		default: Date.now,
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
	contributionSet: Schema.ObjectId,
	fireUid: {
		type: String,
		required: true
	}

});

const Contribution = mongoose.model("Contribution", contributionSchema);

module.exports = Contribution;
