import { useState } from "react";
import { useAuth } from "../../utils/useAuth";
import Button from "@material-ui/core/Button";
import AppbarDrawer from "../AppBarDrawer/AppbarDrawer";
import AddDepositDialog from "./AddDepositDialog";
import BudgetTotals from "./BudgetTotals";

const Budget = () => {

	const [dialogOpen, setDialogOpen] = useState(false);

	const auth = useAuth();
	console.log("budget");
	console.log(auth.user);

	const toggleDialog = () => setDialogOpen(!dialogOpen);

	return (

		<AppbarDrawer>

			<h1>Budget</h1>
			<BudgetTotals />
			<AddDepositDialog open={dialogOpen} toggleDialog={toggleDialog} />
			<Button onClick={toggleDialog}>Make a Deposit</Button>

		</AppbarDrawer>

	);

}

export default Budget;
