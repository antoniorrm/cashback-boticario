/* eslint-disable no-undef */
import { render } from '@testing-library/react'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import { Provider } from 'react-redux'
import PurchaseFormModal, { ModalHandler } from '../../../../../pages/Home/components/PurchaseFormModal'
import { store } from '../../../../../store'

const ref = React.createRef<ModalHandler>()

describe('PurchaseFormModal component', () => {
	it('renders PurchaseFormModal component correctly', () => {
		const { container } = render(
            <Provider store={store}>
				<SnackbarProvider maxSnack={1}>
					<PurchaseFormModal ref={ref} purchaseEdit={null} onRefresh={() => {}} />
				</SnackbarProvider>
			</Provider>
		)
		expect(container).toMatchSnapshot()
	})
})
