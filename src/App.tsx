import React from 'react';
import { Button, ThemeProvider } from '@material-ui/core';
import './App.css';
import theme from './theme';

function App() {
  return (
			<ThemeProvider theme={theme}>
				{/* <GlobalStyles /> */}
				{/* {routing} */}
				<Button color='primary'>Primary</Button>
				<Button color='secondary'>Secondary</Button>
			</ThemeProvider>
		)
}

export default App;
