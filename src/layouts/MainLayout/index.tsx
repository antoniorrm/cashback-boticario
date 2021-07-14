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
		paddingTop: 64,
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

const MainLayout = (props: LayoutProps) => {
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

export default MainLayout
