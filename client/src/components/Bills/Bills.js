import { useState, useEffect } from "react";
import apiRequest from "../../utils/apiRequest";
import AppbarDrawer from "../AppBarDrawer/AppbarDrawer";
import AddBillDialog from "./AddBillDialog";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import RecurringBillTable from "./RecurringBillTable";
import BillTable from "./BillTable";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import EditBillDialog from "./EditBillDialog";

dayjs.extend(utc);

const useStyles = makeStyles((theme) => ({
	buttonBox: {
		display: "flex",
		justifyContent: "flex-end"
	}
}));

const emptyFormData = {
	title: "",
	notes: "",
	date: null,
	isRecurring: false,
	recursEvery: 1,
	recurringPeriod: "",
	amount: "",
	isAutomatic: false
}


const Bills = () => {

	const [addDialogOpen, setAddDialogOpen] = useState(false);
	const [editDialogOpen, setEditDialogOpen] = useState(false);
	const [currentBillData, setCurrentBillData] = useState(emptyFormData);
	const [recurringBills, setRecurringBills] = useState([]);
	const [otherBills, setOtherBills] = useState([]);

	const classes = useStyles();

	const toggleAddDialog = () => setAddDialogOpen(!addDialogOpen);
	const toggleEditDialog = () => setEditDialogOpen(!editDialogOpen);

	const getCurrentBillData = async (billId, recurring) => {

		let data;

		if (recurring) {
			const res = await apiRequest.getEntryById(`/api/billsets?id=${billId}`);
			data = {...res.data, isRecurring: true};
		}
		else {
			const res = await apiRequest.getEntryById(`/api/bills?id=${billId}`);
			data = {...res.data, isRecurring: false, recursEvery: 0, recurringPeriod: ""};
		}

		setCurrentBillData(data);
		toggleEditDialog();

	}

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
			<Box component="main">
				<RecurringBillTable bills={recurringBills} getCurrentBillData={getCurrentBillData} />
				<BillTable bills={otherBills} getCurrentBillData={getCurrentBillData} />
				<AddBillDialog
					open={addDialogOpen}
					toggleDialog={toggleAddDialog}
					refreshTables={getBillsData}
				/>
				<EditBillDialog
					open={editDialogOpen}
					toggleDialog={toggleEditDialog}
					currentData={currentBillData}
					refreshTables={getBillsData}
				/>
				<Box className={classes.buttonBox}>
					<Button variant="contained" color="primary" onClick={toggleAddDialog}>Add Bill</Button>
				</Box>
			</Box>
		</AppbarDrawer>

	);

}

export default Bills;
