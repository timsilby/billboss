import { ProvideAuth } from "./utils/useAuth";
import Routes from "./components/Routes";

function App() {

	return (
		<ProvideAuth>
			<Routes />
		</ProvideAuth>
	);
}

export default App;
