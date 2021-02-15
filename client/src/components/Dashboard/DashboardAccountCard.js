import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import apiRequest from "../../utils/apiRequest";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 350,
		marginBottom: theme.spacing(4),
		borderColor: theme.palette.primary.main
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
		paddingRight: theme.spacing(4)
	},
	depositBox: {
		padding: theme.spacing(2),
		marginBottom: theme.spacing(1)
	},
	depositTitle: {
		paddingBottom: theme.spacing(1),
		color: theme.palette.secondary.main
	},
	nextDeposit: {
		display: "flex",
		justifyContent: "space-between",
	}

}));

const DashboardAccountCard = () => {

	const [currentBalance, setCurrentBalance] = useState(0);
	const [nextDeposit, setNextDeposit] = useState({
		date: "",
		amount: ""
	});

	const classes = useStyles();

	// Get current account balance
	const getAccountBalance = async () => {

		// Get required info from database
		const accountData = await apiRequest.getEntries("/api/accounts");
		const paidBills = await apiRequest.getEntries("/api/bills?paid=true");
		const paidDeposits = await apiRequest.getEntries("/api/deposits?paid=true");

		// Get starting balance of the account
		const startBalance = accountData.data[0].startBalance;

		// Calculate total deposits and withdrawals
		const totalWithdrawals = paidBills.data.reduce((acc, current) => { return acc + current.amount }, 0);
		const totalDeposits = paidDeposits.data.reduce((acc, current) => { return acc + current.amount }, 0);

		// Calculate current balance
		const balance = startBalance + totalDeposits - totalWithdrawals;
		setCurrentBalance(balance);

	}

	const getNextDeposit = async () => {

		// Get unpaid deposits from today onwards
		const today = dayjs().utc();
		const depositsData = await apiRequest.getEntries(`/api/deposits?paid=false&date=${today}`);

		// Sort the array and take values from the first one
		const deposits = depositsData.data.sort((a, b) => b.date - a.date);
		const next = {
			date: dayjs(deposits[0].date).local().format("DD/MM/YYYY"),
			amount: deposits[0].amount.toFixed(2)
		};

		setNextDeposit(next);

	}


	useEffect(() => {
		getAccountBalance();
		getNextDeposit();
	}, [])


	return (

		<Card className={classes.root} variant="outlined">
			<Typography component="h2" className={classes.title}>Account</Typography>
			<CardContent className={classes.cardContent}>
				<div className={currentBalance < 0 ? classes.balanceError : classes.balance}>
					<Typography variant="h6" component="span">Balance</Typography>
					<Typography variant="h6" component="span">{currentBalance.toFixed(2)}</Typography>
				</div>
				<Box className={classes.depositBox}>
					<Typography component="h3" className={classes.depositTitle}>Next Deposit</Typography>
					<div className={classes.nextDeposit}>
						<Typography>{nextDeposit.date}</Typography>
						<Typography>{nextDeposit.amount}</Typography>
					</div>
				</Box>
			</CardContent>
		</Card>

	);

}

export default DashboardAccountCard;
