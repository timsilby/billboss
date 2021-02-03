import { useAuth } from "../utils/useAuth";

const Navbar = () => {

	const auth = useAuth();
	console.log("navbar");
	console.log(auth.user);

	return (
		<div>
			<h1>{auth.user ? auth.user.displayName : "No one"}</h1>
			<button onClick={auth.firebaseLogout}>Log out</button>
		</div>
	);
}

export default Navbar;
