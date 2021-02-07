import { useState, useEffect } from "react";
import apiRequest from "../../utils/apiRequest";
import { useAuth } from "../../utils/useAuth";
import AppbarDrawer from "../AppBarDrawer/AppbarDrawer";
import dayjs from "dayjs";

const Dashboard = () => {

	const [data, setData] = useState();
	const auth = useAuth();
	console.log("dashboard");
	console.log(auth.user);


	const dosomething = async () => {

		const dbdata = await apiRequest.getEntries("/api/bills");
		console.log(dayjs("2021-02-01T17:59:33.656Z"));
		console.log(dayjs("2021-02-01T17:59:33.656+00:00"));
		console.log(dayjs("2021-02-01T17:59:33.656Z") === dayjs("2021-02-01T17:59:33.656+00:00"));
		const d1 = dayjs("2021-02-01T17:59:33.656Z");
		const d2 = dayjs("2021-02-01T17:59:33.656+00:00");
		if (d1 === d2) {console.log("equal");}		// const dbdata = await apiRequest.createEntry(`/api/bills`, doc)
		// const dbdata = await apiRequest.getEntryById(`/api/bills?id=601841c24fa9490f9c8e18c9`)
		// const dbdata = await apiRequest.updateEntry(`/api/bills?id=60176cc03e35081734d0c0c7`, doc)
		// const dbdata = await apiRequest.deleteEntry(`/api/bills?id=60177615651d8c5918ceabb9`)
		setData(JSON.stringify(dbdata.data));

	}

	useEffect(() => {

	}, [])


	return (
		<div>
			<AppbarDrawer>
			<h1>Dashboard</h1>
			<button onClick={dosomething}>Do something</button>
			{data}
			</AppbarDrawer>
		</div>
	);

}

export default Dashboard;
