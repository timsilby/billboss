import { useHistory } from "react-router-dom";
import UserAccountForm from "../components/UserAccountForm";
import { useAuth } from '../utils/useAuth';


const Signup = () => {

	const auth = useAuth();
	const history = useHistory();

	const handleSubmit = (event) => {

		event.preventDefault();

		// Get values from form
		const email = event.target.email.value;
		const password = event.target.password.value;

		console.log(`submitted email: ${email} password: ${password}`);

		auth.firebaseLogin(email, password)
			.then(() => {
				console.log(auth.user);
				history.push("/dashboard");
			})
			.catch(err => console.error(err))

	}


	return (
		<div>
			<h2>Signup</h2>
			<UserAccountForm handleSubmit={handleSubmit} />
		</div>
	);
}

export default Signup;
