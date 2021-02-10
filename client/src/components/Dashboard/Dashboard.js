import dayjs from "dayjs";
import minMax from "dayjs/plugin/minMax";
import utc from "dayjs/plugin/utc";
import AppbarDrawer from "../AppBarDrawer/AppbarDrawer";
import BillSummary from "./DashboardBillsCard";
import Typography from "@material-ui/core/Typography";
import DashboardAccountCard from "./DashboardAccountCard";


dayjs.extend(utc);
dayjs.extend(minMax);

const Dashboard = () => {



	return (

		<div>
			<AppbarDrawer title={"Dashboard"}>
				<Typography variant="h5" component="h1">Dashboard</Typography>
				<BillSummary />
				<DashboardAccountCard />
			</AppbarDrawer>
		</div>

	);

}

export default Dashboard;
