import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

dayjs.extend(utc);

const useStyles = makeStyles((theme) => ({
	tableTitle: {
		paddingTop: theme.spacing(1),
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(3)
	}
}));


const BudgetContributionsChart = ({ chartData }) => {

	const classes = useStyles();

	const customTicks = (props) => {

		// Convert unix time to something useful
		const tickLabel = dayjs.unix(props.payload.value).format("DD MMM");

		return (
			<text
				x={props.x}
				y={props.y + 15}
				textAnchor="middle"
				fill="#666"
			>
				{tickLabel}
			</text>
		)

	};

	return (

		<>
			<Typography variant="h6" component="h2" className={classes.tableTitle}>Budget Contributions</Typography>
			<LineChart
				width={350}
				height={200}
				margin={{
					top: 10,
					right: 30,
					left: 0,
					bottom: 0,
				}}
				data={chartData}
			>
				<Line
					type="monotone"
					dataKey="requiredAmount"
					stroke="#8884d8"
					dot={false}
					name="Required"
				/>
				<Line
					type="monotone"
					dataKey="actualAmount"
					stroke="#82ca9d"
					dot={false}
					name="Actual"
				/>
				<XAxis dataKey="date" tick={customTicks} tickCount={4} interval="preserveEnd" />
				<YAxis />
				<Tooltip />
				<Legend />
			</LineChart>
		</>

	);

}

export default BudgetContributionsChart;
