/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import SignUp from '../../../pages/SignUp'

describe('Register page render sucessfully', () => {
	it('renders component correctly', () => {
		const { container } = render(
			<SnackbarProvider maxSnack={1}>
				<SignUp />
			</SnackbarProvider>
		)
		expect(container).toMatchSnapshot()
	})
	it('should be Button click in component', () => {
		render(
			<SnackbarProvider maxSnack={1}>
				<SignUp />
			</SnackbarProvider>
		)
		const Button = screen.getByRole('button', { name: 'Cadastrar' })
		expect(Button).toBeInTheDocument()
	})
})
