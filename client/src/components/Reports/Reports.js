import { useState, useEffect } from "react";
import { useAuth } from "../../utils/useAuth";
import AppbarDrawer from "../AppbarDrawer";

const Reports = () => {

	const auth = useAuth();
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};


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
