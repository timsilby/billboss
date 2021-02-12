import { useState } from "react";
import { useAuth } from "../../utils/useAuth";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
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
	const [mobileOpen, setMobileOpen] = useState(false);

	const auth = useAuth();

	const handleLogout = () => {
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
						<DrawerMenu handleLogout={handleLogout} />
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
