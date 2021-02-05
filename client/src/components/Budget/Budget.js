import { useState, useEffect } from "react";
import { useAuth } from "../../utils/useAuth";
import AppbarDrawer from "../AppBarDrawer/AppbarDrawer";

const Budget = () => {

	const auth = useAuth();
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
