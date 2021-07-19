/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

describe('App component', () => {
	it('renders App component correctly', () => {
		const { container } = render(<App />)
		expect(container).toMatchSnapshot()
	})
})
