/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import NotFoundView from '../../../pages/NotFoundView'

describe('NotFoundView component', () => {
	it('renders NotFoundView component correctly', () => {
		const { container } = render(<NotFoundView />)
		expect(container).toMatchSnapshot()
	})
	it('renders Texts in NotFoundView component correctly', () => {
		render(<NotFoundView />)
		const TextTitle = screen.getByText(/404: Página não encontrada/i)
		const Text = screen.getByText(/Está página não está disponivel no sistema!/i)
		expect(TextTitle).toBeInTheDocument()
		expect(Text).toBeInTheDocument()
	})
})
