import React, { useRef } from 'react'
import {
	Box,
	Container,
	Fab,
	makeStyles,
	Tooltip,
	Typography,
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import PurchaseCard from './components/PurchaseCard'
import CashbackCard from '../../components/CashbackCard'
import PurchaseFormModal, { ModalHandler } from './components/PurchaseFormModal'

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

const fakePurchases = [
	{
		codigo: '1AA',
		value: 233,
		valuePercent: 22,
		percent: 12,
		status: 'APROVADO',
	},
	{
		codigo: '9AA',
		value: 122,
		valuePercent: 22,
		percent: 12,
		status: 'EM VALIDAÇÃO',
	},
	{
		codigo: '13AA',
		value: 333,
		valuePercent: 22,
		percent: 12,
		status: 'APROVADO',
	},
	{
		codigo: '122AA',
		value: 233,
		valuePercent: 22,
		percent: 12,
		status: 'REPROVADO',
	},
]

export default function Home() {
	const classes = useStyles()

	const refModal = useRef<ModalHandler>(null)

	return (
		<Container>
			<Box className={classes.header}>
				<Typography variant='h5' component='h2'>
					Bem vindo revendedor
				</Typography>
				<CashbackCard />
			</Box>
			<Typography variant='h5' component='h2'>
				Compras cadastradas
			</Typography>
			{fakePurchases.map(purchase => (
				<PurchaseCard
					key={purchase.codigo}
					codigo={purchase.codigo}
					value={purchase.value}
					valuePercent={purchase.valuePercent}
					percent={purchase.percent}
					status={purchase.status}
					onEdit={() => {}}
					onDelete={() => {}}
				/>
			))}
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
