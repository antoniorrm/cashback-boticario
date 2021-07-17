import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import './App.css'
import theme from './theme'
import Routes from './Routes'

function App() {
	return (
		<ThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Routes />
            </MuiPickersUtilsProvider>
		</ThemeProvider>
	)
}

export default App
