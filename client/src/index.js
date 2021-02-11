import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import grey from "@material-ui/core/colors/grey"

const theme = createMuiTheme({
	palette: {
		type: "dark",
		primary: {
			main: "#375A7F",
		},
		secondary: {
			main: "#F39C12",
		},
	},
	overrides: {
		MuiButton: {
			root: {
				borderRadius: 0,
				textTransform: "none"
			}
		},
		MuiCard: {
			root: {
				borderRadius: 0,
				backgroundColor: grey[800]
			}
		},
		MuiCardContent: {
			root: {
				"&:last-child": {
					paddingBottom: 0
				},
				paddingTop: 0,
				paddingBottom: 0
			}
		},
	}
});


ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
