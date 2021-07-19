import React, { useMemo, useState, useCallback, memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'
import axios from 'axios'

import { StoreState } from '../../store/createStore'
import { formatCurrecyBR } from '../../utils/formatCurrecyBR'
import { getAccessToken } from '../../service/store'

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
})

const CashbackCard = memo(() => {
	const classes = useStyles()
	const { enqueueSnackbar } = useSnackbar()
	const { userData } = useSelector((state: StoreState) => state.auth)

	const [cashback, setCashback] = useState(0)

	// Exemplo de como consumiria a api externa
	const handleCashbackData = useCallback(async () => {
		try {
			const response = await axios.get(
				`${process.env.REACT_APP_API_CASHBACK_URL}${userData?.cpf}`,
				{
					headers: {
						Authorization: `Bearer ${getAccessToken()}`,
					},
				}
			)
            if (response.data.lengt > 0){
                setCashback(response.data[0].cashbackValue)
            } 
		} catch (error) {
			enqueueSnackbar('Error no carregamento do Cashback', {
				variant: 'error',
			})
		}
	}, [])
	useMemo(() => {
		handleCashbackData()
		return () => {}
	}, [userData?.cpf])

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography variant='h5' component='h2'>
					Cashback acumulado
				</Typography>
				<Typography variant='body2' component='p'>
					{formatCurrecyBR(cashback)}
				</Typography>
			</CardContent>
		</Card>
	)
})

export default CashbackCard
