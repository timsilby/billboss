import { useAuth } from "../utils/use-auth";

const Navbar = () => {

	const auth = useAuth();

	return (
		<div>
			<button onClick={auth.firebaseLogout}>Log out</button>
		</div>
	);
}

export default Navbar;
