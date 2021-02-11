import { useState, useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import apiRequest from "../../utils/apiRequest";
import Container from "@material-ui/core/Container";
import DashboardBillCard from "./DashboardBillCard";


dayjs.extend(utc);


const DashboardBillsSummary = () => {

	const [upcomingBills, setUpcomingBills] = useState([]);
	const [overdueBills, setOverdueBills] = useState([]);


	// Get bills from the database and display
	const getBillsData = async () => {

		const overdue = [];
		const upcoming = [];

		// Get a list of bills that haven"t been paid yet
		const dbData = await apiRequest.getEntries("/api/bills?paid=false");

		// Iterate through the array, converting date to local time, compare it today and
		// push to the appropriate array.
		dbData.data.forEach(entry => {

			const dueDateLocal = dayjs(entry.date).local();
			const currentDateLocal = dayjs().startOf("day");

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

		// Sort the arrays. Grab the first three from the upcoming array
		upcoming.sort((a, b) => b.date - a.date);
		overdue.sort((a, b) => b.date - a.date);

		setUpcomingBills(upcoming.slice(0, 3));
		setOverdueBills(overdue);

	}


	useEffect(() => {

		getBillsData();

	}, [])


	return (

		<>
			<DashboardBillCard cardTitle={"Overdue Bills"} bills={overdueBills} />
			<DashboardBillCard cardTitle={"Upcoming Bills"} bills={upcomingBills} />
		</>

	);

}

export default DashboardBillsSummary;
