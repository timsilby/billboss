import { useState, useEffect } from "react";
import { useAuth } from "../../utils/useAuth";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import apiRequest from "../../utils/apiRequest";
import AppbarDrawer from "../AppBarDrawer/AppbarDrawer";
import BillSummary from "./BillSummary";
import Typography from "@material-ui/core/Typography";

dayjs.extend(utc)

const Dashboard = () => {

	const [data, setData] = useState();


	const auth = useAuth();
	console.log("dashboard");
	console.log(auth.user);


	const dosomething = async () => {

	}

	useEffect(() => {

	}, [])


	return (
		<div>
			<AppbarDrawer>
				<Typography variant="h5" component="h1">Dashboard</Typography>
				{/* <button onClick={dosomething}>Do something</button>
				{data} */}
				<BillSummary />
			</AppbarDrawer>
		</div>
	);

}

export default Dashboard;
