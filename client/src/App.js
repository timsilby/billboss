import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProvideAuth } from "./utils/useAuth";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Home from "./pages/Home";


function App() {
	return (
		<ProvideAuth>
			<Router>
				<Switch>
					<Route path="/dashboard">
						<Dashboard />
					</Route>
					<Route path="/signup">
						<Signup />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</ProvideAuth>
	);
}

export default App;
