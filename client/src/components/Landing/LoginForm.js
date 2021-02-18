import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../../utils/useAuth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
import LoginResultDialog from "./LoginResultDialog";
import { useState } from "react";



const LoginForm = () => {

	const [dialogOpen, setDialogOpen] = useState(false);

	// Get any state that was passed from referring page. If it exists
	// get the referrer.
	let referrer;
	const { state } = useLocation();
	if (state) { referrer = state.referrer };

	// Grab some hooks.
	const auth = useAuth();
	const history = useHistory();

	const toggleDialog = () => setDialogOpen(!dialogOpen);

	const handleClick = async () => {

		try {

			// Call the firebaseLogin function from useAuth.
			await auth.firebaseLogin("tim@email.com", "password");

			// Redirect to referring page or dashboard
			history.push(referrer || "/dashboard");

		}
		catch (err) {

			toggleDialog();
			console.error(err);

		}

	}


	// Login process
	const handleSubmit = async (event) => {

		event.preventDefault();

		// Get values from form
		const email = event.target.email.value.trim();
		const password = event.target.password.value.trim();

		try {

			// Call the firebaseLogin function from useAuth.
			await auth.firebaseLogin(email, password);

			// Redirect to referring page or dashboard
			history.push(referrer || "/dashboard");

		}
		catch (err) {

			toggleDialog();
			console.error(err);

		}

	}


	return (

		<>
			<form autoComplete="false" onSubmit={handleSubmit}>
				<TextField
					variant="outlined"
					required
					fullWidth
					margin="normal"
					id="email"
					label="Email Address"
					name="email"
					autoFocus
				/>
				<TextField
					variant="outlined"
					required
					fullWidth
					margin="normal"
					id="password"
					name="password"
					label="Password"
					type="password"
				/>
				<Box mt={2}>
					<Grid
						container
						alignItems="center"
						justify="space-between"
					>
						<Grid item>
							<Button
								type="submit"
								variant="contained"
								color="primary"
							>
								Sign In
						</Button>
						</Grid>
						<Grid item>
							<Link
								variant="body2"
								component={RouterLink}
								to="/Signup"
								color="secondary"
							>
								{"No account? Sign Up Here"}
							</Link>
						</Grid>
					</Grid>
					<Grid container justify="flex-end">
						<Grid item>
							{"or"}
						</Grid>
					</Grid>
					<Grid container justify="flex-end" style={{paddingTop: ".5rem"}}>
						<Grid item>
							<Link
								to="#"
								component={RouterLink}
								onClick={handleClick}
								color="secondary"
							>
								{"Sign In as a Guest"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</form>
			<LoginResultDialog open={dialogOpen} toggleDialog={toggleDialog} />
		</>

	)

};

export default LoginForm;
