import { useHistory } from "react-router-dom";
import { useAuth } from "../../utils/useAuth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";


const SignupForm = () => {

	const auth = useAuth();
	const history = useHistory();

	// Submit signup form
	const handleSubmit = async (event) => {

		event.preventDefault();

		// Grab form values
		const userData = {
			displayName: event.target.displayName.value.trim(),
			email: event.target.email.value.trim(),
			password: event.target.password.value.trim()
		}

		// Try registering the user.
		try {

			const newUser = await auth.firebaseSignup(userData);
			console.log("signup");
			console.log(newUser);
			history.push("/dashboard");

		}
		catch (error) {
			console.log(error);
		}

	}

	return (

		<form autoComplete="false" onSubmit={handleSubmit}>
			<TextField
				variant="outlined"
				required
				fullWidth
				margin="normal"
				id="displayName"
				label="Name"
				name="displayName"
				autoFocus
			/>
			<TextField
				variant="outlined"
				required
				fullWidth
				margin="normal"
				id="email"
				label="Email Address"
				name="email"
			/>
			<TextField
				variant="outlined"
				required
				fullWidth
				margin="normal"
				id="password"
				name="password"
				label="Password"
				type="password"
			/>
			<Box mt={2}>
				<Button
					type="submit"
					variant="contained"
					margin="normal"
					color="primary"
				>
					Create Account
				</Button>
			</Box>

		</form>

	)

};

export default SignupForm;
