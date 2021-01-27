import { useState } from 'react';


const UserAccountForm = ({ handleSubmit }) => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					name="email"
					type="text"
					onChange={({ target }) => setEmail(target.value)}
					value={email}
					placeholder="Email"
				/>
				<input
					name="password"
					type="password"
					onChange={({ target }) => setPassword(target.value)}
					value={password}
					placeholder="Password"
				/>
				<button type="submit">
					Sign in
                </button>
			</form>
		</div>
	)
};

export default UserAccountForm;
