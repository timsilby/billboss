import { useAuth } from "../../utils/useAuth";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import AppbarDrawer from "../AppBarDrawer/AppbarDrawer";
import BillSummary from "../Bills/BillSummary";
import Typography from "@material-ui/core/Typography";

dayjs.extend(utc)

const Dashboard = () => {


	const auth = useAuth();
	console.log("dashboard");
	console.log(auth.user);


	return (
		<div>
			<AppbarDrawer>
				<Typography variant="h5" component="h1">Dashboard</Typography>
				<BillSummary />
			</AppbarDrawer>
		</div>
	);

}

export default Dashboard;
