/* eslint-disable no-alert */
import React, { useCallback, useMemo, useRef, useState } from 'react'
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
import { useSnackbar } from 'notistack'

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

export type Purchase = {
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
	const { enqueueSnackbar } = useSnackbar()
	const refModal = useRef<ModalHandler>(null)

	const { userData } = useSelector((state: StoreState) => state.auth)

	const [purchases, setPurchases] = useState<Purchase[]>([])
	const [purchaseEdit, setPurchaseEdit] = useState<Purchase | null>(null)
	const [onRefresh, setOnRefresh] = useState(false)

	async function handlePurchases() {
		try {
			const response = await api.get(`/purchases?cpf=${userData?.cpf}`)
			setPurchases(response.data)
		} catch (error) {
			enqueueSnackbar('Error ao carregar compras', {
				variant: 'error',
			})
		}
	}

	const onRefreshPurchase = useCallback(() => {
		setOnRefresh(old => !old)
	}, [])

	useMemo(() => {
		handlePurchases()
	}, [onRefresh])

	async function handleEdit(purchase: Purchase) {
		await setPurchaseEdit(purchase)
		refModal.current?.handleOpen()
	}

	async function handleDelete(id: number) {
		if (window.confirm(`Você realmente deletar?`)) {
			try {
				await api.delete(`/purchases/${id}`)
				handlePurchases()
			} catch (error) {
				enqueueSnackbar('Error ao deletar compra', {
					variant: 'error',
				})
			}
		}
	}

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
					onEdit={() => handleEdit(purchase)}
					onDelete={() => handleDelete(purchase.id)}
				/>
			))}
			{purchases.length === 0 && (
				<Typography color='textSecondary' align='center'>
					Sem compras cadastrada!
				</Typography>
			)}
			<Tooltip title='Adicionar compra' aria-label='add'>
				<Fab
					color='primary'
					className={classes.absolute}
					onClick={() => refModal.current?.handleOpen()}
				>
					<Add />
				</Fab>
			</Tooltip>

			<PurchaseFormModal
				ref={refModal}
				purchaseEdit={purchaseEdit}
				setPurchaseEdit={setPurchaseEdit}
				onRefresh={() => onRefreshPurchase()}
			/>
		</Container>
	)
}
