import Container from "@material-ui/core/Container";
import AppbarDrawer from "../AppBarDrawer/AppbarDrawer";
import DashboardBillsSummary from "./DashboardBillsSummary";
import DashboardAccountCard from "./DashboardAccountCard";


const Dashboard = () => {



	return (

		<div>
			<AppbarDrawer title={"Dashboard"}>
				<Container component="main">
					<DashboardBillsSummary />
					<DashboardAccountCard />
				</Container>
			</AppbarDrawer>
		</div>

	);

}

export default Dashboard;
