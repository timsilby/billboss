import { useAuth } from "../utils/useAuth";

const Navbar = () => {

	const auth = useAuth();

	return (
		<div>
			<h1>{auth.user.displayName}</h1>
			<button onClick={auth.firebaseLogout}>Log out</button>
		</div>
	);
}

export default Navbar;
