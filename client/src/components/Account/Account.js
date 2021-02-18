import Button from "@material-ui/core/Button";
import AppbarDrawer from "../AppBarDrawer/AppbarDrawer";
import AddDepositDialog from "./AddDepositDialog";
import AccountCard from "./AccountCard";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import apiRequest from "../../utils/apiRequest";
import Box from "@material-ui/core/Box";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import RecurringDepositTable from "./RecurringDepositTable";
import Grid from "@material-ui/core/Grid";

dayjs.extend(utc);

const useStyles = makeStyles((theme) => ({
	gridRoot: {
		marginBottom: theme.spacing(4),
	},
	buttonBox: {
		display: "flex",
		justifyContent: "flex-end"
	}
}));

const Account = () => {

	const [dialogOpen, setDialogOpen] = useState(false);
	const [currentBalance, setCurrentBalance] = useState(0);
	const [nextDeposit, setNextDeposit] = useState({
		date: "",
		amount: ""
	});
	const [nextPayment, setNextPayment] = useState({
		date: "",
		amount: "",
		title: ""
	});
	const [recurringDeposits, setRecurringDeposits] = useState([]);

	const classes = useStyles();

	const toggleDialog = () => setDialogOpen(!dialogOpen);


	const getTransactions = async () => {

		// Get required info from database
		const account = await apiRequest.getEntries("/api/accounts");
		const paidBills = await apiRequest.getEntries("/api/bills?paid=true");
		const paidDeposits = await apiRequest.getEntries("/api/deposits?paid=true");
		const depositSets = await apiRequest.getEntries("/api/depositsets");

		const today = dayjs().startOf("day").utc().format("YYYY-MM-DD");

		// Account balance
		// ==========================================

		// Get starting balance of the account
		const startBalance = account.data[0].startBalance;

		// Calculate total deposits and withdrawals
		const totalWithdrawals = paidBills.data.reduce((acc, current) => { return acc + current.amount }, 0);
		const totalDeposits = paidDeposits.data.reduce((acc, current) => { return acc + current.amount }, 0);

		// Calculate current balance
		const balance = startBalance + totalDeposits - totalWithdrawals;
		setCurrentBalance(balance);


		// Next Deposit
		// =========================================

		// Get unpaid deposits from today onwards
		const depositsData = await apiRequest.getEntries(`/api/deposits?paid=false&date=${today}`);

		// Sort the array and take values from the first one
		const deposits = depositsData.data.sort((a, b) => b.date - a.date);
		const nextDep = {
			date: dayjs(deposits[0].date).local().format("DD/MM/YYYY"),
			amount: deposits[0].amount.toFixed(2)
		};
		setNextDeposit(nextDep);


		// Recurring Deposits
		// ==========================================

		// Format the date
		const recurring = depositSets.data.map(entry => {
			entry.startDate = dayjs(entry.date).local().format("DD/MM/YYYY");
			entry.recurrence = `every ${entry.recursEvery} ${entry.recurringPeriod}(s)`
			return entry;
		});
		setRecurringDeposits(recurring);


		// Next unpaid bill
		// ==========================================

		// Get unpaid bills from today onwards
		const billsData = await apiRequest.getEntries(`/api/bills?paid=false&date=${today}`);

		// Sort the array and take values from the first one
		const unpaidBills = billsData.data.sort((a, b) => b.date - a.date);
		const nextBill = {
			date: dayjs(unpaidBills[0].date).local().format("DD/MM/YYYY"),
			amount: unpaidBills[0].amount.toFixed(2),
			title: unpaidBills[0].title
		};
		setNextPayment(nextBill);

	}


	useEffect(() => {
		getTransactions();
	}, [])



	return (

		<AppbarDrawer title={"Account"}>
			<Box component="main">
				<Grid container justify="center" spacing={2} className={classes.gridRoot}>
					<Grid item>
						<AccountCard deposit={nextDeposit} payment={nextPayment} balance={currentBalance} />
					</Grid>
				</Grid>
				<Grid container justify="center" spacing={2} className={classes.gridRoot}>
					<Grid item>
						<RecurringDepositTable deposits={recurringDeposits} />
					</Grid>
				</Grid>
				<AddDepositDialog open={dialogOpen} toggleDialog={toggleDialog} />
				<Box className={classes.buttonBox}>
					<Button variant="contained" color="primary" onClick={toggleDialog}>Add Deposit</Button>
				</Box>
			</Box>
		</AppbarDrawer>

	);

}

export default Account;
