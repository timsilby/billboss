import { ProvideAuth } from "./utils/useAuth";
import Routes from "./components/Routes";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Dashboard from "./components/Dashboard/Dashboard";
// import Landing from "./components/Landing/Landing";
// import PrivateRoute from "./components/PrivateRoute";
// import Bills from "./components/Bills/Bills";
// import Budget from "./components/Budget/Budget";
// import Reports from "./components/Reports/Reports";


function App() {

	return (
		<ProvideAuth>
			<Routes />
		</ProvideAuth>
	);
}

export default App;
