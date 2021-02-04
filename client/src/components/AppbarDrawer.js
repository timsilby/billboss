import { useState } from "react";
import { useAuth } from "../utils/useAuth";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import AccountBoxSharp from "@material-ui/icons/AccountBoxSharp";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

function AppbarDrawer(props) {

	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [anchorEl, setAnchorEl] = useState(null);
	const [mobileOpen, setMobileOpen] = useState(false);
	const open = Boolean(anchorEl);

	const auth = useAuth();
	// const user = auth.user;

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		setAnchorEl(null);
		auth.firebaseLogout();
	}

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<div className={classes.toolbar}></div>

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
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (

		<div>

			<AppBar position="static" className={classes.appBar}>
				<Toolbar>
					<IconButton
						edge="start"
						aria-label="open menu"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuSharpIcon />
					</IconButton>
					<Typography variant="h6" component="h2" noWrap>
						Placeholder
					</Typography>
					<div>
						<IconButton
							aria-label="open user menu"
							aria-controls="user-menu"
							aria-haspopup="true"
							onClick={handleMenu}
						>
							<AccountBoxSharp />
						</IconButton>
						<Menu
							id="user-menu"
							anchorEl={anchorEl}
							getContentAnchorEl={null}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={open}
							onClose={handleClose}
						>
							<Typography>
								{auth.user.displayName}
							</Typography>
							<Divider variant="middle" component="li" />
							<MenuItem onClick={handleClose}>Profile</MenuItem>
							<MenuItem onClick={handleLogout}>Logout</MenuItem>
						</Menu>
					</div>
				</Toolbar>
			</AppBar>

			<nav className={classes.drawer} aria-label="app menu">
				<Hidden smUp>
					<Drawer
						container={container}
						variant="temporary"
						anchor="left"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true
						}}
						classes={{
							paper: classes.drawerPaper
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown>
					<Drawer
						classes={{
							paper: classes.drawerPaper
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>

		</div>

	);

}

export default AppbarDrawer;
