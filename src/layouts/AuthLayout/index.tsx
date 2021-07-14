import React from 'react'
import { makeStyles } from '@material-ui/core'
import LayoutProps from '../../types'

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.default,
		display: 'flex',
		height: '100%',
		overflow: 'hidden',
		width: '100%',
	},
	wrapper: {
		display: 'flex',
		flex: '1 1 auto',
		overflow: 'hidden',
		paddingTop: 32,
		[theme.breakpoints.up('lg')]: {
			paddingLeft: 100,
			paddingRight: 100,
		},
	},
	contentContainer: {
		display: 'flex',
		flex: '1 1 auto',
		overflow: 'hidden',
	},
	content: {
		flex: '1 1 auto',
		height: '100%',
		overflow: 'auto',
	},
}))

const AuthLayout = (props: LayoutProps) => {
	const { children } = props
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<div className={classes.wrapper}>
				<div className={classes.contentContainer}>
					<div className={classes.content}>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default AuthLayout
