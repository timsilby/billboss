import { useState, useEffect } from "react";
import { useAuth } from "../../utils/useAuth";
import AppbarDrawer from "../AppbarDrawer";

const Bills = () => {

	const auth = useAuth();
	console.log("bills");
	console.log(auth.user);

	useEffect(() => {

	}, [])



	return (
		<div>
			<AppbarDrawer />
			<h1>Bills</h1>
		</div>
	);

}

export default Bills;
