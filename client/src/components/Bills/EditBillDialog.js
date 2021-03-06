import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Switch from "@material-ui/core/Switch";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useFormik } from "formik";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DayJsUtils from "@date-io/dayjs";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useEffect } from "react";
import apiRequest from "../../utils/apiRequest";


const useStyles = makeStyles((theme) => ({
	root: {
	},
	headerRow: {
		backgroundColor: theme.palette.grey[700],
	},
	formField: {
		marginTop: theme.spacing(1)
	},
	formGrid: {
		marginTop: theme.spacing(3)
	},
	autoSwitch: {
		marginTop: theme.spacing(2)
	},
	daySelect: {
		width: "100%",
	},
	marginRight: {
		marginRight: theme.spacing(3)
	}
}));


const EditBillDialog = ({ open, toggleDialog, currentData, refreshTables }) => {

	const theme = useTheme();
	const classes = useStyles();
	const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));


	const editRecurringBill = async (data) => {

		// Edit recurring bill in the billsets collection
		console.log(data);
		const res = await apiRequest.updateEntry(`/api/billsets?id=${data._id}`, data);
		console.log(res);
		return res;

		// Get resulting _id from billset and update bill in the bills collection
		// return await apiRequest.createEntry("/api/bills", { ...data, isRecurring: true, billset: res.data._id });

	}

	const formik = useFormik({

		initialValues: {
			title: currentData.title,
			notes: currentData.notes,
			date: currentData.date,
			isRecurring: currentData.isRecurring,
			recursEvery: currentData.recursEvery,
			recurringPeriod: currentData.recurringPeriod,
			amount: currentData.amount,
			isAutomatic: currentData.isAutomatic
		},
		onSubmit: async (values) => {

			values.amount = parseFloat(values.amount);

			if (values.isRecurring) {
				const res = await editRecurringBill(values);
				toggleDialog();
				formik.resetForm();
				refreshTables();
				return res;
			}

			const res = await apiRequest.updateEntry(`/api/bills?id=${values._id}`, values);
			toggleDialog();
			formik.resetForm();
			refreshTables();
			return res;

		}

	});

	useEffect(() => {

		console.log(currentData);
		formik.setValues({ ...currentData });

	}, [currentData])

	return (

		<div>

			<Dialog
				fullScreen={fullScreen}
				open={open}
				onClose={toggleDialog}
				onEscapeKeyDown={toggleDialog}
				aria-labelledby="add-bill-dialog-title"
				maxWidth="xs"
			>
				<DialogTitle id="add-bill-dialog-title" className={classes.headerRow}>{"Edit Bill"}</DialogTitle>
				<DialogContent>

					<form onSubmit={formik.handleSubmit} autoComplete="off">
						<TextField
							autoFocus
							id="title"
							name="title"
							label="Title"
							type="text"
							value={formik.values.title}
							onChange={formik.handleChange}
							fullWidth
							color="secondary"
							className={classes.formField}
						/>
						<TextField
							id="notes"
							name="notes"
							label="Notes"
							type="text"
							value={formik.values.notes}
							onChange={formik.handleChange}
							fullWidth
							size="small"
							className={classes.formField}
						/>
						<Grid container className={classes.formGrid} justify="space-between">
							<Grid item xs={6}>
								<MuiPickersUtilsProvider utils={DayJsUtils}>
									<KeyboardDatePicker
										autoOk
										clearable
										value={formik.values.date}
										onChange={selectedDate => formik.setFieldValue("date", selectedDate.startOf("day"))}
										placeholder="DD/MM/YYYY"
										format="DD/MM/YYYY"
										showTodayButton
									/>
								</MuiPickersUtilsProvider>
							</Grid>
							<Grid item>
								<FormControlLabel
									control={
										<Switch
											checked={formik.values.isRecurring}
											onChange={formik.handleChange}
											name="isRecurring"
										/>
									}
									label="Recurring bill"
								/>
							</Grid>
						</Grid>
						<Grid container className={classes.formGrid} justify="flex-start">
							<Grid item>
								<Typography variant="h6" component="span" className={classes.marginRight}>Recurs every</Typography>
							</Grid>
							<Grid item xs={2}>
								<FormControl  className={classes.marginRight}>
									<TextField
										id="recursEvery"
										name="recursEvery"
										type="number"
										value={formik.values.recursEvery}
										onChange={formik.handleChange}
										fullWidth
										size="small"
									/>
								</FormControl>
							</Grid>
							<Grid item xs={4}>
								<FormControl className={classes.daySelect}>
									<Select
										id="recurringPeriod"
										name="recurringPeriod"
										value={formik.values.recurringPeriod}
										onChange={formik.handleChange}
									>
										<MenuItem key="day" value="day">day(s)</MenuItem>
										<MenuItem key="week" value="week">week(s)</MenuItem>
										<MenuItem key="month" value="month">month(s)</MenuItem>
										<MenuItem key="year" value="year">year(s)</MenuItem>
									</Select>
								</FormControl>
							</Grid>
						</Grid>
						<TextField
							id="amount"
							name="amount"
							type="text"
							label="Amount"
							value={formik.values.amount}
							onChange={formik.handleChange}
							fullWidth
							size="small"
							className={classes.formField}
						/>
						<FormControlLabel
							control={
								<Switch
									checked={formik.values.isAutomatic}
									onChange={formik.handleChange}
									id="isAutomatic"
									name="isAutomatic"
								/>}
							label="Automatic payment"
							className={classes.autoSwitch}
						/>
					</form>

				</DialogContent>
				<DialogActions>
					<Button variant="contained" type="submit" onClick={formik.handleSubmit} color="secondary">
						Edit Bill
          			</Button>
					<Button variant="contained" onClick={toggleDialog} color="primary">
						Cancel
          			</Button>
				</DialogActions>
			</Dialog>

		</div>

	);

}

export default EditBillDialog;
