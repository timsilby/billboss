import { useState } from "react";
import { useAuth } from "../../utils/useAuth";
import Button from "@material-ui/core/Button";
import AppbarDrawer from "../AppBarDrawer/AppbarDrawer";
import AddDepositDialog from "../Account/AddDepositDialog";
import BudgetTotals from "./BudgetTotals";
import Account from "./Account";

const Budget = () => {

	const [dialogOpen, setDialogOpen] = useState(false);

	const auth = useAuth();
	console.log("budget");
	console.log(auth.user);

	const toggleDialog = () => setDialogOpen(!dialogOpen);

	return (

		<AppbarDrawer title={"Budget"}>

			<h1>Budget</h1>
			<BudgetTotals />
			<Account />
			<AddDepositDialog open={dialogOpen} toggleDialog={toggleDialog} />
			<Button onClick={toggleDialog}>Make a Deposit</Button>

		</AppbarDrawer>

	);

}

export default Budget;
