import { ProvideAuth } from "./utils/useAuth";
import Routes from "./Routes";

function App() {

	return (
		<ProvideAuth>
			<Routes />
		</ProvideAuth>
	);
}

export default App;
