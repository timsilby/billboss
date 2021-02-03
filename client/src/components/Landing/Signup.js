import Container from "@material-ui/core/Container";
import SignupForm from "./SignupForm";
import Header from "./Header";


const Signup = () => {

	return (
		<Container component="main" maxWidth="xs">
			<Header />
			<SignupForm />
		</Container>
	);

}

export default Signup;
