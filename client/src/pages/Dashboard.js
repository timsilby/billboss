import useTokenHeader from "../utils/useTokenHeader";

const Dashboard = () => {

	const tokenHeader = useTokenHeader();

	console.log(tokenHeader);

	return (
		<div>
			<h1>Dashboard</h1>
		</div>
	);

}

export default Dashboard;
