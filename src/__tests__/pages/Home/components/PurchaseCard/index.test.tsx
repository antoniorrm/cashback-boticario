/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import PurchaseCard from '../../../../../pages/Home/components/PurchaseCard'

const purchasePropsFake = {
	codigo: '1G5T',
	value: 100,
	valuePercent: 12,
	percent: 12,
	date: '2021-07-17T20:10:00.000Z',
	status: 'APROVADO',
	onEdit: () => {},
	onDelete: () => {},
}

describe('PurchaseCard render sucess', () => {
	it('renders component correct', () => {
		const { container } = render(
			<PurchaseCard
				codigo={purchasePropsFake.codigo}
				value={purchasePropsFake.value}
				valuePercent={purchasePropsFake.valuePercent}
				percent={purchasePropsFake.percent}
				date={purchasePropsFake.date}
				status={purchasePropsFake.status}
				onEdit={purchasePropsFake.onEdit}
				onDelete={purchasePropsFake.onDelete}
			/>
		)
		const testComponent = screen.getByText(/CÓDIGO/i)
		expect(container).toMatchSnapshot()
		expect(testComponent).toBeInTheDocument()
	})
})
