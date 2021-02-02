import { useAuth } from "../utils/useAuth";
import UserHeader from "./UserHeader";

const Navbar = () => {

	const auth = useAuth();
	console.log("navbar");
	console.log(auth.user);

	return (
		<div>
			<h1>{auth.user.displayName}</h1>
			<button onClick={auth.firebaseLogout}>Log out</button>
		</div>
	);
}

export default Navbar;
