import React, { useEffect, useRef, useState } from 'react'
import {
	Box,
	Container,
	Fab,
	makeStyles,
	Tooltip,
	Typography,
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { useSelector } from 'react-redux'

import PurchaseCard from './components/PurchaseCard'
import CashbackCard from '../../components/CashbackCard'
import PurchaseFormModal, { ModalHandler } from './components/PurchaseFormModal'
import api from '../../service/api'
import { StoreState } from '../../store/createStore'

const useStyles = makeStyles(theme => ({
	header: {
		[theme.breakpoints.up('sm')]: {
			display: 'flex',
		},
		alignItems: 'center',
		justifyContent: 'space-between',
		margin: '8px 0',
	},
	absolute: {
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(3),
	},
}))

type Purchase = {
    id: number
	codigo: string
	value: number
	valuePercent: number
	percent: number
    date: string
	status: string
}

export default function Home() {
	const classes = useStyles()

	const refModal = useRef<ModalHandler>(null)

    const { userData } = useSelector((state: StoreState) => state.auth)

    const [purchases, setPurchases] = useState<Purchase[]>([])

    async function handlePurchases() {
        try {
            const response = await api.get(`/purchases?cpf=${userData?.cpf}`)
            setPurchases(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
		handlePurchases()
	}, [])

	return (
		<Container>
			<Box className={classes.header}>
				<Typography variant='h5' component='h2'>
					Bem vindo, {userData?.fullName}
				</Typography>
				<CashbackCard />
			</Box>
			<Typography variant='h5' component='h2'>
				Compras cadastradas
			</Typography>
			{purchases.map(purchase => (
				<PurchaseCard
					key={purchase.id}
					codigo={purchase.codigo}
					value={purchase.value}
					valuePercent={purchase.valuePercent}
					percent={purchase.percent}
					date={purchase.date}
					status={purchase.status}
					onEdit={() => {}}
					onDelete={() => {}}
				/>
			))}
            {purchases.length === 0 && <Typography color='textSecondary' align="center">Sem compras cadastrada!</Typography>}
			<Tooltip title='Adicionar compra' aria-label='add'>
				<Fab
					color='primary'
					className={classes.absolute}
					onClick={() => refModal.current?.handleOpen()}
				>
					<Add />
				</Fab>
			</Tooltip>

			<PurchaseFormModal ref={refModal} />
		</Container>
	)
}
