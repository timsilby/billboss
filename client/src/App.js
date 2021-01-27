import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProvideAuth } from "./utils/useAuth";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";


function App() {
	return (
		<ProvideAuth>
			<Router>
				<Switch>
					<Route path="/dashboard">
						<Dashboard />
					</Route>
					<Route path="/">
						<Login />
					</Route>
				</Switch>
			</Router>
		</ProvideAuth>
	);
}

export default App;
