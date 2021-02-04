import Container from "@material-ui/core/Container";
import Header from "./Header";
import LoginForm from "./LoginForm";


const Landing = () => {

	return (

		<Container component="main" maxWidth="xs">
			<Header />
			<LoginForm />
		</Container>

	);

}

export default Landing;
