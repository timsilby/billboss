import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";



// Imported into AppbarDrawer

const DrawerMenu = () => {

	return (
		<div>

			<Typography variant="h6" component="span">
				BillBoss
			</Typography>

			<Divider />

			<List>
				<ListItem
					key="dashboard"
					component="a"
					button
					href="/dashboard"
				>
					<ListItemIcon></ListItemIcon>
					<ListItemText primary="Dashboard" />
				</ListItem>

				<ListItem
					key="bills"
					component="a"
					button
					href="/bills"
				>
					<ListItemIcon></ListItemIcon>
					<ListItemText primary="Bills" />
				</ListItem>

				<ListItem
					key="budget"
					component="a"
					button
					href="/budget"
				>
					<ListItemIcon></ListItemIcon>
					<ListItemText primary="Budget" />
				</ListItem>

				<ListItem
					key="reports"
					component="a"
					button
					href="/reports"
				>
					<ListItemIcon></ListItemIcon>
					<ListItemText primary="Reports" />
				</ListItem>
			</List>

			<Divider />

		</div>
	)
};

export default DrawerMenu;
