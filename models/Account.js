import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const accountSchema = new Schema({

	startBalance: {
		type: Number,
		required: true
	},
	userId: {
		type: Schema.ObjectId,
		required: true
	}

});

const Account = model("Account", accountSchema);

export default Account;
