import { useAuth } from "../../utils/useAuth";
import AppbarDrawer from "../AppBarDrawer/AppbarDrawer";

const Reports = () => {

	const auth = useAuth();
	console.log("reports");
	console.log(auth.user);


	return (
		<div>
			<AppbarDrawer title={"Reports"}>
			<h1>Reports</h1>
			</AppbarDrawer>
		</div>
	);

}

export default Reports;
