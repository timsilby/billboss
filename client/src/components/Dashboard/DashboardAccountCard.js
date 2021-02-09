import { useState, useEffect } from "react";
import apiRequest from "../../utils/apiRequest";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);


const DashboardAccountCard = () => {

	const [currentBalance, setCurrentBalance] = useState(0);
	const [nextDeposit, setNextDeposit] = useState({
		date: "",
		amount: ""
	});

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
		console.log(balance);
		setCurrentBalance(balance);

	}

	const getNextDeposit = async () => {

		// Get unpaid deposits
		const depositsData = await apiRequest.getEntries("/api/deposits?paid=false");

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

		<>
			<Card>
				<CardHeader title="Account"></CardHeader>
				<CardContent>
					<Typography>Balance {currentBalance}</Typography>
					<Typography>Next Deposit</Typography>
					<Typography>{nextDeposit.date} {nextDeposit.amount}</Typography>
				</CardContent>
			</Card>
		</>

	);

}

export default DashboardAccountCard;
