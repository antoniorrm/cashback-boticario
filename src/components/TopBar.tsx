import React from 'react';
import { AppBar, Toolbar, makeStyles, Button } from '@material-ui/core';

import LogoBoticatio from '../assets/img/logo-boticario-white.svg'

const useStyles = makeStyles(theme => ({
	img: {
		width: '20%',
		[theme.breakpoints.down('sm')]: {
			width: '50%',
		},
		margin: 4,
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
	},
}))

const TopBar = () => {
  const classes = useStyles();

  return (
			<AppBar elevation={0}>
				<Toolbar className={classes.toolbar}>
					<img className={classes.img} src={LogoBoticatio} alt='Logo empresa' />
					<Button variant='outlined' color='inherit'>
						Sair
					</Button>
				</Toolbar>
			</AppBar>
		)
};

export default TopBar;
