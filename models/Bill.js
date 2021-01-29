import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const billSchema = new Schema({

	title: {
		type: String,
		required: true,
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
	userId: {
		type: Schema.ObjectId,
		required: true
	}

});

const Bill = model("Bill", billSchema);

export default Bill;
