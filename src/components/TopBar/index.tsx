import React from 'react';
import { AppBar, Toolbar, makeStyles, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import LogoBoticario from '../../assets/img/logo-boticario-white.svg'
import { signOut } from '../../store/modules/auth/actions';

const useStyles = makeStyles(() => ({
	img: {
        width: "30vh",
        maxHeight: "64px",
		margin: 4,
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
	},
}))

const TopBar = () => {
  const classes = useStyles();

  const dispatch = useDispatch()

  async function handleSignOut() {
      await dispatch(signOut())
  }

  return (
			<AppBar elevation={0}>
				<Toolbar className={classes.toolbar}>
					<img className={classes.img} src={LogoBoticario} alt='Logo empresa' />
					<Button variant='outlined' color='inherit' onClick={handleSignOut}>
						Sair
					</Button>
				</Toolbar>
			</AppBar>
		)
};

export default TopBar;
