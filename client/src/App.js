import { ProvideAuth } from "./utils/useAuth";
import UserAccountForm from './components/UserAccountForm';

function App() {
	return (
		<ProvideAuth>
			<UserAccountForm />
		</ProvideAuth>

  );
}

export default App;
