import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../utils/useAuth";

// Checks if user is logged in. Returns either the child component or a redirect
// to login page. Referrer is passed so user can be redirected back after login.
const PrivateRoute = ({ children, ...rest }) => {

	const auth = useAuth();
	console.log("private route");
	console.log(auth.user);

	return (
		<Route {...rest} render={({ location }) => {
			return auth.user === false
				?
				<Redirect to={{
					pathname: "/",
					state: { referrer: location }
				}}/>
				:
				children
		}}>
		</Route>
	);
}

export default PrivateRoute;
