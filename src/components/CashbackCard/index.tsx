import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
})

const CashbackCard = () => {
	const classes = useStyles()

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography variant='h5' component='h2'>
					Cashback acumulado
				</Typography>
				<Typography variant='body2' component='p'>
					R$ 100,00
				</Typography>
			</CardContent>
		</Card>
	)
}

export default CashbackCard
