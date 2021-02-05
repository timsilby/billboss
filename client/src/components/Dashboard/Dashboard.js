import { useState, useEffect } from "react";
import apiRequest from "../../utils/apiRequest";
import { useAuth } from "../../utils/useAuth";
import AppbarDrawer from "../AppBarDrawer/AppbarDrawer";

const Dashboard = () => {

	const [data, setData] = useState();
	const auth = useAuth();
	console.log("dashboard");
	console.log(auth.user);


	const dosomething = async () => {

		const dbdata = await apiRequest.getEntries(`/api/bills`);
		// const dbdata = await apiRequest.createEntry(`/api/bills`, doc)
		// const dbdata = await apiRequest.getEntryById(`/api/bills?id=601841c24fa9490f9c8e18c9`)
		// const dbdata = await apiRequest.updateEntry(`/api/bills?id=60176cc03e35081734d0c0c7`, doc)
		// const dbdata = await apiRequest.deleteEntry(`/api/bills?id=60177615651d8c5918ceabb9`)
		setData(JSON.stringify(dbdata.data));

	}

	useEffect(() => {

	}, [])


	return (
		<div>
			<AppbarDrawer />
			<h1>Dashboard</h1>
			<button onClick={dosomething}>Do something</button>
			{data}
		</div>
	);

}

export default Dashboard;