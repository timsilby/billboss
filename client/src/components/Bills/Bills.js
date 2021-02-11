import { useState, useEffect } from "react";
import { useAuth } from "../../utils/useAuth";
import apiRequest from "../../utils/apiRequest";
import AppbarDrawer from "../AppBarDrawer/AppbarDrawer";
import AddBillDialog from "./AddBillDialog";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import RecurringBillTable from "./RecurringBillTable";
import BillTable from "./BillTable";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

dayjs.extend(utc);

const useStyles = makeStyles((theme) => ({
	fab: {
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	}
}));


const Bills = () => {

	const [dialogOpen, setDialogOpen] = useState(false);
	const [recurringBills, setRecurringBills] = useState([]);
	const [otherBills, setOtherBills] = useState([]);

	const classes = useStyles();

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

		<AppbarDrawer title={"Bills"}>
			<Container component="main">
				<RecurringBillTable bills={recurringBills} />
				<BillTable bills={otherBills} />
				<AddBillDialog open={dialogOpen} toggleDialog={toggleDialog} />
				<Fab className={classes.fab} onClick={toggleDialog} color="secondary" aria-label="add">
					<AddIcon />
				</Fab>
			</Container>
		</AppbarDrawer>

	);

}

export default Bills;
