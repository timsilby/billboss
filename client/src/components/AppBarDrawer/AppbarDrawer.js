import { useState } from "react";
import { useAuth } from "../../utils/useAuth";
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
import { makeStyles } from "@material-ui/core/styles";
import DrawerMenu from "./DrawerMenu";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
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
		display: "flex",
		justifyContent: "space-between"
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	title: {
		flexGrow: 1
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		}
	},
}));

function AppbarDrawer(props) {

	const { window, title } = props;
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const [mobileOpen, setMobileOpen] = useState(false);
	const open = Boolean(anchorEl);

	const auth = useAuth();

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

	const container = window !== undefined ? () => window().document.body : undefined;

	return (

		<div className={classes.root}>

			<AppBar position="static" className={classes.appBar}>
				<Toolbar>
					<IconButton
						edge="start"
						aria-label="open app menu drawer"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuSharpIcon />
					</IconButton>
					<Typography variant="h6" component="h1" noWrap className={classes.title}>
						{title}
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
							<MenuItem>{auth.user.displayName}</MenuItem>
							<Divider component="li" />
							<MenuItem onClick={handleClose}>Profile</MenuItem>
							<MenuItem onClick={handleLogout}>Logout</MenuItem>
						</Menu>
					</div>
				</Toolbar>
			</AppBar>


			<nav className={classes.drawer} aria-label="app menu drawer">
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
						<DrawerMenu />
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
						<DrawerMenu />
					</Drawer>
				</Hidden>
			</nav>

			<main className={classes.content}>
				{props.children}
			</main>
		</div>

	);

}

export default AppbarDrawer;
