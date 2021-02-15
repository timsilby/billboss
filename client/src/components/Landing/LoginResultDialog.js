import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.error.main,
		paddingLeft: theme.spacing(6),
		paddingRight: theme.spacing(6),
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(2),
	},
	actionBar: {
		justifyContent: "center",
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(2)
	},
}));


const LoginResultDialog = ({ open, toggleDialog }) => {

	const classes = useStyles();

	return (

		<div>
			<Dialog
				open={open}
				onClose={toggleDialog}
				maxWidth="xs"
			>
				<DialogContent className={classes.root}>
					<DialogContentText variant="h6" component="h1">
						Sign In Failed
					</DialogContentText>
					<DialogContentText>
						Please try again
					</DialogContentText>
				</DialogContent>
				<DialogActions className={classes.actionBar}>
					<Button className={classes.button} onClick={toggleDialog} color="primary" variant="contained">
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</div>

	);

}

export default LoginResultDialog;
