import Button from "@material-ui/core/Button";
import AppbarDrawer from "../AppBarDrawer/AppbarDrawer";
import AddDepositDialog from "./AddDepositDialog";
import { useState } from "react";

const Account = () => {

	const [dialogOpen, setDialogOpen] = useState(false);


	const toggleDialog = () => setDialogOpen(!dialogOpen);

	return (

		<AppbarDrawer>

			<h1>Account</h1>

			<AddDepositDialog open={dialogOpen} toggleDialog={toggleDialog} />
			<Button onClick={toggleDialog}>Make a Deposit</Button>

		</AppbarDrawer>

	);

}

export default Account;
