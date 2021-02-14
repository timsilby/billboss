import { useEffect, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import apiRequest from "../../utils/apiRequest";
import { calculateYearlyTotal, calculatePeriodicAmount } from "../../utils/calculations";
import BudgetContributionsChart from "./BudgetContributionsChart";


dayjs.extend(utc);


const BudgetContributions = () => {


	const [chartData, setChartData] = useState([]);


	const getChartData = async () => {


		// Get required contributions per week and calculate chart data
		// ============================================================

		const allBills = [];

		// Get all billsets and non-recurring bills
		const billSets = await apiRequest.getEntries("/api/billsets");
		const bills = await apiRequest.getEntries("/api/bills?isRecurring=false");

		// Get account starting balance and open date
		const accountData = await apiRequest.getEntries("/api/accounts");
		const startBalance = accountData.data[0].startBalance;
		const openDate = accountData.data[0].openDate;

		// Iterate over arrays and call function to calculate yearly totals.
		// Call function to calculate periodic totals. Update each entry then add to allBills array.
		billSets.data.forEach(entry => {
			const yearlyTotal = calculateYearlyTotal(entry.amount, entry.recursEvery, entry.recurringPeriod);
			allBills.push(yearlyTotal);
		})

		bills.data.forEach(entry => {
			allBills.push(entry.amount);
		})

		// Reduce the array to get grand yearly total
		const grandYearlyTotal = allBills.reduce((acc, current) => {
			return acc + current
		}, 0);

		// Subtract account startBalance then calculate required contributions
		const requiredWeeklyAmount = calculatePeriodicAmount(grandYearlyTotal - startBalance).weekly;

		// Populate an array with weekly dates and cumulative contribution amount.
		// First object is openDate and opening balance.
		const requiredWeeklyData = [];
		requiredWeeklyData.push({ date: dayjs(openDate).unix(), requiredAmount: 0, actualAmount: 0 });

		const today = dayjs().startOf("day").utc().unix();
		let nextDate = requiredWeeklyData[0].date;

		while (nextDate < today) {

			// Add a week to the date
			nextDate = dayjs.unix(nextDate).add(1, "week").unix();
			requiredWeeklyData.push({ date: nextDate, requiredAmount: requiredWeeklyAmount, actualAmount: 0 });

		}

		console.log(requiredWeeklyData);

		// ------------------------------------------


		// Get actual contributions
		// ============================================================

		// Get all paid deposits
		const paidDeposits = await apiRequest.getEntries("/api/deposits?paid=true");

		// Map the array to return just the unix date and amount
		const deposits = paidDeposits.data.map(entry => {
			return { date: dayjs(entry.date).unix(), amount: entry.amount }
		})

		// Add the starting balance and sort
		deposits.push({ date: dayjs(openDate).unix(), amount: 500 });
		deposits.sort((a, b) => a.date - b.date);

		// Iterate through the array to calculate the accumulated total
		const actualData = [];
		// let accActualTotal = 0;

		console.log("Deposits", deposits);

		deposits.forEach(entry => {
			actualData.push({ date: entry.date, actualAmount: entry.amount, requiredAmount: 0 })
		})

		console.log("Actual weekly", actualData);

		// Combine the two arrays and calculate all required accumulative totals
		const combinedData = [...actualData, ...requiredWeeklyData].sort((a, b) => a.date - b.date);
		console.log("Combined",combinedData);

		// Iterate through the array and accumulate totals
		let accRequiredTotal = 0;
		let accActualTotal = 0;

		const calculatedData = combinedData.map(entry => {
			return {
				date: entry.date,
				actualAmount: accActualTotal += entry.actualAmount,
				requiredAmount: accRequiredTotal += entry.requiredAmount
			}
		});

		console.log("Calculated data", calculatedData);

		// ------------------------------------------


		setChartData(calculatedData);


	}

	useEffect(() => {
		getChartData();
	}, [])


	return (

		<BudgetContributionsChart chartData={chartData} />

	);

}

export default BudgetContributions;
