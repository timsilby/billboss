import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";


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
	health: {
		display: "flex",
		justifyContent: "space-around",
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(2)
	},
	cardContent: {
		paddingLeft: theme.spacing(4),
		paddingRight: theme.spacing(4),
		marginBottom: theme.spacing(2)
	},
	contributionBox: {
		padding: theme.spacing(1),
		marginBottom: theme.spacing(1),
		"& p": {
			fontSize: "0.75rem"
		}
	},
	contributionTitle: {
		paddingBottom: theme.spacing(1)
	},
	contribution: {
		display: "flex",
		justifyContent: "space-between",
		marginBottom: theme.spacing(1)
	}

}));


const ContributionsCard = ({ budgetHealth, currentContributions, requiredContributions }) => {

	const classes = useStyles();

	return (

		<Card className={classes.root} variant="outlined">
			<Typography component="h2" className={classes.title}>Contributions</Typography>
			<CardContent className={classes.cardContent}>
				<div className={classes.health}>
					<Typography variant="h6" component="span">Budget Health</Typography>
					<Typography variant="h6" component="span">{budgetHealth}</Typography>
				</div>
				<Box className={classes.contributionBox}>
					<Typography
						component="h3"
						className={classes.contributionTitle}
					>
						Current Contribution
					</Typography>
					<div className={classes.contribution}>
						<Typography color="secondary">Weekly</Typography>
						<Typography>{currentContributions.weekly.toFixed(2)}</Typography>
					</div>
					<div className={classes.contribution}>
						<Typography color="secondary">Fortnightly</Typography>
						<Typography>{currentContributions.fortnightly.toFixed(2)}</Typography>
					</div>
					<div className={classes.contribution}>
						<Typography color="secondary">Monthly</Typography>
						<Typography>{currentContributions.monthly.toFixed(2)}</Typography>
					</div>
				</Box>
				<Box className={classes.contributionBox}>
					<Typography
						component="h3"
						className={classes.contributionTitle}
					>
						Required Contribution
					</Typography>
					<div className={classes.contribution}>
						<Typography color="secondary">Weekly</Typography>
						<Typography>{requiredContributions.weekly.toFixed(2)}</Typography>
					</div>
					<div className={classes.contribution}>
						<Typography color="secondary">Fortnightly</Typography>
						<Typography>{requiredContributions.fortnightly.toFixed(2)}</Typography>
					</div>
					<div className={classes.contribution}>
						<Typography color="secondary">Monthly</Typography>
						<Typography>{requiredContributions.monthly.toFixed(2)}</Typography>
					</div>
				</Box>
			</CardContent>
		</Card>

	);

}

export default ContributionsCard;
