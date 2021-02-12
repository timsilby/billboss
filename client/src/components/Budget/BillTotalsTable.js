import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
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
}));



const BillTotalsTable = ({ bills }) => {

	const classes = useStyles();

	return (

		<>
			<Typography variant="h6" component="h2" className={classes.tableTitle}>Bill Totals</Typography>
			<TableContainer component={Paper} className={classes.root}>
				<Table aria-label={"bill totals table"}>
					<TableHead className={classes.headerRow}>
						<TableRow>
							<TableCell align="left">Bill Name</TableCell>
							<TableCell align="right">Weekly</TableCell>
							<TableCell align="right">Fortnightly</TableCell>
							<TableCell align="right">Monthly</TableCell>
							<TableCell align="right">Yearly</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{bills.map((bill) => (
							<TableRow hover key={bill._id}>
								<TableCell align="left" className={classes.title}>{bill.title}</TableCell>
								<TableCell align="right">{bill.periodicAmounts.weekly.toFixed(2)}</TableCell>
								<TableCell align="right">{bill.periodicAmounts.fortnightly.toFixed(2)}</TableCell>
								<TableCell align="right">{bill.periodicAmounts.monthly.toFixed(2)}</TableCell>
								<TableCell align="right">{bill.periodicAmounts.yearly.toFixed(2)}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>

	);

}

export default BillTotalsTable;
