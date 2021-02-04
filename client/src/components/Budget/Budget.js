import { useState, useEffect } from "react";
import { useAuth } from "../../utils/useAuth";
import AppbarDrawer from "../AppbarDrawer";

const Budget = () => {

	const auth = useAuth();
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};


	console.log("budget");
	console.log(auth.user);

	useEffect(() => {

	}, [])



	return (
		<div>
			<AppbarDrawer />
			<h1>Budget</h1>
		</div>
	);

}

export default Budget;
