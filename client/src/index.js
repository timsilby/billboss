import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';

const theme = createMuiTheme({
	palette: {
		type: "dark",
		primary: {
			main: "#0288d1",
		},
		secondary: {
			main: "#ffab40",
		},
	},
	overrides: {
		MuiButton: {
			root: {
				borderRadius: 0,
				textTransform: "none"
			}
		}
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
