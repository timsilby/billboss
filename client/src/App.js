import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProvideAuth } from "./utils/useAuth";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Home from "./pages/Home";
import Account from "./pages/Account";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";


function App() {
	return (
		<ProvideAuth>
			<Navbar />
			<Router>
				<Switch>
					<Route path="/signup">
						<Signup />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<PrivateRoute path="/dashboard">
						<Dashboard />
					</PrivateRoute>
					<PrivateRoute path="/account">
						<Account />
					</PrivateRoute>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</ProvideAuth>
	);
}

export default App;
