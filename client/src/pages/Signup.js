import { useHistory } from "react-router-dom";
import SignupForm from "../components/SignupForm";
import { useAuth } from "../utils/useAuth";


const Signup = () => {

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

			const user = await auth.firebaseSignup(userData);
			console.log("signup");
			console.log(user);
			history.push("/dashboard");
		}
		catch (error) {
			console.log(error);
		}

	}

	return (
		<div>
			<h2>Signup</h2>
			<SignupForm handleSubmit={handleSubmit} />
		</div>
	);
}

export default Signup;
