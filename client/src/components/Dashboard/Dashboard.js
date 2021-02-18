import AppbarDrawer from "../AppBarDrawer/AppbarDrawer";
import DashboardBillsSummary from "./DashboardBillsSummary";
import DashboardAccountCard from "./DashboardAccountCard";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";


const Dashboard = () => {

	return (

		<div>
			<AppbarDrawer title={"Dashboard"}>
				<Box component="main">
						<DashboardBillsSummary />
					<Grid container justify="center" spacing={2}>
						<Grid item xs={12} md={6} lg={4}>
							<DashboardAccountCard />
						</Grid>
					</Grid>
				</Box>
			</AppbarDrawer>
		</div>

	);

}

export default Dashboard;
