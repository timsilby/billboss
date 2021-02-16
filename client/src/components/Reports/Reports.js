import AppbarDrawer from "../AppBarDrawer/AppbarDrawer";
import BudgetContributions from "./BudgetContributions";

const Reports = () => {

	return (
		<div>
			<AppbarDrawer title={"Reports"}>
				<BudgetContributions />
			</AppbarDrawer>
		</div>
	);

}

export default Reports;
