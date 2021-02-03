import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProvideAuth } from "./utils/useAuth";
import Dashboard from "./pages/Dashboard";
import Signup from "./components/Landing/Signup"
import Landing from "./components/Landing/Landing";
import Account from "./pages/Account";
import PrivateRoute from "./components/PrivateRoute";


function App() {
	return (
		<ProvideAuth>
			<Router>
				<Switch>
					<Route path="/signup">
						<Signup />
					</Route>
					<PrivateRoute path="/dashboard">
						<Dashboard />
					</PrivateRoute>
					<PrivateRoute path="/account">
						<Account />
					</PrivateRoute>
					<Route path="/">
						<Landing />
					</Route>
				</Switch>
			</Router>
		</ProvideAuth>
	);
}

export default App;
