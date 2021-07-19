/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import * as reactRedux from 'react-redux'

import TopBar from '../../../components/TopBar'
import { store } from '../../../store'

describe('TopBar component', () => {
	it('renders component correct', () => {
		const { container } = render(
			<Provider store={store}>
				<TopBar />
			</Provider>
		)
		expect(container).toMatchSnapshot()
	})
	it('renders image in component correct', () => {
		render(
			<Provider store={store}>
				<TopBar />
			</Provider>
		)
		const image = screen.getByAltText(/Logo empresa/i)
		expect(image).toHaveAttribute('src', 'logo-boticario-white.svg')
	})

	it('renders Button in component correct', () => {
		render(
			<Provider store={store}>
				<TopBar />
			</Provider>
		)
		const Button = screen.getByText(/Sair/i)
		expect(Button).toBeInTheDocument()
	})
	it('should be Button click in component', () => {
        const mockDispatch = jest.fn()
        const useDispatch = jest.spyOn(reactRedux, 'useDispatch')
        useDispatch.mockReturnValue(mockDispatch)
		render(
			<Provider store={store}>
				<TopBar />
			</Provider>
		)
		const Button = screen.getByRole('button', { name: 'Sair' })
		userEvent.click(Button)
		expect(mockDispatch).toHaveBeenCalled()
	})
})
