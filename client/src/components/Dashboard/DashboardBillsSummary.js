import { useState, useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import apiRequest from "../../utils/apiRequest";
import DashboardBillCard from "./DashboardBillCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

dayjs.extend(utc);


const useStyles = makeStyles((theme) => ({
	gridRoot: {
		marginBottom: theme.spacing(4),
	}
}));


const DashboardBillsSummary = () => {

	const [upcomingBills, setUpcomingBills] = useState([]);
	const [overdueBills, setOverdueBills] = useState([]);

	const classes = useStyles();


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

		<Grid container justify="center" spacing={2} className={classes.gridRoot}>
			<Grid item xs={12} md={6} lg={4}>
				<DashboardBillCard cardTitle={"Overdue Bills"} bills={overdueBills} error={true} />
			</Grid>
			<Grid item xs={12} md={6} lg={4}>
				<DashboardBillCard cardTitle={"Upcoming Bills"} bills={upcomingBills} />
			</Grid>
		</Grid>

	);

}

export default DashboardBillsSummary;
