import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../utils/use-auth";

// Checks if user is logged in. Returns either the child component or a redirect
// to login page. Referrer is passed so user can be redirected back after login.
const PrivateRoute = ({ children, ...rest }) => {

	const auth = useAuth();

	return (
		<Route {...rest} render={({ location }) => {
			return auth.user
				?
				children
				:
				<Redirect to={{
					pathname: "/login",
					state: { referrer: location }
				}}/>
		}}>
		</Route>
	);
}

export default PrivateRoute;
