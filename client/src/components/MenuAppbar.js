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


function MenuAppbar({ handleDrawerToggle }) {

	const [anchorEl, setAnchorEl] = useState(null);
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

	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						aria-label="menu"
						onClick={handleDrawerToggle}
					>
						<MenuSharpIcon />
					</IconButton>
					<Typography variant="h6" component="h1">
						Placeholder
					</Typography>
					<div>
						<IconButton
							aria-label="User Account"
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
		</div>
	);
}

export default MenuAppbar;
