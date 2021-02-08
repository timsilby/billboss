import { useState, useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import apiRequest from "../../utils/apiRequest";
import Typography from "@material-ui/core/Typography";
import BillTable from "./BillTable";

dayjs.extend(utc);


const BillSummary = () => {

	const [upcomingBills, setUpcomingBills] = useState([]);
	const [overdueBills, setOverdueBills] = useState([]);
	const [recentBills, setRecentBills] = useState([]);


	// Axios call to get bills from the database
	const getBillsData = async () => {

		let overdue = [];
		let upcoming = [];
		let recent = [];

		// Get a list of bills going back one month or that haven"t been paid yet
		const startDate = dayjs().startOf("day").subtract(1, "month").utc().toISOString();
		const dbData = await apiRequest.getEntries(`/api/bills?date=${startDate}`);

		// Iterate through the array, converting date to local time, compare it today and
		// push to the appropriate array.
		dbData.data.forEach(entry => {

			const dueDateLocal = dayjs(entry.date).local();
			const currentDateLocal = dayjs().startOf("day");

			// If the bill has been paid add to the recent array immediately
			if (entry.paid) {
				entry.date = dueDateLocal.format("DD/MM/YYYY");
				recent.push(entry);
				return
			}

			// If not paid, compare the date. If it's before today add to the overdue array.
			if (dueDateLocal.isBefore(currentDateLocal)) {
				entry.date = dueDateLocal.format("DD/MM/YYYY");
				overdue.push(entry)
				return
			}

			// Otherwise push it to upcoming
			entry.date = dueDateLocal.format("DD/MM/YYYY");
			upcoming.push(entry);

		});

		setUpcomingBills(upcoming);
		setOverdueBills(overdue);
		setRecentBills(recent);

	}


	useEffect(() => {

		getBillsData();

	}, [])


	return (
		<>
			<Typography variant="h6" component="h2">Overdue Bills</Typography>
			<BillTable bills={overdueBills} billtype={"overdue"} />
			<Typography variant="h6" component="h2">Upcoming Bills</Typography>
			<BillTable bills={upcomingBills} billtype={"upcoming"} />
			<Typography variant="h6" component="h2">Recently Paid Bills</Typography>
			<BillTable bills={recentBills} billtype={"recent"} />

		</>
	);

}

export default BillSummary;
