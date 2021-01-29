import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const transactionSchema = new Schema({

	date: {
		type: Date,
		Default: Date.now,
		required: true
	},
	transactionType: {
		type: String,
		Default: "withdrawal",
		required: true,
		enum: ["withdrawal", "deposit"]
	},
	amount: {
		type: Number,
		required: true
	},
	billId: Schema.ObjectId,
	userId: {
		type: Schema.ObjectId,
		required: true
	}

});

const Transaction = model("Transaction", transactionSchema);

export default Transaction;
