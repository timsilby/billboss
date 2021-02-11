import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 350,
		marginBottom: theme.spacing(4),
		borderStyle: "solid",
		borderWidth: "1px",
		borderColor: theme.palette.primary.main,
		"& td": {
			fontSize: "0.75rem"
		},
	},
	tableTitle: {
		padding: theme.spacing(1)
	},
	headerRow: {
		backgroundColor: theme.palette.grey[700],
	},
	title: {
		color: theme.palette.secondary.main
	},
	editButton: {
		textAlign: "left"
	}
}));



const RecurringBillTable = ({ bills }) => {

	const classes = useStyles();

	const handleClick = (event) => {
		console.log("clicked");
	}

	return (

		<>
			<Typography variant="h6" component="h2" className={classes.tableTitle}>Recurring Bills</Typography>
			<TableContainer component={Paper} className={classes.root}>
				<Table aria-label={"recurring bills table"}>
					<TableHead className={classes.headerRow}>
						<TableRow>
							<TableCell align="left">Bill Name</TableCell>
							<TableCell align="left">Billing Period</TableCell>
							<TableCell align="left">Start Date</TableCell>
							<TableCell align="right">Amount</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{bills.map((bill) => (
							<TableRow hover key={bill._id}>
								<TableCell align="left" className={classes.title}>
									<ButtonBase className={classes.editButton} onClick={handleClick}>
										{bill.title}
									</ButtonBase>
								</TableCell>
								<TableCell align="left">{bill.recurrence}</TableCell>
								<TableCell align="left">{bill.startDate}</TableCell>
								<TableCell align="right">{bill.amount.toFixed(2)}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>

	);

}

export default RecurringBillTable;
