import { useState } from 'react';
import { useAuth } from '../utils/useAuth';


const UserAccountForm = () => {

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const auth = useAuth();

	const handleSubmit = (event) => {

		event.preventDefault();

		console.log(`submitted email: ${email} password: ${password}`);

		auth.firebaseLogin(email, password)
		.then(console.log(auth.user))
		.catch(err => console.error(err))

	}

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					onChange={({ target }) => setEmail(target.value)}
					placeholder="Email"
				/>
				<br />
				<input
					type="password"
					onChange={({ target }) => setPassword(target.value)}
					placeholder="Password"
				/>
				<br />
				<button type="submit">
					Sign in
                </button>
			</form>
		</div>
	)
};

export default UserAccountForm;
