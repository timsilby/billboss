import { useState, useEffect } from "react";
import { useAuth } from "../../utils/useAuth";
import apiRequest from "../../utils/apiRequest";
import Button from "@material-ui/core/Button";
import AppbarDrawer from "../AppBarDrawer/AppbarDrawer";
import AddBillDialog from "./AddBillDialog";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import Typography from "@material-ui/core/Typography";
import RecurringBillTable from "./RecurringBillTable";
import BillTable from "../Dashboard/BillTable";


dayjs.extend(utc);

const Bills = () => {

	const [dialogOpen, setDialogOpen] = useState(false);
	const [recurringBills, setRecurringBills] = useState([]);
	const [otherBills, setOtherBills] = useState([]);

	const auth = useAuth();
	console.log("bills");
	console.log(auth.user);

	const toggleDialog = () => setDialogOpen(!dialogOpen);

	const getBillsData = async () => {

		// Get recurring bills and modify the data for display
		const billsets = await apiRequest.getEntries("/api/billsets");

		const recurringBillData = billsets.data.map(entry => {

			entry.startDate = dayjs(entry.date).local().format("DD/MM/YYYY");
			entry.recurrence = `every ${entry.recursEvery} ${entry.recurringPeriod}(s)`
			return entry;
		});

		setRecurringBills(recurringBillData);

		// Get non-recurring bills that haven't been paid
		const bills = await apiRequest.getEntries("/api/bills?isRecurring=false&paid=false");
		const otherBillData = bills.data.map(entry => {
			entry.date = dayjs(entry.date).local().format("DD/MM/YYYY");
			return entry;
		});
		setOtherBills(otherBillData);

	}

	useEffect(() => {

		getBillsData();

	}, [])


	return (

		<AppbarDrawer>

			<Typography variant="h5" component="h1">Manage Bills</Typography>
			<Typography variant="h6" component="h2">Recurring Bills</Typography>
			<RecurringBillTable bills={recurringBills} />
			<Typography variant="h6" component="h2">Other Bills</Typography>
			<BillTable bills={otherBills} billtype={"other"} />
			<AddBillDialog open={dialogOpen} toggleDialog={toggleDialog} />
			<Button onClick={toggleDialog}>Add Bill</Button>

		</AppbarDrawer>

	);

}

export default Bills;
