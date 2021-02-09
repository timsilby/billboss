import { useState, useEffect } from "react";
import apiRequest from "../../utils/apiRequest";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import Typography from "@material-ui/core/Typography";
import { calculateYearlyTotal, calculatePeriodicAmount } from "../../utils/calculations";
import ContributionCard from "./ContributionCard";

dayjs.extend(utc);


const BudgetTotals = () => {


	const [allBills, setAllBills] = useState([]);
	const [requiredContributions, setRequiredContributions] = useState([]);
	const [currentContributions, setCurrentContributions] = useState([]);


	// Calculate bill totals and required contributions
	const getBudgetTotals = async () => {

		const allBillsArray = [];

		// Get all billsets and unpaid non-recurring bills
		const billsets = await apiRequest.getEntries("/api/billsets");
		const bills = await apiRequest.getEntries("/api/bills?isRecurring=false&paid=false");

		// Iterate over arrays and call function to calculate yearly totals, add to another array
		billsets.data.forEach(entry => {
			entry.yearlyTotal = calculateYearlyTotal(entry.amount, entry.recursEvery, entry.recurringPeriod);
			entry.periodicAmounts = calculatePeriodicAmount(entry.yearlyTotal);
			allBillsArray.push(entry);
		})

		bills.data.forEach(entry => {
			entry.yearlyTotal = entry.amount;
			allBillsArray.push(entry);
		})

		// Reduce the array to get grand yearly total
		const grandYearlyTotal = allBillsArray.reduce((acc, current) => { return acc + current.yearlyTotal }, 0);

		// Calculate required contributions
		const contributionsArray = [calculatePeriodicAmount(grandYearlyTotal)];

		// Update state
		setRequiredContributions(contributionsArray);
		setAllBills(allBillsArray);

	}


	useEffect(() => {
		getBudgetTotals();
	}, [])


	return (

		<>
			<Typography variant="h6" component="h2">Contributions</Typography>
			<ContributionCard contributions={requiredContributions}/>
		</>

	)
}

export default BudgetTotals;
