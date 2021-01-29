import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({

	firstName: {
		type: String,
		trim: true,
		required: true,
	},
	lastName: {
		type: String,
		trim: true
	},
	fullName: String,
	email: {
		type: String,
		trim: true,
		required: true
	}

});

const User = model("User", userSchema);

export default User;
