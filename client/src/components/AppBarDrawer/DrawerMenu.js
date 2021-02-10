import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import DashboardSharpIcon from "@material-ui/icons/DashboardSharp";
import ReceiptSharpIcon from "@material-ui/icons/ReceiptSharp";
import AccountBalanceWalletSharpIcon from "@material-ui/icons/AccountBalanceWalletSharp";
import MonetizationOnSharpIcon from "@material-ui/icons/MonetizationOnSharp";
import AssessmentSharpIcon from "@material-ui/icons/AssessmentSharp";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

	title: {
		backgroundColor: theme.palette.primary.dark,
		paddingLeft: theme.spacing(2),
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3)
	},
	menu: {
		paddingTop: 0,
		paddingBottom: 0
	},
	item: {
		"&:hover": {
			backgroundColor: theme.palette.primary.dark
		}
	},
	// icon: {
	// 	color: theme.palette.secondary.light
	// }
}));



// Imported into AppbarDrawer

const DrawerMenu = () => {

	const classes = useStyles();

	return (
		<div>

			<Typography variant="h6" component="div" className={classes.title}>
				BillBoss
			</Typography>

			<Divider />

			<List className={classes.menu}>
				<ListItem
					key="dashboard"
					component="a"
					button
					href="/dashboard"
					className={classes.item}
				>
					<ListItemIcon>
						<DashboardSharpIcon className={classes.icon} />
					</ListItemIcon>
					<ListItemText primary="Dashboard" />
				</ListItem>

				<ListItem
					key="bills"
					component="a"
					button
					href="/bills"
					className={classes.item}
				>
					<ListItemIcon>
						<ReceiptSharpIcon className={classes.icon} />
					</ListItemIcon>
					<ListItemText primary="Bills" />
				</ListItem>

				<ListItem
					key="account"
					component="a"
					button
					href="/account"
					className={classes.item}
				>
					<ListItemIcon>
						<AccountBalanceWalletSharpIcon className={classes.icon} />
					</ListItemIcon>
					<ListItemText primary="Account" />
				</ListItem>

				<ListItem
					key="budget"
					component="a"
					button
					href="/budget"
					className={classes.item}
				>
					<ListItemIcon>
						<MonetizationOnSharpIcon className={classes.icon} />
					</ListItemIcon>
					<ListItemText primary="Budget" />
				</ListItem>

				<ListItem
					key="reports"
					component="a"
					button
					href="/reports"
					className={classes.item}
				>
					<ListItemIcon>
						<AssessmentSharpIcon className={classes.icon} />
					</ListItemIcon>
					<ListItemText primary="Reports" />
				</ListItem>
			</List>

			<Divider />

		</div>
	)
};

export default DrawerMenu;
