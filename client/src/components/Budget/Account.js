import { useState, useEffect } from "react";
import apiRequest from "../../utils/apiRequest";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const Account = () => {

	const [currentBalance, setCurrentBalance] = useState();

	// Get current account balance
	const getAccountBalance = async () => {

		// Get required info from database
		const accountData = await apiRequest.getEntries("/api/accounts");
		const paidBills = await apiRequest.getEntries("/api/bills?paid=true");
		const paidDeposits = await apiRequest.getEntries("/api/deposits");

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


	useEffect(() => {
		getAccountBalance();
	}, [])



	return (

		<>
			<Typography variant="h6" component="h2">Account</Typography>
			<Card>
				<CardHeader title="Current Balance"></CardHeader>
				<CardContent>
					<Typography>{currentBalance}</Typography>
				</CardContent>
			</Card>
		</>

	);

}

export default Account;
