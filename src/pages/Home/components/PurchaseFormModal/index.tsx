import React, {
	SetStateAction,
	Dispatch,
	FormEvent,
	forwardRef,
	useCallback,
	useEffect,
	useImperativeHandle,
	useState,
} from 'react'
import {
	Backdrop,
	Box,
	Button,
	Grid,
	Modal,
	TextField,
	Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { KeyboardDatePicker } from '@material-ui/pickers'
import { useSelector } from 'react-redux'

import { NumberFormatCustom } from '../../../../utils/maskedInputUtils'
import api from '../../../../service/api'
import { StoreState } from '../../../../store/createStore'
import { Purchase } from '../..'

const useStyles = makeStyles(theme => ({
	margin: {
		margin: 0,
	},
	paper: {
		[theme.breakpoints.down('md')]: {
			width: '60%',
		},
		width: '40%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(4),
		borderRadius: '5px',
	},
	content: {
		width: '100%',
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}))

export interface ModalHandler {
	handleOpen: () => void
}

type ModalHandlerProps = {
	onRefresh: () => void
	purchaseEdit: Purchase | null
	setPurchaseEdit: Dispatch<SetStateAction<Purchase | null>>
}

const PurchaseFormModal = (
	props: ModalHandlerProps,
	ref: React.Ref<ModalHandler> | undefined
) => {
	const classes = useStyles()
	const { onRefresh, purchaseEdit, setPurchaseEdit } = props

	const { userData } = useSelector((state: StoreState) => state.auth)

	const [open, setOpen] = useState(false)
	const [codigo, setCodigo] = useState<string>('')
	const [value, setValue] = useState<string>('')
	const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

	const handleOpen = useCallback(() => {
		setOpen(true)
	}, [])

	useImperativeHandle(ref, () => ({ handleOpen, value }))

	const handleClose = useCallback(() => {
		setOpen(false)
		setPurchaseEdit(null)
		setCodigo('')
		setValue('')
		setSelectedDate(new Date())
	}, [])

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date)
	}

	useEffect(() => {
		if (purchaseEdit !== null) {
			setCodigo(purchaseEdit.codigo)
			setValue(String(purchaseEdit.value))
			setSelectedDate(new Date(purchaseEdit.date))
		}
	}, [purchaseEdit])

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()
		try {
			if (purchaseEdit !== null) {
				await api.patch(`/purchases/${purchaseEdit.id}`, {
					codigo,
					value,
					valuePercent: Number(((12 / 100) * Number(value)).toFixed(2)),
					percent: 12,
					date: selectedDate?.toISOString(),
				})
			} else {
				await api.post('/purchases', {
					codigo,
					value,
					valuePercent: Number(((12 / 100) * Number(value)).toFixed(2)),
					percent: 12,
					date: selectedDate?.toISOString(),
					status: 'EM VALIDAÇÃO',
					cpf: userData?.cpf,
				})
			}
			handleClose()
			onRefresh()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Modal
			disablePortal
			disableEnforceFocus
			disableAutoFocus
			className={classes.modal}
			open={open}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
			aria-labelledby='simple-modal-title'
			aria-describedby='simple-modal-description'
		>
			<Box className={classes.paper}>
				<form className={classes.content} onSubmit={handleSubmit}>
					<Grid container direction='row' justifyContent='center' spacing={2}>
						<Grid item>
							<Typography variant='h5' component='h2'>
								{purchaseEdit !== null ? 'Editar compra' : 'Adicionar compra'}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={12}>
							<TextField
								name='codigo'
								variant='outlined'
								required
								fullWidth
								id='codigo'
								label='Código'
								autoFocus
								value={codigo}
								onChange={e => setCodigo(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								name='value'
								variant='outlined'
								required
								fullWidth
								id='value'
								label='Valor'
								InputProps={{
									inputComponent: NumberFormatCustom as any,
								}}
								value={value}
								onChange={e => setValue(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<KeyboardDatePicker
								fullWidth
								disableToolbar
								variant='inline'
								inputVariant='outlined'
								format='dd/MM/yyyy'
								margin='none'
								id='date'
								label='Data'
								value={selectedDate}
								onChange={handleDateChange}
								KeyboardButtonProps={{
									'aria-label': 'change date',
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={6}>
							<Button type='submit' fullWidth variant='contained' color='primary'>
								Salvar
							</Button>
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={6}>
							<Button
								fullWidth
								variant='outlined'
								color='primary'
								onClick={() => handleClose()}
							>
								Cancelar
							</Button>
						</Grid>
					</Grid>
				</form>
			</Box>
		</Modal>
	)
}

export default forwardRef(PurchaseFormModal)