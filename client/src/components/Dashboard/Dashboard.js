import AppbarDrawer from "../AppBarDrawer/AppbarDrawer";
import DashboardBillsSummary from "./DashboardBillsSummary";
import DashboardAccountCard from "./DashboardAccountCard";
import Box from "@material-ui/core/Box";


const Dashboard = () => {



	return (

		<div>
			<AppbarDrawer title={"Dashboard"}>
				<Box component="main">
					<DashboardBillsSummary />
					<DashboardAccountCard />
				</Box>
			</AppbarDrawer>
		</div>

	);

}

export default Dashboard;
