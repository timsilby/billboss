import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


const BillTotalsTable = ({ bills }) => {

	return (
		<TableContainer component={Paper}>
			<Table aria-label={"bill totals table"}>
				<TableHead>
					<TableRow>
						<TableCell>Bill Name</TableCell>
						<TableCell align="left">Weekly</TableCell>
						<TableCell align="left">Fortnightly</TableCell>
						<TableCell align="right">Monthly</TableCell>
						<TableCell align="right">Yearly</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{bills.map((bill) => (
						<TableRow key={bill._id}>
							<TableCell component="th" scope="row">
								{bill.title}
							</TableCell>
							<TableCell align="left">{bill.periodicAmounts.weekly.toFixed(2)}</TableCell>
							<TableCell align="left">{bill.periodicAmounts.fortnightly.toFixed(2)}</TableCell>
							<TableCell align="left">{bill.periodicAmounts.monthly.toFixed(2)}</TableCell>
							<TableCell align="left">{bill.yearlyTotal.toFixed(2)}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>

	);

}

export default BillTotalsTable;
