import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const ContributionCard = ({ contributions }) => {

	console.log(contributions);

	return (

		<Card>
			<CardHeader title="Required Contributions"></CardHeader>
			{contributions.map((contribution, index) => (
				<CardContent key={index}>
					<Typography>Weekly: {contribution.weekly.toFixed(2)}</Typography>
					<Typography>Fortnightly: {contribution.fortnightly.toFixed(2)}</Typography>
					<Typography>Monthly: {contribution.monthly.toFixed(2)}</Typography>
				</CardContent>
			))}
		</Card>

	);

}

export default ContributionCard;
