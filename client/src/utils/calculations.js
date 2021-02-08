


export const getYearlyTotal = (amount, recursEvery, recurringPeriod) => {

	let yearlyTotal;

	// Switch according to the recurring period
	switch (recurringPeriod) {
		case "year":
			yearlyTotal = amount / recursEvery;
			break;
		case "month":
			yearlyTotal = amount / recursEvery * 12;
			break;
		case "week":
			yearlyTotal = amount / (recursEvery * 7) * 365;
			break;
		case "day":
			yearlyTotal = amount / recursEvery * 365;
			break;
		default:
			break;
	}

	// Return the calculated total to two decimal places
	return +yearlyTotal.toFixed(2);

}
