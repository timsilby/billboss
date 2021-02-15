import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";


const Header = () => {

	return (

		<Box component="header" my={6}>
			<Typography variant="h2" component="h1" color="primary" style={{color: "#2196f3"}}>
				BillBoss
			</Typography>
			<Typography variant="body1">
				Take control of your bills.
			</Typography>
		</Box>

	)

}

export default Header;
