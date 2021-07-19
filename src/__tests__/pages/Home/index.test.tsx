/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { SnackbarProvider } from 'notistack'
import { Provider } from 'react-redux'
import Home from '../../../pages/Home'
import { store } from '../../../store'

describe('Test Home page render correctly', () => {
	it('renders Home component correctly', () => {
		const { container } = render(
			<Provider store={store}>
				<SnackbarProvider maxSnack={1}>
					<Home />
				</SnackbarProvider>
			</Provider>
		)
		expect(container).toMatchSnapshot()
	})
	it('renders Texts in Home component correctly', () => {
		render(
			<Provider store={store}>
				<SnackbarProvider maxSnack={1}>
					<Home />
				</SnackbarProvider>
			</Provider>
		)
		const TextTitle = screen.getByText(/Bem vindo/i)
		const Text = screen.getByText(/Compras cadastradas/i)
		expect(TextTitle).toBeInTheDocument()
		expect(Text).toBeInTheDocument()
	})
})
