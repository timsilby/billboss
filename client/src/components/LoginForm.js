import { useState } from "react";


const LoginForm = ({ handleSubmit }) => {

	// Set up initial state
	const [formState, setFormState] = useState({
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

	return (
		<div>
			<form onSubmit={handleSubmit}>
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
					Sign in
                </button>
			</form>
		</div>
	)
};

export default LoginForm;
