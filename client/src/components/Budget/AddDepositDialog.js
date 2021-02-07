import { useState } from "react";
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
import { useFormik, Form } from "formik";
import apiRequest from "../../utils/apiRequest";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DayJsUtils from "@date-io/dayjs";


const AddDepositDialog = ({ open, toggleDialog }) => {

	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const addRecurringDeposit = async (data) => {

		// Save recurring deposit to the depositsets collection
		const res = await apiRequest.createEntry("/api/depositsets", data);
		console.log(res);

		// Get resulting _id from depositset and save the first deposit to deposits collection
		return await apiRequest.createEntry("/api/deposits", { ...data, depositSet: res.data._id, paid: true });

	}

	const formik = useFormik({

		initialValues: {
			title: "",
			notes: "",
			depositDate: null,
			isRecurring: false,
			recursEvery: 1,
			recurringPeriod: "day",
			amount: 0,
			isAutomatic: false,
			paid: false
		},
		onSubmit: async (values) => {

			if (values.isRecurring) {
				const res = await addRecurringDeposit(values);
				toggleDialog();
				return res;
			}

			const res = await apiRequest.createEntry("api/deposits", { ...values, paid: true });
			toggleDialog();
			return res;

		}

	});


	return (

		<div>

			<Dialog
				fullScreen={fullScreen}
				open={open}
				onClose={toggleDialog}
				onEscapeKeyDown={toggleDialog}
				aria-labelledby="add-deposit-dialog-title"
			>
				<DialogTitle id="add-deposit-dialog-title">{"New Deposit"}</DialogTitle>
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
						/>
						<MuiPickersUtilsProvider utils={DayJsUtils}>
							<KeyboardDatePicker
								autoOk
								clearable
								disablePast
								value={formik.values.depositDate}
								onChange={selectedDate => formik.setFieldValue("depositDate", selectedDate)}
								placeholder="DD/MM/YYYY"
								format="DD/MM/YYYY"
								showTodayButton
							/>
						</MuiPickersUtilsProvider>
						<FormControlLabel
							control={
								<Switch
									checked={formik.values.isRecurring}
									onChange={formik.handleChange}
									name="isRecurring"
								/>
							}
							label="Recurring deposit"
						/>
						<TextField
							id="recursEvery"
							name="recursEvery"
							label="Recurs every"
							type="number"
							value={formik.values.recursEvery}
							onChange={formik.handleChange}
							fullWidth
							size="small"
						/>
						<FormControl>
							<Select
								id="recurringPeriod"
								name="recurringPeriod"
								value={formik.values.recurringPeriod}
								onChange={formik.handleChange}
								fullWidth
							>
								<MenuItem key="day" value="day">day(s)</MenuItem>
								<MenuItem key="week" value="week">week(s)</MenuItem>
								<MenuItem key="month" value="month">month(s)</MenuItem>
								<MenuItem key="year" value="year">year(s)</MenuItem>
							</Select>
						</FormControl>
						<TextField
							id="amount"
							name="amount"
							label="Amount"
							type="number"
							value={formik.values.amount}
							onChange={formik.handleChange}
							fullWidth
							size="small"
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
						/>
					</form>

				</DialogContent>
				<DialogActions>
					<Button type="submit" onClick={formik.handleSubmit}>
						Add Deposit
          			</Button>
					<Button onClick={toggleDialog}>
						Cancel
          			</Button>
				</DialogActions>
			</Dialog>

		</div>

	);

}

export default AddDepositDialog;
