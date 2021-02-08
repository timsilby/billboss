import { useState, useEffect } from "react";
import apiRequest from "../../utils/apiRequest";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import Typography from "@material-ui/core/Typography";
import { getYearlyTotal } from "../../utils/calculations";

dayjs.extend(utc);


const BudgetTotals = () => {

	// billTotal is combined total of all recurring bills and unpaid non-recurring bills.
	// contributions is amount of money needed to be able to pay all bills.
	const [billTotal, setBillTotal] = useState();
	const [requiredContribution, setRequiredContribution] = useState();


	// Calculate bill totals and required contributions
	const getBudgetAmounts = async () => {

		const allBills = [];
		const allYearlyTotals = [];

		// Get all billsets and unpaid non-recurring bills
		const billsets = await apiRequest.getEntries("/api/billsets");
		const bills = await apiRequest.getEntries("/api/bills?isRecurring=false&paid=false");

		// Iterate over arrays and call function to calculate yearly totals, add to another array
		billsets.data.forEach(entry => {
			const yearlyTotal = getYearlyTotal(entry.amount, entry.recursEvery, entry.recurringPeriod);
			entry.yearlyTotal = yearlyTotal;
			allYearlyTotals.push(yearlyTotal);
			allBills.push(entry);
		})

		bills.data.forEach(entry => {
			entry.yearlyTotal = entry.amount;
			allYearlyTotals.push(entry.yearlyTotal);
			allBills.push(entry);
		})

		// Reduce the array to get grand yearly total
		const grandYearlyTotal = allYearlyTotals.reduce((acc, current) => acc + current);
		console.log(grandYearlyTotal);
		setBillTotal(grandYearlyTotal);

	}

	useEffect(() => {
		getBudgetAmounts();
	})


	return (
		<h1>{billTotal}</h1>
	);

}

export default BudgetTotals;
