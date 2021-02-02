import { useHistory, useLocation } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../utils/useAuth";


const Login = () => {

	// Get any state that was passed from referring page. If it exists
	// get the referrer.
	let referrer;
	const { state } = useLocation();
	if (state) { referrer = state.referrer };

	// Grab some hooks.
	const auth = useAuth();
	const history = useHistory();

	// Login process
	const handleSubmit = (event) => {

		event.preventDefault();

		// Get values from form
		const email = event.target.email.value.trim();
		const password = event.target.password.value.trim();

		// Call the firebaseLogin function from useAuth.
		auth.firebaseLogin(email, password)
			.then(() => {
				// Redirect to referring page or dashboard
				history.push(referrer || "/dashboard");
			})
			.catch(err => console.error(err))

	}

	return (
		<div>
			<h2>Login</h2>
			<LoginForm handleSubmit={handleSubmit} />
		</div>
	);

}

export default Login;
