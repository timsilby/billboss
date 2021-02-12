import AppbarDrawer from "../AppBarDrawer/AppbarDrawer";
import BillTotalsTable from "./BillTotalsTable"
import { useState, useEffect } from "react";
import apiRequest from "../../utils/apiRequest";
import Box from "@material-ui/core/Box";
import ContributionsCard from "./ContributionsCard";
import { calculateYearlyTotal, calculatePeriodicAmount } from "../../utils/calculations";


const Budget = () => {

	const [requiredContributions, setRequiredContributions] = useState({
		weekly: 0,
		fortnightly: 0,
		monthly: 0
	});
	const [currentContributions, setCurrentContributions] = useState({
		weekly: 0,
		fortnightly: 0,
		monthly: 0
	});
	const [budgetHealth, setBudgetHealth] = useState("");
	const [allBills, setAllBills] = useState([]);


	// Calculate bill totals and required contributions
	const getBudgetTotals = async () => {

		const allBillsArray = [];


		// Current contributions
		// ==========================================

		const depositSets = await apiRequest.getEntries("/api/depositsets");

		// Call function to calculate yearly total for each depositset and add to the array
		depositSets.data.forEach(entry => {
			entry.yearlyTotal = calculateYearlyTotal(entry.amount, entry.recursEvery, entry.recurringPeriod);
		});

		// Reduce the yearly totals in the array to get total yearly contributions
		const totalCurrentContributions = depositSets.data.reduce((acc, current) => {
			return acc + current.yearlyTotal
		}, 0);

		// Call function to calculate periodic totals from the yearly total.
		// Returns an object with weekly/fortnightly/monthly totals.
		const objCurrentContributions = calculatePeriodicAmount(totalCurrentContributions);

		// ------------------------------------------


		// Bill totals and required contributions
		// ==========================================

		// Get all billsets and unpaid non-recurring bills
		const billSets = await apiRequest.getEntries("/api/billsets");
		const bills = await apiRequest.getEntries("/api/bills?isRecurring=false&paid=false");

		// Get account starting balance
		const accountData = await apiRequest.getEntries("/api/accounts");
		const startBalance = accountData.data[0].startBalance;

		// Iterate over arrays and call function to calculate yearly totals.
		// Call function to calculate periodic totals. Update each entry then add to allBills array.
		billSets.data.forEach(entry => {
			entry.yearlyTotal = calculateYearlyTotal(entry.amount, entry.recursEvery, entry.recurringPeriod);
			entry.periodicAmounts = calculatePeriodicAmount(entry.yearlyTotal);
			allBillsArray.push(entry);
		})

		bills.data.forEach(entry => {
			entry.yearlyTotal = entry.amount;
			entry.periodicAmounts = calculatePeriodicAmount(entry.yearlyTotal);
			allBillsArray.push(entry);
		})

		// Reduce the array to get grand yearly total
		const grandYearlyTotal = allBillsArray.reduce((acc, current) => {
			return acc + current.yearlyTotal
		}, 0);

		// Subtract account startBalance then calculate required contributions
		const objRequiredContributions = calculatePeriodicAmount(grandYearlyTotal - startBalance);

		// ------------------------------------------


		// If current contributions are less than required budget health is bad
		requiredContributions > currentContributions ? setBudgetHealth("Good") : setBudgetHealth("Poor")

		setCurrentContributions(objCurrentContributions);
		setRequiredContributions(objRequiredContributions);
		setAllBills(allBillsArray);

	}


	useEffect(() => {
		getBudgetTotals();
	}, [])


	return (

		<AppbarDrawer title={"Budget"}>
			<Box component="main">
				<ContributionsCard
					budgetHealth={budgetHealth}
					currentContributions={currentContributions}
					requiredContributions={requiredContributions}
				/>
				<BillTotalsTable bills={allBills} />
			</Box>
		</AppbarDrawer>

	);

}

export default Budget;
