import { useState } from "react";
import { useAuth } from "../../utils/useAuth";
import Button from "@material-ui/core/Button";
import AppbarDrawer from "../AppBarDrawer/AppbarDrawer";
import AddBillDialog from "./AddBillDialog";


const Bills = () => {

	const [dialogOpen, setDialogOpen] = useState(false);

	const auth = useAuth();
	console.log("bills");
	console.log(auth.user);

	const toggleAddBill = () => setDialogOpen(!dialogOpen);

	return (

		// Page content needs to be rendered inside the AppbarDrawer component so it
		// displays properly with the appbar and menu.

		<AppbarDrawer>

			<h1>Bills</h1>
			<AddBillDialog open={dialogOpen} handleClose={toggleAddBill} />
			<Button onClick={toggleAddBill}>Add Bill</Button>

		</AppbarDrawer>

	);

}

export default Bills;
