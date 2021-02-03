import Container from "@material-ui/core/Container";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../utils/useAuth";
import Header from "./Header";
import LoginForm from "./LoginForm";


const Landing = () => {

	const auth = useAuth();

	return (

		auth.user
		?
		<Redirect to="/dashboard" />
		:
		<Container component="main" maxWidth="xs">
			<Header />
			<LoginForm />
		</Container>

	);

}

export default Landing;
