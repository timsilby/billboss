import { useState } from "react";


const SignupForm = ({ handleSubmit }) => {

	// Set up initial state
	const [formState, setFormState] = useState({
		displayName: "",
		email: "",
		password: ""
	});

	// Update form fields on change
	const onChange = (event) => {
		setFormState({
			...formState,
			[event.target.name]: event.target.value,
		});
	};

	// Return the form
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					name="firstName"
					type="text"
					onChange={onChange}
					value={formState.displayName}
					placeholder="First Name"
				/>
				<input
					name="email"
					type="text"
					onChange={onChange}
					value={formState.email}
					placeholder="Email"
				/>
				<input
					name="password"
					type="password"
					onChange={onChange}
					value={formState.password}
					placeholder="Password"
				/>
				<button type="submit">
					Create Account
                </button>
			</form>
		</div>
	)
};

export default SignupForm;
