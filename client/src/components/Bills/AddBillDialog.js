import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField"
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useState } from "react";


const AddBillDialog = (props) => {

	const [formData, setFormData] = useState({
		billName: "",
		
	});
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	return (

		<div>

			<Dialog
				fullScreen={fullScreen}
				open={props.open}
				onClose={props.handleClose}
				aria-labelledby="add-bill-dialog-title"
			>
				<DialogTitle id="add-bill-dialog-title">{"New Bill"}</DialogTitle>
				<DialogContent>

					<TextField
						autoFocus
						id="billName"
						name="billName"
						label="Bill Name"
						type="text"
						fullWidth
					/>
					<TextField
						id="billName"
						name="billName"
						label="Bill Name"
						type="text"
						fullWidth
						size="small"
					/>
					<TextField
						id="billName"
						name="billName"
						label="Bill Name"
						type="text"
						fullWidth
						size="small"
					/>
					<TextField
						id="billName"
						name="billName"
						label="Bill Name"
						type="text"
						fullWidth
						size="small"
					/>
					<TextField
						id="billName"
						name="billName"
						label="Bill Name"
						type="text"
						fullWidth
						size="small"
					/>
					<TextField
						id="billName"
						name="billName"
						label="Bill Name"
						type="text"
						fullWidth
						size="small"
					/>
					<TextField
						id="billName"
						name="billName"
						label="Bill Name"
						type="text"
						fullWidth
						size="small"
					/>

				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={props.handleClose} color="primary">
						Disagree
          			</Button>
					<Button onClick={props.handleClose} color="primary" autoFocus>
						Agree
          			</Button>
				</DialogActions>
			</Dialog>

		</div>

	);

}

export default AddBillDialog;
