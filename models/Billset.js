import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

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
	userId: {
		type: Schema.ObjectId,
		required: true
	}
});

const Billset = model("Billset", billsetSchema);

export default Billset;
