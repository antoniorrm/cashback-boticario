import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Router } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'

import './App.css'
import theme from './theme'
import { store, persistor } from './store'
import history from './service/history'
import Routes from './routes'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<SnackbarProvider maxSnack={1}>
							<Router history={history}>
								<Routes />
							</Router>
						</SnackbarProvider>
					</MuiPickersUtilsProvider>
				</PersistGate>
			</Provider>
		</ThemeProvider>
	)
}

export default App
