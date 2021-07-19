/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { SnackbarProvider } from 'notistack'
import { Provider } from 'react-redux'
import CashbackCard from '../../../components/CashbackCard'
import { store } from '../../../store'

describe('CashbackCard render sucess', () => {
	it('renders component correct', () => {
		const { container } = render(
			<Provider store={store}>
				<SnackbarProvider maxSnack={1}>
					<CashbackCard />
				</SnackbarProvider>
			</Provider>
		)
		const testComponent = screen.getByText(/Cashback acumulado/i)
		expect(container).toMatchSnapshot()
		expect(testComponent).toBeInTheDocument()
	})
})
