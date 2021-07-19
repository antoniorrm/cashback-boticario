/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import * as reactRedux from 'react-redux'
import { Router } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
// import MockAdapter from 'axios-mock-adapter'

import SignIn from '../../../pages/SignIn'
import { store } from '../../../store'
// import api from '../../../service/api'
// const apiMock = new MockAdapter(api)

describe('Login page render sucessfully', () => {
	it('renders component correctly', () => {
		const history = createMemoryHistory()
		const { container } = render(
			<Provider store={store}>
				<Router history={history}>
					<SnackbarProvider maxSnack={1}>
						<SignIn />
					</SnackbarProvider>
				</Router>
			</Provider>
		)
		expect(container).toMatchSnapshot()
	})
	it('should be Button click in component', () => {
		const history = createMemoryHistory()
		const mockDispatch = jest.fn()
		const useDispatch = jest.spyOn(reactRedux, 'useDispatch')
		useDispatch.mockReturnValue(mockDispatch)
		render(
			<Provider store={store}>
				<Router history={history}>
					<SnackbarProvider maxSnack={1}>
						<SignIn />
					</SnackbarProvider>
				</Router>
			</Provider>
		)
		const Button = screen.getByRole('button', { name: 'Acessar' })
		userEvent.click(Button)
		expect(mockDispatch).toHaveBeenCalled()
	})
})
