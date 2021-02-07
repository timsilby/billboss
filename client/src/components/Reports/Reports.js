import { useState, useEffect } from "react";
import { useAuth } from "../../utils/useAuth";
import AppbarDrawer from "../AppBarDrawer/AppbarDrawer";

const Reports = () => {

	const auth = useAuth();
	console.log("reports");
	console.log(auth.user);

	useEffect(() => {

	}, [])



	return (
		<div>
			<AppbarDrawer />
			<h1>Reports</h1>
		</div>
	);

}

export default Reports;
