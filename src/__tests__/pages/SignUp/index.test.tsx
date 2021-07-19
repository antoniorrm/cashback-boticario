/* eslint-disable no-undef */
import { render } from '@testing-library/react'
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
})
