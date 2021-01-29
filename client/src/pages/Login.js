import { useHistory, useLocation } from "react-router-dom";
import UserAccountForm from "../components/UserAccountForm";
import { useAuth } from "../utils/use-auth";


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
		const email = event.target.email.value;
		const password = event.target.password.value;

		// Call the firebaseLogin function from useAuth.
		auth.firebaseLogin(email, password)
			.then(() => {
				console.log(auth.user);
				// Redirect to referring page or dashboard
				history.push(referrer || "/dashboard");
			})
			.catch(err => console.error(err))

	}

	return (
		<div>
			<h2>Login</h2>
			<UserAccountForm handleSubmit={handleSubmit} />
		</div>
	);
}

export default Login;
