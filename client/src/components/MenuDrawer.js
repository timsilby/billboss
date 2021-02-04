import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";


function MenuDrawer(props) {

	const drawer = (
		<div>
			<div></div>
			<Divider />
			<List>
				<ListItem button key="dashboard">
					<ListItemIcon></ListItemIcon>
					<ListItemText
						primary="Dashboard"
					/>
				</ListItem>
				<ListItem button key="bills">
					<ListItemIcon></ListItemIcon>
					<ListItemText
						primary="Dashboard"
					/>
				</ListItem>
				<ListItem button key="budget">
					<ListItemIcon></ListItemIcon>
					<ListItemText
						primary="Dashboard"
					/>
				</ListItem>
				<ListItem button key="funds">
					<ListItemIcon></ListItemIcon>
					<ListItemText
						primary="Dashboard"
					/>
				</ListItem>
			</List>
			<Divider />
		</div>
	);

	return (
		<div>
			<nav aria-label="app-menu">
				<Hidden smUp implementation="css">
					<Drawer
						variant="temporary"
						anchor="left"
						open={props.mobileOpen}
						onClose={props.handleDrawerToggle}
						ModalProps={{
							keepMounted: true
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
		</div>
	)
}

export default MenuDrawer;