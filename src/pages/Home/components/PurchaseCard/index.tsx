import React , { memo }from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, IconButton, Typography } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'

import { formatCurrecyBR } from '../../../../utils/formatCurrecyBR'

const useStyles = makeStyles(theme => ({
	root: {
		marginTop: '8px',
		marginBottom: '8px',
	},
	item: {
		margin: '8px',
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
	},
	actionItem: {
		[theme.breakpoints.down('md')]: {
			display: 'flex',
			justifyContent: 'center',
		},
	},
	purchases: {
		[theme.breakpoints.up('sm')]: {
			display: 'flex',
		},
		alignItems: 'center',
		justifyContent: 'space-between',
	},
}))

type PurchaseCardProps = {
	codigo: string
	value: number
	valuePercent: number
	percent: number
	date: string
	status: string
	onEdit: () => void
	onDelete: () => void
}

function PurchaseCardComponent(props: PurchaseCardProps) {
	const classes = useStyles()

	const {
		codigo,
		value,
		valuePercent,
		percent,
		date,
		status,
		onEdit,
		onDelete,
	} = props

	return (
		<Card className={classes.root}>
			<CardContent className={classes.purchases}>
				<div className={classes.item}>
					<Typography color='textSecondary'>CÓDIGO</Typography>
					<Typography variant='body2' component='p'>
						{codigo}
					</Typography>
				</div>
				<div className={classes.item}>
					<Typography color='textSecondary'>VALOR</Typography>
					<Typography variant='body2' component='p'>
						{formatCurrecyBR(value)}
					</Typography>
				</div>
				<div className={classes.item}>
					<Typography color='textSecondary'>CASHBACK (%)</Typography>
					<Typography variant='body2' component='p'>
						{formatCurrecyBR(valuePercent)} ({percent}%)
					</Typography>
				</div>
				<div className={classes.item}>
					<Typography color='textSecondary'>DATA</Typography>
					<Typography variant='body2' component='p'>
						{date !== null && new Date(date).toLocaleDateString()}
					</Typography>
				</div>
				<div className={classes.item}>
					<Typography color='textSecondary'>STATUS</Typography>
					<Typography variant='body2' component='p'>
						{status}
					</Typography>
				</div>
				<div className={classes.actionItem}>
					<div>
						<IconButton aria-label='delete' color='primary' onClick={onEdit}>
							<Edit />
						</IconButton>
						<IconButton aria-label='delete' color='default' onClick={onDelete}>
							<Delete />
						</IconButton>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export default memo(PurchaseCardComponent)