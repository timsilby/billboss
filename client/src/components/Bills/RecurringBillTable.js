import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


const RecurringBillTable = ({ bills }) => {

	return (
		<TableContainer component={Paper}>
			<Table aria-label={"recurring bills table"}>
				<TableHead>
					<TableRow>
						<TableCell>Bill Name</TableCell>
						<TableCell align="left">First Due Date</TableCell>
						<TableCell align="left">Billing Period</TableCell>
						<TableCell align="right">Amount</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{bills.map((bill) => (
						<TableRow key={bill._id}>
							<TableCell component="th" scope="row">
								{bill.title}
							</TableCell>
							<TableCell align="left">{bill.startDate}</TableCell>
							<TableCell align="left">{bill.recurrence}</TableCell>
							<TableCell align="right">{bill.amount}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>

	);

}

export default RecurringBillTable;
