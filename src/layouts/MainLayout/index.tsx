import React from 'react'
import { makeStyles } from '@material-ui/core'
import LayoutProps from '../../types'
import TopBar from '../../components/TopBar'

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.default,
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
			<TopBar />
			<div className={classes.wrapper}>
				<div className={classes.contentContainer}>
					<div className={classes.content}>{children}</div>
				</div>
			</div>
            {/* <div style={{ textAlign: "center", height: "30px", position: 'fixed', bottom: 0}}>DEV BY: ANTONIORRM</div> */}
		</div>
	)
}

export default MainLayout
