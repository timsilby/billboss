import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth } from "../utils/useAuth";
import Dashboard from "../components/Dashboard/Dashboard";
import Landing from "../components/Landing/Landing";
import Bills from "../components/Bills/Bills";
import Budget from "../components/Budget/Budget";
import Reports from "../components/Reports/Reports";
import Signup from "./Landing/Signup";


function Routes() {

	const auth = useAuth();
	const user = auth.user;

	return (

		<Router>
			<Switch>
				<Route exact path="/dashboard">
					{user ? <Dashboard /> : <Landing />}
				</Route>
				<Route exact path="/bills">
					{user ? <Bills /> : <Landing />}
					{/* <Bills /> */}
				</Route>
				<Route exact path="/budget">
					{/* <Budget /> */}
					{user ? <Budget /> : <Landing />}
				</Route>
				<Route exact path="/reports">
					{user ? <Reports /> : <Landing />}
					{/* <Reports /> */}
				</Route>
				<Route exact path="/signup">
					<Signup />
				</Route>
				<Route path="/">
					<Landing />
				</Route>
			</Switch>
		</Router>

	)

}

export default Routes;
