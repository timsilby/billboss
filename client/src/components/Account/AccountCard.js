import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 350,
		marginBottom: theme.spacing(4),
		borderColor: theme.palette.primary.main,
		maxWidth: 700
	},
	title: {
		padding: theme.spacing(2),
		backgroundColor: theme.palette.grey[700],
	},
	balance: {
		display: "flex",
		justifyContent: "space-around",
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(2),
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(2),
		borderStyle: "solid",
		borderWidth: "2px",
		borderColor: theme.palette.success.dark,
	},
	balanceError: {
		display: "flex",
		justifyContent: "space-around",
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(2),
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(2),
		borderStyle: "solid",
		borderWidth: "2px",
		borderColor: theme.palette.error.dark,
	},
	cardContent: {
		paddingLeft: theme.spacing(4),
		paddingRight: theme.spacing(4),
		marginBottom: theme.spacing(2)
	},
	transactionBox: {
		padding: theme.spacing(1),
		marginBottom: theme.spacing(1),
		"& p": {
			fontSize: "0.75rem"
		}
	},
	depositTitle: {
		paddingBottom: theme.spacing(1)
	},
	nextTransaction: {
		display: "flex",
		justifyContent: "space-between",
	}

}));

const AccountCard = ({ deposit, payment, balance }) => {

	const classes = useStyles();

	return (

		<Card className={classes.root} variant="outlined">
			<Typography component="h2" className={classes.title}>Account</Typography>
			<CardContent className={classes.cardContent}>
				<div className={balance < 0 ? classes.balanceError : classes.balance}>
					<Typography variant="h6" component="span">Balance</Typography>
					<Typography variant="h6" component="span">{balance.toFixed(2)}</Typography>
				</div>
				<Box className={classes.transactionBox}>
					<Typography
						component="h3"
						className={classes.depositTitle}
						color="secondary"
					>
						Next Deposit
					</Typography>
					<div className={classes.nextTransaction}>
						<Typography>{deposit.date}</Typography>
						<Typography>{deposit.amount}</Typography>
					</div>
				</Box>
				<Box className={classes.transactionBox}>
					<Typography
						component="h3"
						className={classes.depositTitle}
						color="secondary"
					>
						Next Payment
					</Typography>
					<div className={classes.nextTransaction}>
						<Typography>{payment.date}</Typography>
						<Typography>{payment.title}</Typography>
						<Typography>{payment.amount}</Typography>
					</div>
				</Box>
			</CardContent>
		</Card>

	);

}

export default AccountCard;
