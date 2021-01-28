import { useAuth } from "../utils/useAuth";

const Navbar = () => {

	const auth = useAuth();

	return (
		<div>
			<button onClick={auth.firebaseLogout}>Log out</button>
		</div>
	);
}

export default Navbar;
