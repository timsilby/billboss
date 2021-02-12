import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ReceiptSharpIcon from "@material-ui/icons/ReceiptSharp";


const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 350,
		marginBottom: theme.spacing(4),
		borderColor: theme.palette.primary.main
	},
	title: {
		padding: theme.spacing(2),
		backgroundColor: theme.palette.grey[700],
	},
	billDate: {
		flexGrow: 0,
		marginRight: theme.spacing(2)
	},
	billIcon: {
		marginRight: theme.spacing(2)
	},
	billAmount: {
		textAlign: "right"
	},
}));


const DashboardBillCard = ({ cardTitle, bills }) => {

	const classes = useStyles();


	return (

		<Card className={classes.root} variant="outlined">
			<Typography component="h2" className={classes.title}>{cardTitle}</Typography>
			<CardContent>
				<List>
					{bills.map((bill) => (
						<ListItem key={bill._id}>
							<ReceiptSharpIcon className={classes.billIcon} />
							<ListItemText className={classes.billDate}>
								{bill.date}
							</ListItemText>
							<ListItemText>
								{bill.title}
							</ListItemText>
							<ListItemText className={classes.billAmount}>
								{bill.amount.toFixed(2)}
							</ListItemText>
						</ListItem>
					))}
				</List>
			</CardContent>
		</Card>

	);

}

export default DashboardBillCard;
